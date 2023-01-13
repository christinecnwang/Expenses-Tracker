import React, { useState } from "react";

import ErrorModal from "../UI/ErrorModal";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState("");
  // const [userInput, setuserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0) {
      setError({
        errorTitle: "Invalid input",
        errorMessage: "Please enter a valid title (non-empty value).",
      });
      return;
    }
    if (
      enteredAmount.trim().length === 0 ||
      parseFloat(event.target.value) <= 0
    ) {
      setError({
        errorTitle: "Invalid input",
        errorMessage:
          "Please enter a valid amount (non-empty number value > 0).",
      });
      return;
    }
    if (!enteredDate) {
      setError({
        errorTitle: "Invalid input",
        errorMessage: "Please enter a valid date (non-empty value).",
      });
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount ($)</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2022-01-01'
              max='2026-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
