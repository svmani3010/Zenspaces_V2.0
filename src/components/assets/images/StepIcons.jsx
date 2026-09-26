// import "./StepIcons.css";

// Base internal component used by the exporters
const BaseIcon = ({ number, color, style }) => (
  <div className="step-icon-wrapper" style={style}>
    <div className="step-icon-ring" style={{ borderColor: "#e5e7eb" }}>
      <div
        className="step-dot dot-top"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="step-dot dot-bottom"
        style={{ backgroundColor: color }}
      ></div>
      <span className="step-number" style={{ color: color }}>
        {number}
      </span>
    </div>
  </div>
);

/* --- EXPORTED FUNCTIONS --- */

export const StepOne = (props) => (
  <BaseIcon number="01" color="#f9cc76" {...props} />
);

export const StepTwo = (props) => (
  <BaseIcon number="02" color="#63b3ed" {...props} />
);

export const StepThree = (props) => (
  <BaseIcon number="03" color="#63b3ed" {...props} />
);

export const StepFour = (props) => (
  <BaseIcon number="04" color="#f9cc76" {...props} />
);

export const StepFive = (props) => (
  <BaseIcon number="05" color="#f9cc76" {...props} />
);
