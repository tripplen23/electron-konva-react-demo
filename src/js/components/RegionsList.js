import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import * as arrayMove from 'array-move';

import useBenStore from "../store";

const SortableItem = SortableElement(({ region, sortIndex, onRemove }) => {
  return (
    <div
      className="region"
      style={{
        boxShadow: `0 0 5px ${region.color}`,
        border: `1px solid ${region.color}`
      }}
    >
      Region #{region.id}
      <button
        onClick={() => {
          onRemove(sortIndex);
        }}
      >
        Delete
      </button>
    </div>
  );
});

const SortableList = SortableContainer(({ items, onRemove }) => {
  return (
    <div className="regions-list">
      {items.map((region, index) => (
        <SortableItem
          key={`item-${region.id}`}
          index={index}
          region={region}
          onRemove={onRemove}
          sortIndex={index}
        />
      ))}
    </div>
  );
});

export default () => {
  const regions = useBenStore(s => s.regions);
  const setRegions = useBenStore(s => s.setRegions);

  return (
    <SortableList
      items={regions}
      onSortEnd={({ oldIndex, newIndex }) => {
        setRegions(arrayMove(regions, oldIndex, newIndex));
      }}
      onRemove={index => {
        regions.splice(index, 1);
        setRegions(regions.concat());
      }}
    />
  );
};
