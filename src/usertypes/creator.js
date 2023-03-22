import React, { useState } from 'react';


import './cssmain/admin.css'

import FormCreate from '../components/creatorcomponents/FormCreate';
import FormList from '../components/creatorcomponents/FormList';


function Creator() {
   
    const [selected, setSelected] = useState('client-master');
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
  
    function handleDragStart(e) {
      setIsDragging(true);
    }
  
    function handleDragEnd(e) {
      setIsDragging(false);
    }
  
    function handleToggleSidebar() {
      setIsSidebarVisible(!isSidebarVisible);
    }
  

    
  
    const handleClick = (link) => {
      setSelected(link);
      console.log(link,selected);
    };
  
    const renderComponent = () => {
      switch(selected) {
        case 'user-creation':
          return <FormCreate />;
        case 'client-db-create':
          return <FormList />;

        default:
          return <FormList />;
      }
    };
  
    return (
      <div className="admin">
              <div
        className={`admin-sidebar${isSidebarVisible ? " visible" : ""}${
          isDragging ? " dragging" : ""
        }`}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <button className="admin-sidebar-toggle" onClick={handleToggleSidebar}>
          {isSidebarVisible ? "<<" : ">>"}
        </button>
          <ul>
            <li className={selected === 'user-creation' ? 'active' : ''}>
              <div onClick={() => handleClick('user-creation')}>FormCreate</div>
            </li>
            <li className={selected === 'client-db-create' ? 'active' : ''}>
              <div onClick={() => handleClick('client-db-create')}>FormList</div>
            </li>
          </ul>
        </div>
        <div className="admin-main">
          {renderComponent()}
        </div>
      </div>
    );
  }
  
  export default Creator;