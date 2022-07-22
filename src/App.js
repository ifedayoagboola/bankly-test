import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import UserDetails from "./components/steps/UserDetails";
import Location from "./components/steps/Location";
import Confirmation from "./components/steps/Confirmation";
import Modal from "./components/Modal";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Account Information", "Personal Details", "Payment", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <UserDetails />;
      case 2:
        return <Location />;
      case 3:
        return <Confirmation />;
      case 4:
        return <Modal />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
}

export default App;
