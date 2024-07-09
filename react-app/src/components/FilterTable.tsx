import { Item } from "../types/ItemList";
interface filterTableProps {
  data: Item[];
}
const FilterTable = ({ data }: filterTableProps) => {
    const handleDeleteItem = (id:number) => {
        // implement delete logic
    }
  return (
    <div className="mt-5">
      <select name="filterSelect" id="filterSelect" className="form-control">
        <option value="utilities">All categories</option>
        <option value="utilities">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="utilities">Entertainment</option>
      </select>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((groceryItem) => {
            return (
              <tr key={groceryItem.id}>
                <td>{groceryItem.description}</td>
                <td>${groceryItem.amount}</td>
                <td>{groceryItem.category}</td>
                <td>
                  <button className="btn btn-outline-danger" onClick={()=>handleDeleteItem(groceryItem.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
                  <tr>
                     <td>Total</td>
                      <td>$ {40}</td>
                  </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FilterTable;
