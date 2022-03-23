import React from 'react';
import  '../styles/styles.css';
import  Jalisco from '../styles/img/jalisco.png';


function HomeChildren({children}) {
    return (
      <div>
          <nav className="container-fluid screen">
              <div className='responsive-area'>
                <div className=''> 
                <div className='grid2'>
                        <div className="row">
                            <span className='jal'></span>
                            <span className='logo-jal'></span>

                        
                        </div>
                        <div className="row margin-nav">
                            <p className='calculadora-txt'>Calculadora</p>
                           
                            <span className='ico_aviso'><p className='letter-aviso'>Aviso de privacidad</p></span>
                            
                            

                        
                        </div>
                </div> 
                </div>
              </div>
          </nav>
          <div className="container-fluid sin-pad">
            {children}
          </div>
          <footer className='container-fluid'>
            <div className='row img-footer'>
                <span className='img-footer1'></span>
                <span className='img-footer2'></span>
                <span className='img-footer3'></span>
                <span className='img-footer4'></span>
                <span className='img-footer5'></span>
                <span className='img-footer6'></span>
                <span className='img-footer7'></span>
               
            </div>
          </footer>
      </div> 
  
    );
  }
  

  export default function Home({ children }) {
    return <HomeChildren children={children} />;
  }