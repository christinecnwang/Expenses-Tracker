import React from "react";
import { FaTimes } from "react-icons/fa";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    console.log("click!");
    props.onDelete(props.id);
  };

  return (
    <div>
      <h3>
        <FaTimes className='delete-button' onClick={deleteHandler} />
      </h3>
      <li>
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>
              ${parseFloat(props.amount).toFixed(2)}
            </div>
          </div>
        </Card>
      </li>
    </div>
  );
};

export default ExpenseItem;
