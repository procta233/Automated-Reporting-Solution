 const Testing2=()=> {
const heading = [
  { head1: "Temperature", head2: "Humidity", unit: "Celsius" },
  { head1: "Pressure", head2: "Flow Rate", unit: "PSI" },
  { head1: "Voltage", head2: "Current", unit: "Ampere" },
  { head1: "Frequency", head2: "Power Factor", unit: "Hertz" },
  { head1: "Velocity", head2: "Acceleration", unit: "m/s²" },
  { head1: "Distance", head2: "Time", unit: "m/s" }
];

const [data, setData] = useState([[]]);
const options = [
  ['Apple', 5],
  ['Banana', 10],
  ['Cherry', 15],
  ['Date', 20],
  ['Elderberry', 25],
  ['Fig', 30],
  ['Grape', 35],
  ['Honeydew', 40],
  ['Kiwi', 45],
  ['Lemon', 50],
];

    return (
      <div className="finalformcreate-container">
        <label className="finalformcreate-label">
          Reorder Columns for Final Report
        </label>
        <table className="finalformcreate-table " htmlFor="#table">
          <thead className="finalformcreate-thead">
            <tr className="finalformcreate-tr">
              {heading.map((header, col) => (
                <th className="finalformcreate-th" key={col}>
                  {col === 0 ? (
                    <div>
                      <th>
                        <tr>{header.head1}</tr>
                        <tr>{}</tr>
                        <tr>{header.unit}</tr>
                      </th>
                    </div>
                  ) : (
                    <div>
                      <th>
                        <tr>{header.head1}</tr>
                        <tr>{header.head2}</tr>
                        <tr>{header.unit}</tr>
                      </th>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
  
          <tbody className="finalformcreate-tbody">
            {data.map((row, rowIndex) => (
              <tr className="finalformcreate-tr" key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td className="finalformcreate-td" key={colIndex}>
                    {colIndex === 0 && rowIndex > 0 ? (
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                      />
                    ) : rowIndex > 0 ? (
                      <select
                        value={cell}
                        onClick={(e) =>
                          handleSelectChange(e, rowIndex, colIndex)
                        }
                      >
                        <option value="-">-</option>
                        {options.map((cur,index) => (
                          <option key={index} value={cur[1]} >
                          {cur[0]}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <></>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          <tr>
          <button className="finalformcreate-add-button" onClick={addRow}>
            Add Row
          </button>

          </tr>
          </tbody>

          <select
                        value={cell}
                        onClick={(e) =>
                          handleSelectChange(e, rowIndex, colIndex)
                        }
                      >
                        <option value="-">-</option>
                        {options.map((cur,index) => (
                          <option key={index} value={cur[1]} >
                          {cur[0]}
                          </option>
                        ))}
                      </select>

        </table>
      </div>
    );
  }