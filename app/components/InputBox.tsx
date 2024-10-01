/* eslint-disable react/prop-types */
"use client"

import { ChangeEventHandler } from "react";

interface InputBoxProps {
  type: string,
  label: string,
  placeholder: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}
export const InputBox: React.FC<InputBoxProps>= ({ type, label, placeholder, onChange }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}
