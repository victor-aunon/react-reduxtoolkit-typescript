import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./redux/states";
import { RootState } from "./redux/store";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch();

  function handleAddReservations() {
    if (!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector(
    (state: RootState) => state.customers.value
  );

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return (
                  <ReservationCard
                    key={`${index}-reservation`}
                    name={name}
                    index={index}
                  />
                );
              })}
            </div>
          </>
          <div className="reservation-input-container">
            <input
              type="text"
              value={reservationNameInput}
              onChange={event => {
                setReservationNameInput(event.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => {
            return <CustomerCard key={customer.id} customer={customer} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
