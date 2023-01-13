import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New TV",
    amount: "799.49",
    date: new Date(2022, 1, 12),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2022, 4, 28),
  },
  {
    id: "e3",
    title: "Music Subscription",
    amount: "24.99",
    date: new Date(2022, 4, 30),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: "94.12",
    date: new Date(2022, 7, 14),
  },
  {
    id: "e5",
    title: "Clothes",
    amount: "145.66",
    date: new Date(2022, 9, 13),
  },
  {
    id: "e6",
    title: "Christmas Gifts",
    amount: "623.49",
    date: new Date(2022, 11, 16),
  },
  {
    id: "e7",
    title: "New Desk",
    amount: "450.50",
    date: new Date(2023, 0, 6),
  },
  {
    id: "e8",
    title: "Car Maintenance",
    amount: "300.50",
    date: new Date(2023, 0, 10),
  },
  {
    id: "e9",
    title: "New Shoes",
    amount: "250.50",
    date: new Date(2023, 0, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
