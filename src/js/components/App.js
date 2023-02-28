import React from 'react';

import useBenStore from "../store";

import RegionsList from "./RegionsList"
import Canvas from "./Canvas"
import DarkToggle from "./DarkToggle"

export default function App() {

  const { setBrightness } = useBenStore();

  return (
    <React.Fragment>
      <DarkToggle />
      <h2>App chú thích hình ảnh</h2>
      <p className='description'>Hãy vẽ khoanh vùng 1 đối tượng</p>
      <p className='description'>Hướng dẫn: Kéo chuột xuống từ điểm bạn chọn để khoanh vùng đối tượng</p>

      <div className ="App">

        {/* Left Panel */}
        <div className="left-panel">
          Brightness
          <input 
            id="slider"
            type="range"
            min="-1"
            max="1"
            step="0.05"
            defaultValue="0"
            onChange={e => {
              setBrightness(parseFloat(e.target.value));
            }}
          />
          <RegionsList/>
        </div>

        {/* Right Panel */}
        <div className='right-panel'>
          <Canvas />
        </div>
      </div>
    </React.Fragment>
  )
}