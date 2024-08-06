import { FormData } from "./Types";

export const calculateTotalAmount = (expenses: FormData[]): number => {
  return expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );
};
