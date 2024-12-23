// import React from 'react'
// import './LargeScreen.css'
// import Logo from './Logo'
// import Sidebar from './Sidebar'
// import Navbar from './Navbar';
// import Header from './Header'
// import Work from './Work'



// function LargeScreen() {
//     return (
//         <div className='LargeScreen'>
//             <div className='LS-sidebar'>
//                 <div className='LS-sidebar-logo'>
//                     <Logo />
//                 </div>
//                 <div className='LS-sidebar-others'>
//                     <Sidebar  />
//                 </div>
//             </div>
//             <div className='LS-navbar'>

//             </div>
//             <div className='LS-main'>
//                 <div className='LS-main-container'>
//                     <div className='LS-main-navbar'>
//                         <Navbar />
//                     </div>
//                     <div className='LS-main-header'>
//                         <Header />
//                     </div>
//                     <div className='LS-main-content'>
//                         <Work />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LargeScreen












import React, { useState } from 'react';
import './LargeScreen.css';
import Logo from './Logo';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Header from './Header';
import Work from './Work';

function LargeScreen() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='LargeScreen'>
            <div className='LS-sidebar'>
                <div className='LS-sidebar-logo'>
                    <Logo />
                </div>
                <div className='LS-sidebar-others'>
                    <Sidebar />
                </div>
            </div>
            <div className='LS-navbar'></div>
            <div className='LS-main'>
                <div className='LS-main-container'>
                    <div className='LS-main-navbar'>
                        <Navbar />
                    </div>
                    <div className='LS-main-header'>
                        <Header setSearchTerm={setSearchTerm} />
                    </div>
                    <div className='LS-main-content'>
                        <Work searchTerm={searchTerm} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LargeScreen;
