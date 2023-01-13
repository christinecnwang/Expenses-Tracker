import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  let yearTotal = dataPointValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  var fixedYearTotal = yearTotal.toFixed(2);

  return (
    <div>
      <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        ))}
      </div>
      <div className='total'>Yearly Total: ${fixedYearTotal}</div>
    </div>
  );
};

export default Chart;
