import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'
import { FiHome } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { HiOutlineCloud } from "react-icons/hi2";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";


function Sidebar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = ( buttonId) =>{
    setActiveButton(buttonId)
  }
 
  return (
    <div className='sidebar-container'>
      <div className='sidebar-select-container'>
        <select className="sidebar-select" name='select' >
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div className='sidebar-buttons-container'>
        <div className='sidebar-btns-upper'>
          <button 
            className={`sidebar-button ${activeButton === 1 ? "active" : ""}`}
            onClick={()=> handleClick(1)}
          >
            <FiHome />
            <span>Repositories</span>
          </button>
          <button 
            className={`sidebar-button ${activeButton === 2 ? "active" : ""}`}
            onClick={()=> handleClick(2)}
          >
            <IoCodeSlash />
            <span>AI Code Review</span>
          </button>
          <button 
            className={`sidebar-button ${activeButton === 3 ? "active" : ""}`}
            onClick={()=> handleClick(3)}
          >
            <HiOutlineCloud />
            <span>Cloud Security</span>
          </button>
          <button 
            className={`sidebar-button ${activeButton === 4 ? "active" : ""}`}
            onClick={()=> handleClick(4)}
          >
            <LuBookText />
            <span>How to Use</span>
          </button>
          <button 
            className={`sidebar-button ${activeButton === 5 ? "active" : ""}`}
            onClick={()=> handleClick(5)}
          >
            <IoSettingsOutline />
            <span>Settings</span>
          </button>
        </div>
        <div className='sidebar-btns-lower'>
          <button 
            className={`sidebar-button ${activeButton === 6 ? "active" : ""}`}
            onClick={()=> handleClick(6)}
          >
            <FiPhone />
            <span>Support</span>
          </button>
          <button 
            className="sidebar-button"
            onClick={ () => navigate('/')}
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar