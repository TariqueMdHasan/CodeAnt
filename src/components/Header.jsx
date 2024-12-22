import React from 'react'
import './Header.css'
import { LuRefreshCw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

function Header() {
    return (
        <div className='header'>
            <div className='header-container-top'>
                <div className='header-rep-container'>
                    <h1 className='header-rep'>Repositories</h1>
                    <p className='header-tp'>33 total repositories</p>
                </div>
                <div className='header-btn-container'>
                    <button className='header-refresh'>
                        <LuRefreshCw />
                        <span>Refresh All</span>
                    </button>
                    <button className='header-add'>
                        <FaPlus />
                        <span>Add Repository</span>
                    </button>
                </div>
            </div>
            <div className='header-search'>
                <div className='header-search-container'>
                    <IoSearchOutline />
                    <input type="text" placeholder='Search Repository' className='header-search-input' />
                </div>
            </div>
        </div>
    )
}

export default Header