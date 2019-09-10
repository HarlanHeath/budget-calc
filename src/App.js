import React, { useState } from 'react';
import './App.css';
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import uuid from "uuid/v4"

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 600 },
  { id: uuid(), charge: "credit card bill", amount: 60 }
]

function App() {

  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <React.Fragment>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>total spending:
        <span className="total">
          ${expenses.reduce((acc, curr) => {
            return acc += curr.amount
          }, 0)}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default App;
