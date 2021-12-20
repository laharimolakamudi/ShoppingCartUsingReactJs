import React from 'react';

class Navbar extends React.Component {

    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="cartlogo.png" alt="" width={30} height={24} className="d-inline-block align-text-top" />
            My Cart
          </a>
        </div>
      </nav>
    );
  }
       
    
}
 
export default Navbar;