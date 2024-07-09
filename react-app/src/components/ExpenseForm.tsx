import { FormEvent } from "react";

const ExpenseForm = () => {
  const handleSumbit = (evt: FormEvent) => {
    evt.preventDefault();
  };
  return (
    <form action="#" className="" onSubmit={handleSumbit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Enter Description.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          className="form-control"
          id="amount"
          placeholder="Enter Amount.."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="category" className="form-control" id="category">
          <option value="sd">Groceries</option>
          <option value="sd">Utilities</option>
          <option value="sd">Entertainment</option>
        </select>
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
