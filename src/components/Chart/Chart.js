import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const arr = props.dataPoints.map((point) => point.value);
  const totalMaximum = Math.max(...arr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
