import { AddIcon, TrashIcon } from "../Icons";
import { Fab } from "../Buttons";
import TextInput from "./TextInput";
import { useState } from "react";

export type DynamicInputProps = {
  onChange: (value: string[]) => void;
  label: string;
};

export const DynamicInput = (props: DynamicInputProps) => {
  const [values, setValues] = useState([""]);
  let classArray = [
    "flex-shrink",
    "flex-grow",
    "flex-auto",
    "leading-normal",
    "flex-1",
    "border",
    "h-10",
    "border-grey-light",
    "rounded",
    "rounded-l-none",
    "px-3",
    "relative",
    "focus:border-blue",
    "focus:shadow",
    "mt-1",
    "mb-2",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let v = [...values];
    v[index] = e.target.value;
    setValues(v);

    if (props.onChange) {
      props.onChange(values);
    }
  };

  const addInput = () => {
    setValues([...values, ""]);
  };

  const removeInput = (index: number) => {
    let v = [...values];
    v.splice(index, 1);
    setValues(v);
  };

  return (
    <>
      <div className="flex flex-row">
        <label className="flex-auto">
          {props.label}
          <span className="pl-2">
            <Fab size="xs" onClick={addInput}>
              <AddIcon className="w-4 h-4 mb-1" />
            </Fab>
          </span>
        </label>
      </div>
      {values.map((value, index) => (
        <div className="relative flex-row" key={index}>
          <div
            className="absolute flex-auto text-gray-400 cursor-pointer hover:text-red-500"
            style={{ top: "12px", left: "-24px" }}
            onClick={() => removeInput(index)}
          >
            <TrashIcon />
          </div>
          <TextInput
            className="w-full"
            value={value}
            onChange={(e) => handleChange(e, index)}
            placeholder={"Enter " + props.label + " " + (index + 1)}
          />
        </div>
      ))}
    </>
  );
};

export default DynamicInput;
