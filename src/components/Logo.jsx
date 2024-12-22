import React from 'react'
import MainIcon from './assets/main-Icon.png'
import './Logo.css'

function Logo() {
    return (
        <div className='Logo__logo'>
            <div className='Logo-image'>
                <img src={MainIcon} alt="main_icon" className='Logo_icon' />
            </div>
            <div className='Logo-name'>
                <h2 className='Logo-name-h2'>CodeAnt AI</h2>
            </div>
        </div>
    )
}

export default Logo