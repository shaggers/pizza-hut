import React from 'react';

class CompleteOrder extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {

      }
    }
  
    render() {
      return (
        <div className="completeOrder">
                <p>You ordered:</p>
                <ul>
                <li>{this.props.crust}</li>
                <li>{this.props.cheese}</li>
                <li>{this.props.sauce}</li>
                {this.props.toppings.map((item, index) => 
                  <li className="topping" key={index}>{item}</li> 
                )}
                </ul>
            <button onClick={() => {this.props.makeNewOrder()}}>Order another pizza</button>
        </div>
      );
    }
  }
  
  export default CompleteOrder;