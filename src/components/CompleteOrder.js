import React from 'react';
import { Link } from 'react-router-dom';

class CompleteOrder extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {

      }
    }
  
    render() {
      return (
        <div id="CompleteOrder">
                <h2>Your ordered has been submitted.</h2>
                <ul>
                <h3>Crust:</h3>
                <li>{this.props.crust}</li>
                <h3>Cheese:</h3>
                <li>{this.props.cheese}</li>
                { this.props.sauce !== "none" && 
                    <div>
                    <h3>Sauce:</h3>
                    <li>{this.props.sauce}</li>
                    </div>
                }
                { this.props.toppings.length !== 0 &&
                    <h3>Toppings:</h3>
                }
                {this.props.toppings.map((item, index) => 
                  <li className="topping" key={index}>{item}</li> 
                )}
                </ul>
            <Link to={`/order_menu`}>
                <button id="orderAnotherPizzaButton" onClick={() => this.props.makeNewOrder()}><b>Order another pizza</b></button>
            </Link>   
        </div>
      );
    }
  }
  
  export default CompleteOrder;