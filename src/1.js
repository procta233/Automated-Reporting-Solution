import React, { useState,useEffect } from "react";
import "../admincomponents/componentscss/FormCreate.css";

const FormCreate = () => {
  const [selectedDB, setSelectedDB] = useState(null);
  const [clientList, setClientList] = useState([]);
  const [systemList, setSystemList] = useState([]);
  const [repList, setRepList] = useState([]);
  const [repid,setRepid]=useState([]);
  const [manufacturerList,setManufacturerList]=useState([]);
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
    status: "",
    timetype: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const API7 = "https://create-users.onrender.com/api/sensorlist";
  const API5 = "https://automatic-reporting-system.onrender.com/api/client/databases";
  const API4 = "https://automatic-reporting-system.onrender.com/api/manufacturers";
  const API6 = "https://automatic-reporting-system.onrender.com/api/systems";
  const API8 = "";

  const getUniqueClients = [
    ...new Set(clientList.map((item) => item.clientid)),
  ];


  function getClientIdByDatabaseName(jsonArray, databasename) {
  const obj = jsonArray.find(item => item.databasename === databasename);
  return obj ? obj.clientid : null;
}
const Cid=getClientIdByDatabaseName(clientList,selectedDB);


  const getUniqueSystems = [
    ...new Set(systemList.map((item) => item.systemname)),
  ];
  const getUniqueManu = [
    ...new Set(manufacturerList.map((item) => item.manufacturername)),
  ];
  // const getUniqueFormTypes = [
  //   ...new Set(repList.map((item) => item.reporttype)),
    
  // ];
  const navHandle = ()=>{
    const clie=formValues.clientid;
    const rep = repid;
 
//  if (repid !== '')
 
// { navigate("datetimeoptionality", { state: { race, rep, clie } });
// };
  };
    
  const handleDBSelection = (event) => {
    setSelectedDB(event.target.value);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    setFormSubmitted(true);
  };
  const getclient = async (API5) => {
    // Fetch the data from your API or any source
    const response = await fetch(API5);
    const data1 = await response.json();

    return data1;
  };
  const getsys = async (API6) => {
    // Fetch the data from your API or any source
    const response = await fetch(API6);
    const data2 = await response.json();
    return data2;
  };
  const getrep = async (API7) => {
    // Fetch the data from your API or any source
    const response = await fetch(API7);
    const data3 = await response.json();

    return data3;
  };
  const getman = async (API8) => {
    // Fetch the data from your API or any source
    const response = await fetch(API8);
    const data3 = await response.json();

    return data3;
  };

  useEffect(() => {
    getman(API4).then((data) => setManufacturerList(data));
    getclient(API5).then((data1) => setClientList(data1));
    getsys(API6).then((data2) => setSystemList(data2));
    
    // getrep(API7).then((data3) => setRepList(data3));
    // getman(API8).then((data3) => setManufacturerList(data3));
  }, []);
  if (formSubmitted) {
    // render the other component here
    return <div>My Other Component</div>;
  }
  return (
    <div className="formcreate-div">
    <>
    
      {selectedDB ? (
        <div >
          <label>
            <h1 className="formcreate-h1db">
          <p>Selected database: {selectedDB}</p>
          </h1>
          </label>
          <div className="formcreate-div">
    <label>
        <h1 className="formcreate-h1">Create New Report</h1>
      </label>
      
    <form className="formcreate-form" onSubmit={handleSubmit}>
     <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="userid">User ID</label>
      <input
      className="formcreate-select"
        type="text"
        id="userid"
        name="userid"
        value={formValues.userid}
        onChange={handleChange}
        placeholder={formValues.userid}
        disabled
      />
      </div>
      <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="clientid">Client ID</label>
      <input
      className="formcreate-select"
        type="text"
        id="clientid"
        name="clientid"
        value={Cid}
        // onChange={handleChange}
        placeholder={Cid}
        disabled
      />
      {/* <select
      className="createreport-select"
        type="text"
        id="clientid"
        name="clientid"
        value={formValues.clientid}
        onChange={handleChange}
      >
        <option value="" disabled >
          Select an option
        </option>
        {getUniqueClients.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select> */}
      </div>
      {/* <div className="createreport-div2">
      <label  className="createreport-label-2" htmlFor="reporttype">Report Type</label>
      <select
      className="createreport-select"
        type="text"
        id="reporttype"
        name="reporttype"
        value={formValues.reporttype}
        onChange={handleChange}
      >
        <option value="" disabled >
          Select an option
        </option>
        {getUniqueFormTypes.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div> */}
       <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="systems">Systems</label>
      <select
        className="formcreate-select"
        type="text"
        id="systems"
        name="systems"
        value={formValues.systems}
        onChange={handleChange}
      >
        <option value="" disabled >
          Select an option
        </option>
        {getUniqueSystems.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div>   
        <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="manufacturer">Manufacturer</label>
      <select
        className="formcreate-select"
        type="text"
        id="manufacturer"
        name="manufacturer"
        value={formValues.manufacturer}
        onChange={handleChange}
      >
        <option value="" disabled >
          Select an option
        </option>
        {getUniqueManu.map((cur, index) => (
          <option key={index}>{cur}</option>
        ))}
      </select>
      </div>
       <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="datebegin">Date Begin</label>
      <input
      className="formcreate-input"
        type="date"
        id="datebegin"
        name="datebegin"
        value={formValues.datebegin}
        onChange={handleChange}
        />
      </div>
          <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="timebegin">Time Begin</label>
      <input
      className="formcreate-input"
        type="time"
        id="timebegin"
        name="timebegin"
        value={formValues.timebegin}
        onChange={handleChange}
      />
      {console.log("hii",formValues.datebegin)}
     { console.log(formValues.timebegin)}
      </div>
      <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="dateend">Date End</label>
      <input
        className="formcreate-input"
        type="date"
        id="dateend"
        name="dateend"
        value={formValues.dateend}
        onChange={handleChange}
       />
      </div>
      <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="timeend">Time End</label>
      <input
        className="formcreate-input"
        type="time"
        id="timeend"
        name="timeend"
        value={formValues.timeend}
        onChange={handleChange}
      />
      </div>
      <div className="formcreate-div2">
      <label className="formcreate-label-2" htmlFor="timetype">Time Type</label>
      <select
      className="formcreate-select"
        type="text"
        id="timetype"
        name="timetype"
        value={formValues.timetype}
        onChange={handleChange}
      >
        <option value="" disabled >
          Select an option
        </option>
        <option value="1">Date And Time Separate</option>
        <option value="2">Date And Time Joined</option>
      </select>
      </div>
      
      <div>
      <button className="formcreate-button" type="submit">Save</button>
      <button className="formcreate-button" onClick={navHandle}>{"Next>"}</button>
      
      </div>
    </form>
  

    </div>
        </div>
      ) : (
        <div className="formcreate-div">
          <label  className="formcreate-label" htmlFor="dbSelect">
            <h1 className="formcreate-h1">Database Select:</h1>
            </label>
          <select className="formcreate-select" id="dbSelect" onChange={handleDBSelection}>
            <option className="formcreate-option" value="">Select a database</option>
            {clientList.map((cur,key)=>(
              <option key={key} value={cur.databasename}>{cur.databasename}</option>
            ))}
            
          </select>
        </div>
      )}
    </>
    </div>
  );
  
};

export default FormCreate;

    ``


















