import React, { useState } from 'react';
import "./componentscss/SystemCreate.css"

function SystemCreate() {
  const [formValues, setFormValues] = useState({
    systemId: '',
    systemName: '',
    logoId: '',
       logoPath: '',
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
      // Save the image file to the systemlogostore directory
      const fileName = `${formValues.systemId}_${formValues.logoId}_${file.name}`;
      const filePath = `../systemlogostore/${fileName}`;
      fetch(filePath, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      }).then(() => {
        setFormValues({
          ...formValues,
          logoPath: filePath,
        });
      });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can use the form data (formValues.systemId, formValues.systemName, formValues.logoId, formValues.logoPath)
    // to submit the form to your backend or do whatever you need to do
    console.log(formValues);
  };

  return (
    <div className="systemcreate-div">
    <label>
      <h1 className="systemcreate-h1">Add System</h1>
    </label>

    <form className='systemcreate-form' onSubmit={handleSubmit}>
      <div className='systemcreate-div2' >
        <label className='systemcreate-label2' htmlFor="systemId">System ID:</label>
        <input className='systemcreate-input' 
          type="text"
          id="systemId"
          name="systemId"
          value={formValues.systemId}
          onChange={handleInputChange}
        />
      </div>
      <div className='systemcreate-div2' >
        <label className='systemcreate-label2' htmlFor="systemName">System Name:</label>
        <input className='systemcreate-input' 
          type="text"
          id="systemName"
          name="systemName"
          value={formValues.systemName}
          onChange={handleInputChange}
        />
      </div>
      <div className='systemcreate-div2' >
        <label className='systemcreate-label2'  htmlFor="logoId">Logo ID:</label>
        <input className='systemcreate-input' 
          type="text"
          id="logoId"
          name="logoId"
          value={formValues.logoId}
          onChange={handleInputChange}
        />
      </div>
      <div className='systemcreate-div2' >
        <label className='systemcreate-label2'  htmlFor="logo">Logo:</label>
        <input className='systemcreate-input' 
          type="file"
          id="logo"
          name="logo"
          onChange={handleLogoChange}
        />
      </div>
      <input className='systemcreate-button'  type="submit" value="Submit" />
      <input className='systemcreate-input'  type="hidden" id="logoPath" name="logoPath" value={formValues.logoPath} />
    </form>
    </div>
  );
}

export default SystemCreate;