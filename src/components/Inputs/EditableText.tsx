import { useState } from "react";

interface EditableTextProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
export const EditableText = ({ value, onChange, type, onBlur, ...props  }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div
      onDoubleClick={() => { 
        setIsEditing(true);
      }} 
      {...props}
    >
      {isEditing ? (
        <input
          className="w-full p-1 bg-transparent border-2 rounded-lg outline-none peer focus:placeholder:opacity-0"
          type={type}
          value={value}
          onChange={onChange}
          onBlur={(e) => {setIsEditing(false); onBlur?.(e);  }}
          autoFocus={true}
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};