import React,{useState,useEffect} from 'react';
import { fetchGetApi,fetchPostApi } from "../api/singlecall";

import { useLocation } from "react-router-dom";


function ViewBoard() {
   
    const URL=process.env.REACT_APP_URL;
    const API1 = URL+"advancesearch";
    const API2=URL+"description/reportid";
    const API3=URL+"getsetdata/reportid";
    const API4=URL+"systems";
    const API5 = URL + "manufacturers";
    const [description,setdec]=useState({clientid:"",systems:"",manufacturer:"",datebegin:"",timebegin:"",dateend:"",timeend:"",reportname:""});
    const [clientname,setclientname]=useState("");
    const [data,FillSetPointData]=useState([[]]);
    const {state} = useLocation();
    const [clientList, setClientList] = useState([]);
    const [systemList, setSystemList] = useState([]);
    const [selectedDB, setSelectedDB] = useState("");
    const [manufacturerList, setManufacturerList] = useState([]);
    const [table1, setTable1] = useState([]);
    const [formList, setFormList] = useState([]);
    const [sel, setSel] = useState(null);
    const [min_date, setmin_date] = useState("");
    const [max_date, setmax_date] = useState("");

  const [formValues, setFormValues] = useState({
    userid: "ABS-896645467/Creator",
    clientid: "",
    formtype: "",
    systems: "",
    manufacturer: "",
    datebegin: "",
    timebegin: "",
    dateend: "",
    timeend: "",
    status1: "Draft",
    timetype: "",
    table1:'',
    databasename:'',
    version:'',
    reportid:state.alfa,
    utilityid:null,
    prechandler:'',
    nexthandler:'',
    count:1,
    reportname:"",

  });

  const [body, setBody] = useState([]);
  const [headi2, setHeadi2] = useState([[]]);
  const [heading, setHeading] = useState([]);

const fetch2 = async (AP,data2) => {   
    const result1 = await fetchPostApi (AP,data2);
     console.log("result1",result1)
     setdec(result1.result[0]);
     setclientname(result1.clientname)
};

const fetch3 = async (API,data2) => {
    const resultsetdataapi = await fetchPostApi (API,data2);
    FillSetPointData(resultsetdataapi.setdata)
      console.log("resultsetdataapi",resultsetdataapi.setdata);
    //  FillSetPointData(result1.setdata);
};

const fetch4 = async (API) => {
   const result = await fetchGetApi(API);

   setSystemList(result);
 };

 const fetch5 = async (API) => {
   const result = await fetchGetApi(API);

   setManufacturerList(result);
 };

const xat=async()=>{
 const delta = { reportid:state.alfa ,databasename:"bz2vx6b6k3kn9nlapzd9", tablename:"cLIENT_2_table_1"};
   
    const response3 =await fetchPostApi(API1,delta);
    console.log(response3);
    setHeading(response3.firstheader);
    const arr = {
      sensorname: "S5",
      head1: "Set Points",
      head2: "Date and Time",
      unit: "",
      attribute: "",
      formtype: "",
    };
    setHeading([arr, ...response3.firstheader]) ;
    const pan=response3.body;
    var te = [[]];
    for (var i = 0; i < pan.length - 1; i++) {
      te[i] = Object.values(pan[i]);
    }
    setHeadi2([arr,...response3.secondheader]);
    setBody(te);
};

useEffect(() => {
 const xx={reportid:state.alfa};
 console.log("xxxxxxxxxx",xx)
   fetch2(API2,xx);
   fetch3(API3,xx);
   fetch4(API4);
   fetch5(API5);
  xat();
}, []);
 
const handlechange2=(e)=>{
    e.preventDefault();
    const x=e.target.name;
    const y=e.target.value;
    // `set${x}(${y})`;
    console.log("eventttttttt",e);
}

 const handleChange = (event) => {
   
      const { name, value } = event.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
    
const getUniqueSystems = [
    ...new Set(systemList.map((item) => item.systemname)),
  ];
const getUniqueManu = [
  ...new Set(manufacturerList.map((item) => item.manufacturername)),
];

return (
  <>
    <div className="finalformcreate-container">
      <table
        className="finalformcreate-table "
        htmlFor="#table"
        style={{ borderWidth: "0.5px", borderColor: "black" }}
      >
        <thead className="finalformcreate-thead">
          <tr className="finalformcreate-tr">
            <th colSpan={heading.length} style={{ textAlign: "center" }}>
              {description.reportname}
            </th>
          </tr>
          <tr className="finalformcreate-tr">
            <th>Client </th>
            <th colSpan={heading.length - 1}>{clientname}</th>
          </tr>
          <tr className="finalformcreate-tr">
            <th>System Name</th>
            <th colSpan={heading.length - 1}>
              <select
                className="formcreate-select"
                type="text"
                id="systems"
                name="systems"
                value={formValues.systems}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {getUniqueSystems.map((cur, index) => (
                  <option key={index}>{cur}</option>
                ))}
              </select>
            </th>
          </tr>
          <tr className="finalformcreate-tr">
            <th>Manufactured By </th>
            <th colSpan={heading.length - 1}>
              <select
                className="formcreate-select"
                type="text"
                id="manufacturer"
                name="manufacturer"
                value={formValues.manufacturer}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {getUniqueManu.map((cur, index) => (
                  <option key={index}>{cur}</option>
                ))}
              </select>
            </th>
          </tr>
          <tr className="finalformcreate-tr">
            <th>From Date and Time</th>
            <th colSpan={heading.length - 1}>
              {!formValues.datebegin && (
                <>
                  <input
                    className="formcreate-select"
                    type="text"
                    id="datebegin"
                    name="datebegin"
                    min={min_date}
                    max={max_date}
                    value={formValues.datebegin}
                    onChange={handleChange}
                    disabled={!min_date && !max_date}
                    inputMode="numeric"
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  />

                  <input
                    className="formcreate-select"
                    type="time"
                    id="timebegin"
                    name="timebegin"
                    value={formValues.timebegin}
                    onChange={handleChange}
                  />
                </>
              )}
            </th>
          </tr>

          <tr className="finalformcreate-tr">
            <th>To Date and Time </th>
            <th colSpan={heading.length - 1}>
              {description.dateend} {description.timeend}
            </th>
          </tr>
          <tr className="finalformcreate-tr">
            {" "}
            <th colSpan={heading.length}></th>
          </tr>

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
                  {cell}
                </td>
              ))}
            </tr>
          ))}

          <tr className="finalformcreate-tr">
            {headi2.map((header, col) => (
              <th className="finalformcreate-th" key={col}>
                {col > 1 ? (
                  <div>
                    <div>
                      <th>
                        <tr>{header.head1}</tr>
                        <tr>{header.head2}</tr>
                        <tr>{header.unit}</tr>
                      </th>
                    </div>
                  </div>
                ) : (
                  <>
                    {col === 1 ? (
                      <div>
                        <th>
                          <tr>{header.head1}</tr>
                          <tr>{header.head2}</tr>
                          <tr>{header.unit}</tr>
                        </th>
                        \
                      </div>
                    ) : (
                      <div>
                        <th>
                          <tr>{}</tr>
                          <tr>{header.head2}</tr>
                          <tr>{header.unit}</tr>
                        </th>
                      </div>
                    )}
                  </>
                )}
              </th>
            ))}
          </tr>
          {body.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <button className="finalformcreate-submit-button">Save Changes</button>
      </table>
    </div>
  </>
);
}

export default ViewBoard;
