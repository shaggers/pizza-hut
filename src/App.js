import React from 'react';
import './App.css';
import * as firebase from 'firebase';
import OrderMenu from './components/OrderMenu.js';
import CompleteOrder from './components/CompleteOrder.js';

const firebaseConfig = {
  apiKey: "AIzaSyAHYzuCP0gWhel5jDtZCc0ne7vKDERkuo8",
  authDomain: "pizza-hut-9e8d9.firebaseapp.com",
  databaseURL: "https://pizza-hut-9e8d9.firebaseio.com",
  projectId: "pizza-hut-9e8d9",
  storageBucket: "",
  messagingSenderId: "902785932233",
  appId: "1:902785932233:web:04ad41a3c28a5e3b"
};
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showOrderButton: true,
      showOrderMenu: false,
      showCompleteOrder: false,

      crust: '',
      cheese: '',
      sauce: '',
      toppings: []
    }
  }

  openMenu(){
    this.setState({ showOrderButton: false });
    this.setState({ showOrderMenu: true });
  }

  getFinishedOrder(){
    this.setState({ showOrderMenu: false });
    this.setState({ showCompleteOrder: true });
  }

  makeNewOrder(){
    this.setState({ showCompleteOrder: false });
    this.setState({ crust: '' });
    this.setState({ cheese: '' });
    this.setState({ sauce: '' });
    this.setState({ toppings: [] });
    this.setState({ showOrderMenu: true });
  }

  getItems(item){
    if(item !== undefined) {
      const target = item.target;
      const value = target.value;
      const name = target.name;

      if(name === "topping") {
        if(target.checked === true) {
          this.setState({ toppings: this.state.toppings.concat(value)});
        } else {
          this.state.toppings.splice(this.state.toppings.indexOf(value), 1); 
        }
      } else {
        this.setState({ [name]: value })
      }
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Pizza Hut</h1>
      </header>
      <main className="App-main">

      {
        this.state.showOrderButton === true &&
        <button onClick={() => {this.openMenu()}}>Order a Pizza</button>
      }

      {
        this.state.showOrderMenu === true &&
        <OrderMenu
          callbackFromParent={this.getItems.bind(this)}
          getFinishedOrder={this.getFinishedOrder.bind(this)}
        />
      }
      
      {
        this.state.showCompleteOrder === true &&
        <CompleteOrder
          crust={this.state.crust}
          cheese={this.state.cheese}
          sauce={this.state.sauce}
          toppings={this.state.toppings}
          makeNewOrder={this.makeNewOrder.bind(this)}
        />
      }

      </main>
    </div>
    );
  }
}







export default App;
