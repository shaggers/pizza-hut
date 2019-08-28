import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {

      }
    }
  
    render() {
      return (
        <div id="Landing">
            <Link to={`/order_menu`}>
                <button id="landingButton" type="button"><h2>Order a Pizza</h2></button>
            </Link>
        </div>
      );
    }
  }
  
  export default Landing;