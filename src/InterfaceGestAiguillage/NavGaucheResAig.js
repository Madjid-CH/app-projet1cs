import React from 'react'
import '../InterfaceAdmin/Accessoirs/Admin.css'
import Logo from '../img/SmallerLogo.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell , faChartPie, faCircleExclamation,faWarning } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'   
     
export const NavGaucheResAig = () => {
  return (
       <>
     
    <div className='left-nav-container'>
         <div className='logo-container'>
             <a href="/">
                <img src={Logo}  className="lg" alt='Logo' />
             </a>
        </div>
         <div className="left-elements">
              
            
                    <NavLink  to="/ResAig/consulter"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                               <FontAwesomeIcon icon={faWarning} className="icon-left" />
                               <p>Consulter les déclarations</p> 
                    </NavLink>
                 

                    
                    <NavLink  to="/ResAig/notification"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                             <FontAwesomeIcon icon={faBell} className="icon-left" /> 
                            <p>Notifications</p> 
                    </NavLink>
          
       
                   
                   <NavLink  to="/ResAig/statistiques"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                           <FontAwesomeIcon icon={faChartPie} className="icon-left" />   
                           <p>Statistiques</p>
                    </NavLink>
         
        </div>
        <div className="left-elements">
         
                    
                    <NavLink  to="/aide"
                              className={(navData) => (navData.isActive ? 'active' : 'link')}> 
                              <FontAwesomeIcon icon={faCircleExclamation} className="icon-left" />
                               <p>Aide</p>
                    </NavLink>
   
        </div>
   
   
  </div> 
  </>
  )
}