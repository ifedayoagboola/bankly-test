import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";

const Confirmation = () => {
  const { userData } = useStepperContext();
  console.log(userData);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-4">
        <p className="text-lg font-semibold">First name:</p>
        <p className="text-sm font-semibold">{userData.firstname}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-lg font-semibold">Last name:</p>
        <p className="text-sm font-semibold">{userData.lastname}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-lg font-semibold">Phone number:</p>
        <p className="text-sm font-semibold">{userData.phone}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-lg font-semibold">State:</p>
        <p className="text-sm font-semibold">{userData.city}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-lg font-semibold">Local Government:</p>
        <p className="text-sm font-semibold">{userData.lg}</p>
      </div>

      <p className="text-sm font-semibold pt-16 text-red-500">
        Kindly check that the information above is correct. Click "Confirm" to submit or click "Back" to edit.
      </p>
    </div>
  );
};

export default Confirmation;
