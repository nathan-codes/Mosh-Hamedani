import { ChangeEvent, useEffect, useState } from "react";
import { Item } from "../types/ItemList";
interface filterTableProps {
  data: Item[];
}
const FilterTable = ({ data }: filterTableProps) => {
  const [tableData, setTableData] = useState<Item[]>(data);
  const [filterOptions, setFilterOptions] = useState([
    { label: "All Categories", value: "all_categories" },
    { label: "Groceries", value: "groceries" },
    { label: "Utilities", value: "utilities" },
    { label: "entertainment", value: "entertainment" },
  ]);
  const [selectedFilter, setSelectedFilter] = useState("all_categories");
  const handleDeleteItem = (id: number) => {
    // implement delete logic
  };
  const handleFilterSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(evt.target.value);
  };
const filterbyCategory = (filter: string) => {
  if (filter === "all_categories") {
    setTableData(data);
  } else {
    const filteredData = data.filter((item) => item.category === filter);
    setTableData(filteredData);
  }
};

useEffect(() => {
  filterbyCategory(selectedFilter);
}, [selectedFilter, data]);

  useEffect(() => {
    filterbyCategory(selectedFilter);
    console.log(tableData);
  }, [selectedFilter]);

  return (
    <div className="mt-5">
      <select
        name="filterSelect"
        id="filterSelect"
        className="form-control"
        onChange={handleFilterSelect}
      >
        {filterOptions.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
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
          {tableData.map((groceryItem) => {
            return (
              <tr key={groceryItem.id}>
                <td>{groceryItem.description}</td>
                <td>${groceryItem.amount}</td>
                <td>{groceryItem.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteItem(groceryItem.id)}
                  >
                    Delete
                  </button>
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
      <p>Selected Filter: {selectedFilter}</p>
    </div>
  );
};

export default FilterTable;
