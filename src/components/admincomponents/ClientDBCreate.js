import React, { useState } from "react";
import "./componentscss/ClientDBCreate.css";
import { fetchPostApi } from "../../api/singlecall";

function ClientDBCreate() {
  const URL=process.env.REACT_APP_URL;
  const [formValues, setFormValues] = useState({
    clientid: "",
    clientname: "",
    hostofdatabase: "",
    userofdatabase: "",
    passwordofdatabase: "",
    databasename: "",
    waitForConnections: 1,
    connectionLimit: 5,
    queueLimit: 0,
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // setFormValues({
      //   ...formValues,
      //   logo: reader.result,
      // });
      // Save the image file to the clientlogostore directory
      const fileName = `${formValues.clientid}_${formValues.logoId}_${file.name}`;
      const filePath = `../clientlogostore/${fileName}`;
      fetch(filePath, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      }).then(() => {
        setFormValues({
          ...formValues,
          logoPath: filePath,
        });
      });
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can use the form data (formValues.clientId, formValues.clientName, formValues.logoId, formValues.logoPath)
    // to submit the form to your backend or do whatever you need to do
    console.log(formValues);
    const API =URL+"addCredential";
    try {
      const result = await fetchPostApi(API, formValues);
      console.log(result); // do something with the result
    } catch (error) {
      console.log(error); // handle the error
    }

    console.log(formValues);
  };

  return (
    <div className="clientdbcreate-div">
      <label>
        <h1 className="clientdbcreate-h1">Add New Client</h1>
      </label>

      <form className="clientdbcreate-form" onSubmit={handleSubmit}>
        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="clientid">
            Client ID:
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="clientid"
            name="clientid"
            value={formValues.clientid}
            onChange={handleInputChange}
          />
        </div>
        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="clientname">
            Client Name:
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="clientname"
            name="clientname"
            value={formValues.clientname}
            onChange={handleInputChange}
          />
        </div>
        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="hostofdatabase">
            Host:
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="hostofdatabase"
            name="hostofdatabase"
            value={formValues.hostofdatabase}
            onChange={handleInputChange}
          />
        </div>

        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="userofdatabase">
            User :
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="userofdatabase"
            name="userofdatabase"
            onChange={handleInputChange}
          />
        </div>

        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="logo">
            Logo:
          </label>
          <input
            className="clientdbcreate-input"
            type="file"
            id="logo"
            name="logo"
            onChange={handleLogoChange}
          />
        </div>
        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="passwordofdatabase">
            Password :
          </label>
          <input
            className="clientdbcreate-input"
            type="password"
            id="passwordofdatabase"
            name="passwordofdatabase"
            onChange={handleInputChange}
          />
        </div>

        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="databasename">
            Database Name :
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="databasename"
            name="databasename"
            onChange={handleInputChange}
          />
        </div>

        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="connectionLimit">
            Connections :
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="connectionLimit"
            name="connectionLimit"
            onChange={handleInputChange}
          />
        </div>

        <div className="clientdbcreate-div2">
          <label className="clientdbcreate-label2" htmlFor="queueLimit">
            Queue Limit :
          </label>
          <input
            className="clientdbcreate-input"
            type="text"
            id="queueLimit"
            name="queueLimit"
            onChange={handleInputChange}
          />
        </div>

        <input className="clientdbcreate-button" type="submit" value="Submit" />
        <input
          className="clientdbcreate-button"
          type="hidden"
          id="userofdatabase"
          name="userofdatabase"
          value={formValues.logoPath}
        />
      </form>
    </div>
  );
}

export default ClientDBCreate;
