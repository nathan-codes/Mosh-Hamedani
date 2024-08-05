import { FormEvent, useState } from "react";

interface GroceryList {
  description: string,
  amount: number,
  category:string
}

const ExpenseForm = () => {

  const [formData, setFormData] = useState<GroceryList>()


  const handleformUpdate = (evt: FormEvent<HTMLInputElement|HTMLSelectElement>) => {
    const target = evt.target as HTMLInputElement
    console.log(target.value)
  }

  return (
    <form action="">
      <div className="form-group mb-3">
        <label htmlFor="description">Description</label>
        <input
          type="description"
          className="form-control"
          id="description"
          placeholder="Enter Description"
          value={formData?.description}
          onChange={(evt)=>handleformUpdate(evt)}
        
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          className="form-control"
          id="amount"
          placeholder="Enter Amount"
 
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="category">Category</label>
        <select id="category" className="form-control">
          <option>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
