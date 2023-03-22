import React, { useEffect, useState } from "react";
import {fetchGetApi, fetchPostApi } from "../../api/singlecall";
import "../admincomponents/componentscss/FormCreate.css";

function FormCreate() {
  const [showComponentOne, setShowComponentOne] = useState(true);
  const [showComponentTwo, setShowComponentTwo] = useState(false);
  const [showComponentThree, setShowComponentThree] = useState(false);
  const [showComponentFour, setShowComponentFour] = useState(false);
  const [showComponentFive, setShowComponentFive] = useState(false);

  const [clientList, setClientList] = useState([]);
  const [systemList, setSystemList] = useState([]);
  const [selectedDB,setSelectedDB] = useState([]);
  const [manufacturerList,setManufacturerList]=useState([]);
  const [tables,setTables]=useState([]);

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
    tables:'',
    databasename:'',
  });


  function getClientIdByDatabaseName(jsonArray, databasename) {
    const obj = jsonArray.find(item => item.databasename === databasename);
    return obj ? obj.clientid : null;
  };
  const Cid=getClientIdByDatabaseName(clientList,selectedDB);
  console.log(Cid,selectedDB);
  const getUniqueSystems = [
    ...new Set(systemList.map((item) => item.systemname)),
  ];
  const getUniqueManu = [
    ...new Set(manufacturerList.map((item) => item.manufacturername)),
  ];

  const API1 ="https://automatic-reporting-system.onrender.com/api/client/databases";
  const API2="https://automatic-reporting-system.onrender.com/api/systems"
  const API3="https://automatic-reporting-system.onrender.com/api/manufacturers"
  const API4 = "https://automatic-reporting-system.onrender.com/api/tables";
  const API5 = "https://automatic-reporting-system.onrender.com/api/uniqueformtypes";
  const fetch1 = async (API) => {
    
    const result = await fetchGetApi (API);
    console.log("result1",result);
    setClientList(result); 
  };
  const fetch2 = async (API) => {
    
    const result = await fetchGetApi (API);
    console.log("result2",result);
    setSystemList(result); 
  };

  const fetch3 = async (API) => {
    
    const result = await fetchGetApi (API);
    console.log("result3",result);
    setManufacturerList(result); 
  };

  useEffect(() => {
  fetch1(API1);
  fetch2(API2);
  fetch3(API3);
  }, []);

  function ComponentOne() {
    return (<div className="formcreate-div">
    <label  className="formcreate-label" htmlFor="dbSelect">
      <h1 className="formcreate-h1">Database Select:</h1>
      </label>
    <select className="formcreate-select" id="dbSelect" onChange={(e)=>handleDBSelection(e.target.value)}>
      <option className="formcreate-option" value="">Select a database</option>
      {clientList.map((cur,key)=>(
        <option key={key} value={cur.databasename}>{cur.databasename}</option>
      ))}
      
    </select>
  </div>);
  }
  
  function ComponentTwo() {
    
    return (<div className="formcreate-div">
      <label className="formcreate-label">
        <h1 className="formcreate-h1db">
      <p>Selected database: {selectedDB}</p>
      </h1>
      </label>
      <div className="formcreate-div">
<label>
    <h1 className="formcreate-h1">Create New Report</h1>
  </label>
  
<form className="formcreate-form" onSubmit={(e)=>handleSubmit(e)}>
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
  <button className="formcreate-button" type="submit">Next {">>"}</button>
  
  
  </div>
</form>


</div>
</div>);
  }
  
  function ComponentThree() {
    return (
      <div>hi</div>
    );
  }
  
  function ComponentFour() {
    return <h1>Component Four</h1>;
  }
  
  function ComponentFive() {
    return <h1>Component Five</h1>;
  }
 

  const handleClickOne = () => {
    console.log(tables, formValues);
  };

  
  const handleDBSelection =async (event) => {
    setSelectedDB(event);
    setShowComponentOne(false);
    setShowComponentTwo(true);
    setShowComponentThree(false);
    setShowComponentFour(false);
    setShowComponentFive(false);
  
    const dat = await fetchPostApi(API4, { databasename:event });
    setTables(dat);
    // console.log(dat);
    
  };
  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    setShowComponentOne(false);
    setShowComponentTwo(false);
    setShowComponentThree(true);
    setShowComponentFour(false);
    setShowComponentFive(false);
    // setSelectedDB(event.target.value);
    setFormValues({
      ...formValues,
      databasename: selectedDB,
      clientid:Cid
    });
  };

  const handleClickFour = () => {
    setShowComponentOne(false);
    setShowComponentTwo(false);
    setShowComponentThree(false);
    setShowComponentFour(true);
    setShowComponentFive(false);
  };

  const handleClickFive = () => {
    setShowComponentOne(false);
    setShowComponentTwo(false);
    setShowComponentThree(false);
    setShowComponentFour(false);
    setShowComponentFive(true);
  };

  return (
    <div>
      <button onClick={handleClickOne}>Component One</button>
    
     
      <button onClick={handleClickFour}>Component Four</button>
      <button onClick={handleClickFive}>Component Five</button>
      <br />
      <br />
      {showComponentOne && <ComponentOne />}
      {showComponentTwo && <ComponentTwo />}
      {showComponentThree && <ComponentThree />}
      {showComponentFour && <ComponentFour />}
      {showComponentFive && <ComponentFive />}
    </div>
  );
};
export default FormCreate;