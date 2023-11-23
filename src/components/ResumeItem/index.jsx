import "./index.css";

export const ResumeItem = ({ title, value, color }) => {
  return (
    <div className="resume-container">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="info" style={{ color: color }}>
        <p> R$ {value} </p>
      </div>
    </div>
  );
};
