import { FormData } from "../Types";
import { calculateTotalAmount } from "../utils";

interface ExpenseTableProps {
  expenses: FormData[];
  onDelete: (id: string) => void;
  onFilter: (category: string) => void;
  selectedFilter: string;
}
const ExpenseTable = ({ expenses, onDelete, onFilter, selectedFilter }: ExpenseTableProps) => {
 

  return (
    <section className="my-3">
      <div>
        <select
          name="filterSelect"
          className="form-control my-4"
                  id="filterSelect"
                  value={selectedFilter}
                  onChange={(evt)=>onFilter(evt.target.value)}
        >
          <option value="" >
            All categories
          </option>
          <option value="Utilities">Utilities</option>
          <option value="Groceries">Groceries</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="col">Description</th>
            <th className="col">Amount</th>
            <th className="col">Category</th>
            <th className="col"></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense, index) => {
            return (
              <tr key={expense.id}>
                <td> {expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {" "}
          <tr>
            <td>Total</td>
            <td>$ {calculateTotalAmount(expenses)}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default ExpenseTable;
