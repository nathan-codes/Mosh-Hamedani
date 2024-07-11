import {  useState } from "react";
import ExpenseForm from "./ExpenseForm";
import FilterTable from "./FilterTable";
import { Item } from "../types/ItemList";
import { shoppingList } from "../data/dummydata";

const ExpenseTracker = () => {

    const [item, setItems] = useState<Item[]>(shoppingList); 

  const [formData, setFormData] = useState({
    id: 0,
    description: "",
    amount: 0,
    category: "",
  });

  const handleSubmit = (item: Item) => {
    const updatedFormData = 
    setFormData(())
  }

  
  return (
    <section>
      <ExpenseForm listItem={formData} onSubmit={handleSubmit}  />
          <FilterTable data={item} />
    </section>
  );
};

export default ExpenseTracker;
