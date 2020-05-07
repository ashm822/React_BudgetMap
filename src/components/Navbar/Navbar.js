import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavbarToggler } from 'reactstrap';
import SlideNav from '../SlideNav';


class NavbarPage extends React.Component {
      // constructor(props) {
      // super(props);

  //   this.toggleNav = this.toggleNav.bind(this);
  //   this.state = {
  //     isNavOpen: false

  //   };
  // }
  // toggleNav() {
  //   this.setState({
  //     isNavOpen: !this.state.isNavOpen
  // });
  //  };

  render() {
    return (
      <>
        <nav sticky="top" expand="md" style={{display: 'flex'}} >         
            <SlideNav />           
            <NavbarBrand style={{display: 'inline-block', margin: 'auto'}} className="logo" href="/">
              <img src="./images/AMPlogo.png" alt="logo" width="250"></img> </NavbarBrand>        
        </nav>
      </>

    );
  }
}

export default NavbarPage;