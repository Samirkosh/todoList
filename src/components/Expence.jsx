import React, { useState } from "react";
import "./Expence.css";
import { NewExpense } from "./newExpense/NewExpense";
import { ExpenseForm } from "./expenseForm/ExpenseForm";

const Expence = () => {
  const [openExpense, setOpenExpense] = useState(false);

  const openCloseExpenseHandle = () => {
    setOpenExpense(!openExpense);
  };

  return (
    <div>
      {openExpense ? (
        <ExpenseForm openCloseExpenseHandle={openCloseExpenseHandle} />
      ) : (
        <NewExpense openCloseExpenseHandle={openCloseExpenseHandle} />
      )}
    </div>
  );
};

export default Expence;
