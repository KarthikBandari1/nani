import {useState} from 'react'
import Table from './components/Table'
import Chart from './components/Chart'
import './App.css'

const dummyData = [
  {
    Id: 1,
    Year: 2004,
    Medals: 1,
  },
  {
    Id: 2,
    Year: 2008,
    Medals: 3,
  },
  {
    Id: 3,
    Year: 2012,
    Medals: 6,
  },
  {
    Id: 4,
    Year: 2016,
    Medals: 2,
  },
  {
    Id: 5,
    Year: 2020,
    Medals: 7,
  },
]

function App() {
  const [showTable, setShowTable] = useState(true)
  const [showChart, setShowChart] = useState(false)

  const toggleTable = () => {
    setShowTable(true)
    setShowChart(false)
  }

  const toggleChart = () => {
    setShowTable(false)
    setShowChart(true)
  }

  return (
    <div className="bg-cont">
      <div className="personal">
        <h1>Bandari Karthik</h1>
        <p>bandarikarthik159@gmail.com</p>
        <p>9949065463</p>
      </div>
      <div className="toggle-buttons">
        <button
          type="button"
          className={showTable ? 'active' : ''}
          onClick={toggleTable}
        >
          Table
        </button>
        <button
          type="button"
          className={showChart ? 'active' : ''}
          onClick={toggleChart}
        >
          Chart
        </button>
      </div>
      <div className="content">
        {showTable && <Table dummyData={dummyData} />}
        {showChart && <Chart dummyData={dummyData} />}
      </div>
    </div>
  )
}

export default App
