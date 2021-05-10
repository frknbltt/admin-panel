import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import "../global.css";
import { useState, useEffect } from "react";

const barChartData = [
  { name: "2010", uv: 300, pv: 2400, amt: 2400 },
  { name: "2011", uv: 80, pv: 2400, amt: 2400 },
  { name: "2012", uv: 150, pv: 2400, amt: 2400 },
  { name: "2013", uv: 400, pv: 2400, amt: 2400 },
  { name: "2014", uv: 290, pv: 2400, amt: 2400 },
  { name: "2015", uv: 350, pv: 2400, amt: 2400 },
];

const leafletChartData = [
  { name: "2010", uv: 300, pv: 2400, amt: 2400 },
  { name: "2011", uv: 80, pv: 2400, amt: 2400 },
  { name: "2012", uv: 150, pv: 2400, amt: 2400 },
  { name: "2013", uv: 400, pv: 2400, amt: 2400 },
  { name: "2014", uv: 290, pv: 2400, amt: 2400 },
  { name: "2015", uv: 350, pv: 2400, amt: 2400 },
];

const GoogleChartsPage = () => {
  const [chartwidth, setchartWidth] = useState(500);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setchartWidth(300);
      }
      if (window.innerWidth > 600) {
        setchartWidth(400);
      }
      if (window.innerWidth > 1300) {
        setchartWidth(500);
      }
    });
  }, [window.innerWidth]);

  return (
    <div className="charspage-head">
      <h2>Visitor statistics from 2010 to 2016 </h2>
      <br />
      <div className="chartspage">
        <div className="barchart">
          <h4>Bar Chart</h4>
          <br />
          <BarChart
            className="chart-barchart"
            width={chartwidth}
            height={300}
            data={barChartData}
          >
            <XAxis dataKey="name" stroke="#8854d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
          </BarChart>
        </div>

        <div className="leafletchart">
          <h4>Line Chart</h4>
          <br />
          <LineChart
            className="chart-barchart"
            width={chartwidth}
            height={300}
            data={leafletChartData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default GoogleChartsPage;
