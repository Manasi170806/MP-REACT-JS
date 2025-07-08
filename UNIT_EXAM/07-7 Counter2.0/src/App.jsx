import { useState } from "react";
import style from "./Styles/App.css";

function App() {

  const [count, setCount] = useState(0)
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Welcome to Counter 2.0</h1>
      <hr />
      <div>
        <button data-testid="minusonebtn" className="minus" onClick={() => setCount(count - 1) } disabled={count===0}>-1</button>
        <button data-testid="plusonebtn" className="plus" onClick={() =>  setCount(count + 1) }>+1</button>
        <div>
          <button data-testid="resetbtn" className="reset" onClick={()=> setCount(0)}>Reset Count</button>
        </div>
      </div>
      <span className="counter" data-testid="counter">{count}</span>
      <div>
        <span className="odd-or-even" data-testid="odd-or-even">This Number is : {count % 2 === 0 ? "Even" : "Odd"}</span>
        <br />
        <span className="is-prime" data-testid="is-prime">Prime Number : {isPrime(count).toString()}</span>
      </div>
    </div>
  );

}

export default App;

