import React, { useEffect, useState } from "react";
import { useStepperContext } from "../../contexts/StepperContext";

const Location = () => {
  const { userData, setUserData } = useStepperContext();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const states = ["lagos", "Osun", "Abia", "Imo", "Oyo"];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dd7fb4ef57msh9aaf486187981e7p160f65jsnbca3fef6ddce",
      "X-RapidAPI-Host": "nigeria-states-and-lga.p.rapidapi.com",
    },
  };

  const apiGet = () => {
    setLoading(true);
    fetch("https://nigeria-states-and-lga.p.rapidapi.com/lgalists", options)
      .then((response) => response.json())
      .then((response) => {
        if (response?.length > 0) {
          setData(response);
          setLoading(false);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiGet();
  }, []);
  console.log(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("checker", name, value);
    setUserData({ ...userData, [name]: value });
  };
  const stateSelected = userData["city"];
  console.log(stateSelected);

  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          {loading ? "Please wait..." : "State"}
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select
            name="city"
            id=""
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            onChange={handleChange}
            value={userData["city"] || ""}
          >
            {data &&
              data?.map((item) => {
                return <option key={item?.id}>{item?.State}</option>;
              })}
          </select>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Local government</div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select
            name="lg"
            id=""
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            onChange={handleChange}
            value={userData["lg"] || ""}
          >
            {data
              ?.filter((item) => {
                return item?.State === stateSelected;
              })
              .map((item) => {
                return <option key={item?.id}>{item?.LGA}</option>;
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Location;
