import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Landing.css'
import Subtract from './assets/Subtract-icon.png';
import LMain from './assets/main-left-icon.png';
import Logo from './Logo';
import { GoKey } from "react-icons/go";
import Gitlab from './assets/gitlab-logo.png';
import Azure from './assets/azure-logo.png';
import Bitbucket from './assets/bitbucket-icon.png';
import Github from './assets/github-icon.png';


function Landing() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = ( buttonId) =>{
    setActiveButton(buttonId)
  }

  return (
    <div className='Landing'>
        <div className='Landing-left'>
            <img src={LMain} alt="main" className='LMain'/>
            <img src={Subtract} alt="subtract" className='subtract'/>
        </div>
        <div className='Landing-right'>
            <div className='Landing-right-container'>
              <div className='Landing-right-content-upper'>
                <div className='Landing-right-content-upper-logo'>
                  <Logo />
                  <h1>Weocome to the CodeAnt AI</h1>
                </div>
                <div className='Landing-right-content-upper-btns'>
                  <button 
                    className={`landing-button ${activeButton === 1 ? "active" : ""}`}
                    onClick={()=> handleClick(1)}
                  >
                      SAAS
                  </button>
                  <button 
                    className={`landing-button ${activeButton === 2 ? "active" : ""}`}
                    onClick={()=> handleClick(2)}  
                  >
                      Self Hosted
                  </button>
                </div>
              </div>

              {/* forms */}
              <div className='Landing-right-content-lower'>
                {/* saas */}
                {activeButton === 1 && (
                  <div className='saas-form'>
                  <button className='saas-form-btn sfb1' onClick={ () => navigate('/main')}>
                    <div>
                      <img src={Gitlab} alt="gitlab" className='gitlab'/>
                    </div>
                    <h3>Self Hosted Gitlab</h3>
                  </button>
                  <button className='saas-form-btn sfb2' onClick={ () => navigate('/main')} >
                    <div>
                      <GoKey />
                    </div>
                    <h3>Sign in with SSO</h3>
                  </button>
                </div>
                )}
                {/* shf */}
                {
                  activeButton === 2 && (
                    <div className='self-hosted-form'>
                  <button className='saas-form-btn' onClick={ () => navigate('/main')}>
                    <div>
                      <img src={Github} alt="github" className='github'/>
                    </div>
                    <h3>Sign in with Github</h3>
                  </button>
                  <button className='saas-form-btn' onClick={ () => navigate('/main')}>
                    <div>
                      <img src={Azure} alt="azure" className='azure'/>
                    </div>
                    <h3>Sign in with Bitbucket</h3>
                  </button>
                  <button className='saas-form-btn' onClick={ () => navigate('/main')}>
                    <div>
                      <img src={Bitbucket} alt="bitbucket" className='bitbucket'/>
                    </div>
                    <h3>Sign in with Azure Devops</h3>
                  </button>
                  <button className='saas-form-btn' onClick={ () => navigate('/main')}>
                    <div>
                      <img src={Gitlab} alt="gitlab" className='gitlab'/>
                    </div>
                    <h3>Self Hosted Gitlab</h3>
                  </button>
                </div>
                  )
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Landing