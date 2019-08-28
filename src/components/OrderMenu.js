import React from 'react';
import { Link } from 'react-router-dom';

class OrderMenu extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {

      }
    }

    handleInputChange(event) {
        this.props.callbackFromParent(event);
    }
  
    render() {
      return (
        <div id="OrderMenu">
        <h2>Order a Pizza</h2>
        <section className="first-section">
          <form>
            <h3>Select Crust <small>*required</small></h3>
            <div className="menuGroup">
            <span>
              <input type="radio" id="crustChoice1"
              name="crust" value="pan" onChange={(e) => {this.handleInputChange(e)}} required/>
              <label for="crustChoice1">pan</label>
            </span>
            <span>
              <input type="radio" id="crustChoice2"
              name="crust" value="original" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="crustChoice2">original</label>
            </span>
            <span>
              <input type="radio" id="crustChoice3"
              name="crust" value="gluten-free" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="crustChoice3">gluten-free</label>
            </span>
            </div>

            <h3>Select Sauce <small>*required</small></h3>
            <div className="menuGroup">
            <span>
              <input type="radio" id="sauceChoice1"
              name="sauce" value="marinera" onChange={(e) => {this.handleInputChange(e)}} required/>
              <label for="sauceChoice1">marinera</label>
            </span>
            <span>
              <input type="radio" id="sauceChoice2"
              name="sauce" value="alfredo" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="sauceChoice2">alfredo</label>
            </span>
            <span>
              <input type="radio" id="sauceChoice3"
              name="sauce" value="none" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="sauceChoice3">none</label>
            </span>
            </div>  

            <h3>Select Cheese <small>*required</small></h3>
            <div className="menuGroup">
            <span>
              <input type="radio" id="cheeseChoice1"
              name="cheese" value="mozzarella" onChange={(e) => {this.handleInputChange(e)}} required/>
              <label for="cheeseChoice1">mozzarella</label>
            </span>
            <span>
              <input type="radio" id="cheeseChoice2"
              name="cheese" value="doublemozzarella" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="cheeseChoice2">double mozzarella</label>
            </span>
            <span>
              <input type="radio" id="cheeseChoice3"
              name="cheese" value="mooncheese" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="cheeseChoice3">moon cheese</label>
            </span>
            </div>  

            <h3>Select Toppings</h3>
            <div className="menuGroup">
            <span>
              <input type="checkbox" id="toppingChoice1"
              name="topping" value="pepperoni" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="toppingChoice1">pepperoni</label>
            </span>
            <span>
              <input type="checkbox" id="toppingChoice2"
              name="topping" value="peppers" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="toppingChoice2">peppers</label>
            </span>
            <span>
              <input type="checkbox" id="toppingChoice3"
              name="topping" value="bacon" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="toppingChoice3">bacon</label>
            </span>
            </div>  
            <Link to={`/order_complete`}>
                <button id="submitOrderButton" type="button" onClick={() => this.props.verifyFormisFull()}><b>Submit</b></button>
            </Link>
          </form>
        </section>
        </div>
      );
    }
  }
  
  export default OrderMenu;