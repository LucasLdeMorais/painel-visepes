import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Legend,
  BarChart,
  Bar,
  LabelList,
} from "recharts";

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const valueAccessor = (entry) => {
  return entry ? (entry.uv + entry.pv) : 0;
};

export default function EmendasPorAno() {
    const emendas = require('../../../data/EmPal2021.json');
    return (
        <div className="chart">
            <ResponsiveContainer width="100%">
                <BarChart width={600} height={300} data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d">
                        <LabelList position="top" valueAccessor={valueAccessor}/>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}