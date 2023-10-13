const SkillsChart = ({ skill, color, parcentage }) => {
  return (
    <div className="col-sm-6">
      <div className="skill mb-4">
        <div className="d-flex justify-content-between">
          <p className="mb-2">{skill}</p>
          <p className="mb-2">{parcentage}%</p>
        </div>
        <div className="progress">
          <div
            className={`progress-bar ${color}`}
            role="progressbar"
            aria-valuenow={parcentage}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${parcentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;
