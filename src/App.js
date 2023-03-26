import "./App.css";
import AppForm from "./component/AppForm";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormInfo from "./component/FormInfo";
import Layout1 from "./component/Layout1";
import Home from "./component/Home";
import { TCRangeSlider } from "toolcool-range-slider";
import Slider from "react-rangeslider";
import CustomRangeSlider from "./CustomRangeSlider";
import "react-rangeslider/lib/index.css";
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <div>
      <Routes>
        <Route
          {...rest}
          element={(props) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      </Routes>
    </div>
  );
};

export default function App() {
  const [value, onChange] = useState(1);
  console.log("value::::", value);

  function handleChange(e) {
    // console.log("EEE", e.target);
    onChange(e.target.value);
  }

  return (
    <>
      {/* <div class='container'> */}
      {/* <input
        id='rs-range-line'
        type='range'
        min='0'
        max='200'
        step={1}
        value={value}
        onChange={(e) => handleChange(e)}
        className=' h-3 bg-gray-200 w-full rounded-lg appearance-none cursor-pointer  dark:bg-gray-700'
      /> */}

      {/* <Slider
        min={10}
        max={10}
        step={10}
        value={value}
        reverse={true}
        tooltip={true}
        labels={"iiii"}
        onChange={handleChange}
      /> */}
      {/* <div class='range-slider'>
        <input
          id='rs-range-line'
          class='rs-range'
          type='range'
          min='0'
          max='200'
          value={value}
          onChange={(e) => handleChange(e)}
          className='h-3 bg-gray-200 w-full rounded-lg appearance-none cursor-pointer  dark:bg-gray-700'
        />
        <span id='rs-bullet' className='.buble'>
          {value}
        </span>
      </div>

      <div class='box-minmax'>
        <span>0</span>
        <span>200</span>
      </div>
    </div> */}

      <CustomRangeSlider value={value} handleChange={handleChange} />
    </>
  );
}
