import {  useState } from "react";
import ExpenseForm from "./ExpenseForm";
import FilterTable from "./FilterTable";
import { Item } from "../types/ItemList";

const ExpenseTracker = () => {

    const [item, setItems] = useState<Item[]>([
      { id: 0, description: "Milk", amount: 0, category: "Groceries" },
    ]); 

  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    category: "",
  });

  
  return (
    <section>
          <ExpenseForm />
          <FilterTable data={item} />
    </section>
  );
};

export default ExpenseTracker;
