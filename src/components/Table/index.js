import './index.css'

function Table(props) {
  const {dummyData} = props
  return (
    <div className="table-view">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(data => (
            <tr>
              <td>{data.Id}</td>

              <td>{data.Year}</td>
              <td>{data.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
