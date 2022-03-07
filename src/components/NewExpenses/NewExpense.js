import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpense) => {
    props.onNewExpense(enteredExpense);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* if isEditing is false show button */}
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {/* if isEditing true show the UI to fill form */}
      {isEditing && (
        <ExpenseForm
          stopEdit={stopEditingHandler}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
