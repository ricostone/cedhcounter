import React from "react";

interface Props {
  options: { [key: string]: number | string };
  setOption: (option: any) => void;
}

const SelectOptions = ({ options, setOption }: Props) => {
  return (
    <div>
      {Object.keys(options)
        .filter(key => isNaN(Number(key)))
        .map((key, i) => {
          return (
            <button
              className={"btn btn-primary"}
              onClick={() => setOption(options[key])}
              key={i}
            >
              {options[key]}
            </button>
          );
        })}
    </div>
  );
};

export default SelectOptions;
