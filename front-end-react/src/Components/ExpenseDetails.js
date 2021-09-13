import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function ExpenseDetails() {
  let [expense, setExpense] = useState({});
  let { car_id, id } = useParams();
  let history = useHistory();

  const deleteExpense = async () => {
    try {
      await axios.delete(`${API}/cars/${car_id}/expenses/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    await deleteExpense();
    history.push(`/cars/${car_id}/expenses`);
  };

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        let res = await axios.get(`${API}/cars/${car_id}/expenses/${id}`);
        setExpense(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExpense();
  }, [car_id, id]);

  const { expense_type, business_use, amount_spent, date } = expense;

  return (
    <div>
      <h2>Car ID: {car_id}</h2>
      <h2>Date: {date}</h2>
      <h2>Expense Type: {expense_type}</h2>
      <h2>Amount: {amount_spent}</h2>
      <h2>Business Use: {business_use ? "Yes" : "No"}</h2>

      <div>
        <Link to={`/cars/${car_id}/expenses`}>
          <button>BACK</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
        <Link to={`/cars/${car_id}/expenses/${id}/edit`}>
          <button>EDIT</button>
        </Link>
      </div>
    </div>
  );
}

export default ExpenseDetails;