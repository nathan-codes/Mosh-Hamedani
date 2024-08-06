import { useForm } from "react-hook-form";

import { FormData } from "../Types";
import { useEffect } from "react";
interface ExpenseFormProps {
  onsubmit: (formData: FormData) => void;
}

const ExpenseForm = ({ onsubmit }: ExpenseFormProps) => {
  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },

    handleSubmit,
  } = useForm<FormData>();


  return (
    <form onSubmit={handleSubmit((data) =>
    {
      onsubmit(data)
      reset()
    }
    )}>
      <div className="form-group mb-3">
        <label htmlFor="description" className="mb-1">
          Desciption
        </label>
        <input
          type="text"
          id="desciption"
          className="form-control"
          {...register("description", { required: true })}
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">Description is required</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="amout" className="mb-1">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="form-control"
          {...register("amount", { required: true })}
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">Amount is required</p>
        )}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="category" className="mb-1">
          Category
        </label>
        <select
          id="category"
          className="form-control"
          {...register("category", { required: true })}
        >
          <option></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">Category is required</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
