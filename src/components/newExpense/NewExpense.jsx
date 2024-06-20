import React from "react";
import { Button } from "../myBtn/Button";

export const NewExpense = ({ openCloseExpenseHandle }) => {
  return (
    <div>
      <h1>NewExpense</h1>
      <Button onClick={openCloseExpenseHandle}>add </Button>
    </div>
  );
};
