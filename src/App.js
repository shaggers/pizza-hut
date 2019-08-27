import React from 'react';
import './App.css';
import * as firebase from 'firebase';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza The Hut</h1>
      </header>
      <main className="App-main">
        <h3>Order a Pizza</h3>
        <section className="first-section">
          <form>
            <div>
              <h5>Select Crust</h5>
           
              <input type="radio" id="crustChoice1"
              name="crust" value="pan" />
              <label for="crustChoice1">pan</label>

              <input type="radio" id="crustChoice2"
              name="crust" value="original" />
              <label for="crustChoice2">original</label>

              <input type="radio" id="crustChoice3"
              name="crust" value="gluten-free" />
              <label for="crustChoice3">gluten-free</label>
            </div>

            <div>
              <h5>Select Sauce</h5>

              <input type="radio" id="sauceChoice1"
              name="sauce" value="marinera" />
              <label for="sauceChoice1">marinera</label>

              <input type="radio" id="sauceChoice2"
              name="sauce" value="alfredo" />
              <label for="sauceChoice2">alfredo</label>

              <input type="radio" id="sauceChoice3"
              name="sauce" value="none" />
              <label for="sauceChoice3">none</label>
            </div>  

            <div>
              <h5>Select Cheese</h5>

              <input type="radio" id="cheeseChoice1"
              name="cheese" value="mozzarella" />
              <label for="cheeseChoice1">mozzarella</label>

              <input type="radio" id="cheeseChoice2"
              name="cheese" value="doublemozzarella" />
              <label for="cheeseChoice2">double mozzarella</label>

              <input type="radio" id="cheeseChoice3"
              name="cheese" value="mooncheese" />
              <label for="cheeseChoice3">moon cheese</label>
            </div>  

            <div>
              <h5>Select Topings</h5>

              <input type="radio" id="topingChoice1"
              name="toping" value="pepperoni" />
              <label for="topingChoice1">pepperoni</label>

              <input type="radio" id="topingChoice2"
              name="toping" value="peppers" />
              <label for="topingChoice2">pepper</label>

              <input type="radio" id="topingChoice3"
              name="toping" value="bacon" />
              <label for="topingChoice3">bacon</label>
            </div>  

            <button type="submit">Submit</button>

          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
