import React, { useState, useEffect } from "react";
function CustomRangeSlider({ handleChange, value }) {
  useEffect(() => {
    //
    const sliderValue = document.querySelector("span");
    const inputSlider = document.querySelector("input");
    let value = inputSlider.value;
    sliderValue.textContent = value;
    sliderValue.style.left = value / 2 + "%";
    sliderValue.classList.add("show");
  });
  return (
    <div className='maindev'>
      <div class='range mt-20 w-full bg-red-500'>
        <div class='sliderValue'>
          <span className='text-black'>{value}</span>
        </div>
        <div class='field'>
          {/* <div class='value left'>{value}</div> */}
          <input
            type='range'
            min='0'
            max='200'
            steps='1'
            value={value}
            onChange={(e) => handleChange(e)}
          />
          {/* <div class='value right'>200</div> */}
        </div>
      </div>
    </div>
  );
}

export default CustomRangeSlider;
