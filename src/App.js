import React from 'react';
import './App.css';
import Alert from "./components/Alert";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
    <React.Fragment>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </React.Fragment>
  );
}

export default App;
