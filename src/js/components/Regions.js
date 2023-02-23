import React from "react";
import { Layer, Line } from "react-konva";

import useBenStore from "../store";

export default () => {
  const regions = useBenStore(s => s.regions);
  const layerRef = React.useRef(null);

  const selectedId = useBenStore(s => s.selectedRigionId);
  const selectRegion = useBenStore(s => s.selectRegion);

  return (
    <Layer ref={layerRef}>
      {regions.map(region => {
        const isSelected = region.id === selectedId;
        return (
          <React.Fragment key={region.id}>
            {/* first we need to erase previous drawings */}
            {/* we can do it with  destination-out blend mode */}
            <Line
              globalCompositeOperation="destination-out"
              points={region.points.flatMap(p => [p.x, p.y])}
              fill="black"
              listening={false}
              closed
            />
            {/* then we just draw new region */}
            <Line
              name="region"
              points={region.points.flatMap(p => [p.x, p.y])}
              fill={region.color}
              closed
              opacity={isSelected ? 1 : 0.8}
              onClick={() => {
                selectRegion(region.id);
              }}
            />
          </React.Fragment>
        );
      })}
    </Layer>
  );
};
