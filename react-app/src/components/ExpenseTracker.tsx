import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { FormData } from "../Types";
import { v4 as uuidv4 } from "uuid";

const ExpenseTracker = () => {
  const [expenseList, setExpenseList] = useState<FormData[]>([
  {
    id: "1",
    description: "Grocery shopping",
    amount: "45.90",
    category: "Groceries",
  },
  {
    id: "2",
    description: "Monthly rent",
    amount: "1200.00",
    category: "Utilities",
  },
  {
    id: "3",
    description: "Electricity bill",
    amount: "60.50",
    category: "Utilities",
  },
  {
    id: "4",
    description: "Movie night",
    amount: "25.00",
    category: "Entertainment",
  },
  {
    id: "5",
    description: "Weekly groceries",
    amount: "85.30",
    category: "Groceries",
  },
  {
    id: "6",
    description: "Gym membership",
    amount: "45.00",
    category: "Utilities",
  },
  {
    id: "7",
    description: "Concert tickets",
    amount: "150.00",
    category: "Entertainment",
  },
  {
    id: "8",
    description: "Coffee shop visit",
    amount: "12.75",
    category: "Entertainment",
  },
  {
    id: "9",
    description: "Internet bill",
    amount: "35.00",
    category: "Utilities",
  },
  {
    id: "10",
    description: "Book purchase",
    amount: "20.00",
    category: "Entertainment",
  },
]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleAddExpense = (data: FormData) => {
    setExpenseList([...expenseList, { ...data, id: uuidv4() }]);
  };

  const handleRemoveExpense = (id: string) => {
    setExpenseList(expenseList.filter((expense) => expense.id !== id));
  };

  const handleFilterTable = (selectedFilter: string) => {
    setSelectedFilter(selectedFilter);
  };
  

  const filteredExpenses = selectedFilter ? expenseList.filter((e)=>e.category === selectedFilter): expenseList


  return (
    <>
      <ExpenseForm onsubmit={handleAddExpense} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={handleRemoveExpense}
        onFilter={handleFilterTable}
        selectedFilter={selectedFilter}
      />
    </>
  );
};

export default ExpenseTracker;
