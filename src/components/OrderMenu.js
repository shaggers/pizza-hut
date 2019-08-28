import React from 'react';

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
        <div className="orderMenu">
        <h3>Order a Pizza</h3>
        <section className="first-section">
          <form>
            <div>
              <h5>Select Crust</h5>
           
              <input type="radio" id="crustChoice1"
              name="crust" value="pan" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="crustChoice1">pan</label>

              <input type="radio" id="crustChoice2"
              name="crust" value="original" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="crustChoice2">original</label>

              <input type="radio" id="crustChoice3"
              name="crust" value="gluten-free" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="crustChoice3">gluten-free</label>
            </div>

            <div>
              <h5>Select Sauce</h5>

              <input type="radio" id="sauceChoice1"
              name="sauce" value="marinera" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="sauceChoice1">marinera</label>

              <input type="radio" id="sauceChoice2"
              name="sauce" value="alfredo" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="sauceChoice2">alfredo</label>

              <input type="radio" id="sauceChoice3"
              name="sauce" value="none" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="sauceChoice3">none</label>
            </div>  

            <div>
              <h5>Select Cheese</h5>

              <input type="radio" id="cheeseChoice1"
              name="cheese" value="mozzarella" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="cheeseChoice1">mozzarella</label>

              <input type="radio" id="cheeseChoice2"
              name="cheese" value="doublemozzarella" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="cheeseChoice2">double mozzarella</label>

              <input type="radio" id="cheeseChoice3"
              name="cheese" value="mooncheese" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="cheeseChoice3">moon cheese</label>
            </div>  

            <div>
              <h5>Select Toppings</h5>

              <input type="checkbox" id="toppingChoice1"
              name="topping" value="pepperoni" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="toppingChoice1">pepperoni</label>

              <input type="checkbox" id="toppingChoice2"
              name="topping" value="peppers" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="toppingChoice2">peppers</label>

              <input type="checkbox" id="toppingChoice3"
              name="topping" value="bacon" onChange={(e) => {this.handleInputChange(e)}}/>
              <label for="toppingChoice3">bacon</label>
            </div>  

            <button type="button" onClick={() => {this.props.getFinishedOrder()}}>Submit</button>

          </form>
        </section>
        </div>
      );
    }
  }
  
  export default OrderMenu;