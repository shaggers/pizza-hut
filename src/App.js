import React from 'react';
import { Route } from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';
import OrderMenu from './components/OrderMenu.js';
import CompleteOrder from './components/CompleteOrder.js';
import Landing from './components/Landing.js';

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
      crust: '',
      cheese: '',
      sauce: '',
      toppings: []
    }
  }

  makeNewOrder(){
    this.setState({ crust: '' });
    this.setState({ cheese: '' });
    this.setState({ sauce: '' });
    this.setState({ toppings: [] });
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
          <Route exact path="/" component={Landing} />
          <Route path="/order_menu" 
            render={(props) => <OrderMenu 
              callbackFromParent={this.getItems.bind(this)} 
            />}
          />
          <Route path="/order_complete" 
            render={(props) => <CompleteOrder
              crust={this.state.crust}
              cheese={this.state.cheese}
              sauce={this.state.sauce}
              toppings={this.state.toppings}
              makeNewOrder={this.makeNewOrder.bind(this)}
            />}
          />
        </main>
    </div>
    );
  }
}







export default App;
