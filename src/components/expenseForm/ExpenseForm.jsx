import React, { useState } from "react";
import { Input } from "../myInput/Input";
import { Button } from "../myBtn/Button";
import "./ExpenseForm.css";

export const ExpenseForm = ({ openCloseExpenseHandle }) => {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  function handleProducrChange(event) {
    setProduct(event.target.value);
  }
  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      title: product,
      amount: amount,
      date: date,
      id: Date.now(),
    };

    setTodos([...todos, newProduct]);
    setProduct("");
    setAmount("");
    setDate("");
  }
  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <section>
        <div className="inputContainer">
          <div className="label-block">
            <label htmlFor="">Заголовок</label>
            <Input
              type="text"
              onChange={handleProducrChange}
              value={product}
              className="input"
              placeholder="Enter..."
            />
          </div>

          <div className="label-block">
            <label htmlFor="">Количество</label>
            <Input
              type="number"
              onChange={handleAmountChange}
              value={amount}
              className="input"
              placeholder="0000"
            />
          </div>
        </div>

        <div className="secondInputContainer">
          <div className="label-block">
            <label htmlFor="">Дата</label>
            <Input
              type="date"
              onChange={handleDateChange}
              value={date}
              className="input"
            />
          </div>
          <div className="btnContainer">
            <Button type="submit">Add</Button>
            <Button type="submit" onClick={openCloseExpenseHandle}>
              Cancel
            </Button>
          </div>
        </div>
      </section>

      <article>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.title} <span>{item.amount}</span> <span>{item.date}</span>
            </li>
          ))}
        </ul>
      </article>
    </form>
  );
};
