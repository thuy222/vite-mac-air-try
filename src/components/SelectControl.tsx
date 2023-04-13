import React from "react";

interface TSelectControl {
  data?: {
    value: string;
    label: string;
  }[];
  onChangeSelect?: (value: string) => void;
  defaultValue?: string;
}

const SelectControl = ({
  data,
  onChangeSelect,
  defaultValue,
}: TSelectControl) => {
  return (
    <div>
      <select
        id=""
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          e.preventDefault();
          e.stopPropagation();
          onChangeSelect && onChangeSelect(e.target.value);
        }}
        defaultValue={defaultValue}
      >
        {data &&
          data.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectControl;
