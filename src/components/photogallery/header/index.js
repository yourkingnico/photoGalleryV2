import React from 'react';
import { Link } from "gatsby"
import './style.scss'


class Header extends React.Component {
 
  constructor(props) {
    super(props);
    
  }

  mobileMenu(){
    return(
      <Link  to="/galleryDirectory">
        <button className='mobileMenu'>Directory</button>       
      </Link>
    )
  }
  
    render() {
        let classNav = "collapse navbar-collapse navbar-right navbar-main-collapse";
       
        return(
          <nav className="navbar navbar-custom " role="navigation" style={{
            opacity:'0.7'
          }}>

          <div className="container" 
          style={{
            
            backgroundColor: 'black'
          }}>
            <div className="navbar-header">
              <Link className="navbar-brand page-scroll" to="/">
                <div>
                  { "{ Nick Torres }" }
                </div>
              </Link>
              
              {this.mobileMenu()}
            </div>
            
            <div className={classNav}>
              
              <ul className="nav navbar-nav" id="nav-links" >
                <Link className="navbar-brand page-scroll" to="/galleryDirectory">
                  <li>Directory</li>
                </Link>
              </ul>
              {this.props.tripNumber}
            </div>
          </div>
          </nav>
        )
    }
}

export default Header;
