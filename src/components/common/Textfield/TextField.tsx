import { SetStateAction } from "react";

interface TextFieldProps {
  name: string;
  placeholder: string;
  onChange: (e: SetStateAction<string>) => void;
  value: string;
  label?: string;
  rows?: number;
}
export default function TextField({
  rows,
  name,
  placeholder,
  onChange,
  value,
  label,
}: TextFieldProps) {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(e.currentTarget.value)}
        rows={rows ?? 3}
        maxLength={150}
        value={value}
        id="floatingTextarea2"
        style={{ height: "100px" }}
      ></textarea>
      <label htmlFor="floatingTextarea2">{name}</label>
    </div>
  );
}
