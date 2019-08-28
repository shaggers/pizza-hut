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
        <div className="Landing">
            <Link to={`/order_menu`}>
                <button>Order a Pizza</button>
            </Link>
        </div>
      );
    }
  }
  
  export default Landing;