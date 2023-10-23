import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import './index.css'

function Chart(props) {
  const {dummyData} = props
  return (
    <div className="chart-view">
      <LineChart width={500} height={300} data={dummyData}>
        <XAxis
          dataKey="Year"
          label={{value: 'Year', position: 'insideBottom', offset: -9}}
        />
        <YAxis label={{value: 'Medals', angle: -90, position: 'insideLeft'}} />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Medals" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default Chart
