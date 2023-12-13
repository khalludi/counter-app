import React, { useEffect, useState } from "react";
import "./App.css";
import { decrementCount, getCount, incrementCount } from "./api/getCount";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCount() {
      try {
        const count = await getCount();
        setCount(count);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCount();
  }, []);

  return (
    <div className="App bg-space h-screen bg-no-repeat bg-center bg-cover">
      <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl pt-12">
        Guardian Gauge
      </h1>

      <div className="mt-32" />
      <div className="shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-500 w-72 h-72 lg:w-80 lg:h-80 rounded-full relative left-1/2 -translate-x-1/2">
        <h2 className="text-white text-8xl lg:text-9xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          {count}
        </h2>
      </div>

      <div className="mt-32" />
      <div className="flex space-x-32 sm:space-x-52 justify-center">
        <button
          onClick={async () => {
            setCount(await decrementCount());
          }}
          className="shadow-2xl bg-gradient-to-b from-red-600 to-red-300 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full text-white flex flex-col justify-center items-center"
        >
          <div className="bg-white w-12 lg:w-16 h-2 rounded-md opacity-70" />
        </button>
        <button
          onClick={async () => {
            setCount(await incrementCount());
          }}
          className="shadow-2xl bg-gradient-to-b from-green-600 to-green-300 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full text-white relative"
        >
          <div className="bg-white w-12 lg:w-16 h-2 rounded-md opacity-70 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
          <div className="bg-white w-2 h-12 lg:h-16 rounded-md opacity-70 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
        </button>
      </div>

      {/* Footer */}
      <div className="bg-[#343434] h-10 w-screen flex justify-center items-center absolute bottom-0">
        <p className="text-white">&#169; codingKhareed 2023</p>
      </div>
    </div>
  );
}

export default App;
