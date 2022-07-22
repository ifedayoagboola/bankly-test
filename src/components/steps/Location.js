import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";

const Location = () => {
  const { userData, setUserData } = useStepperContext();
  const states = ["lagos", "Osun", "Abia", "Imo", "Oyo"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("checker", name, value);
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">State</div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          {/* <input
            onChange={handleChange}
            value={userData["address"] || ""}
            name="address"
            placeholder="Address"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          /> */}
          <select
            name="city"
            id=""
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            onChange={handleChange}
            value={userData["city"] || ""}
          >
            {states.map((state) => {
              return <option>{state}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Local government</div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          {/* <input
            onChange={handleChange}
            value={userData["city"] || ""}
            name="city"
            placeholder="City"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          /> */}
          <select
            name="lg"
            id=""
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            onChange={handleChange}
            value={userData["lg"] || ""}
          >
            {states.map((state) => {
              return <option>{state}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Location;
