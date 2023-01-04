import "./RangeInput.css";

interface RangeInputProps {
  value: string;
  label: string;
  onChange: (val: string) => void;
  enable?: boolean;
  min?: string;
  max?: string;
}
export default function RangeInput({
  value,
  label,
  onChange,
  enable,
  min,
  max,
}: RangeInputProps) {
  return (
    <div>
      <label htmlFor="customRange2" className="form-label">
        {label}
      </label>

      <input
        step={1}
        type="range"
        className="form-range input-range"
        min={min ?? "0"}
        max={max ?? "4"}
        id="customRange2"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        disabled={!enable}
      />
      <div id="circles">
        <span>
          <div className="dot"></div>
        </span>
        <span>
          <div className="dot"></div>
        </span>
        <span>
          <div className="dot"></div>
        </span>
        <span>
          <div className="dot"></div>
        </span>
        <span>
          <div className="dot"></div>
        </span>
      </div>
    </div>
  );
}
