import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../redux/states";

type CustomerType = {
  id: string;
  name: string;
  food: string[];
};

interface CustomerCardType {
  customer: CustomerType;
}

const CustomerCard = ({ customer }: CustomerCardType) => {
  const { id, name, food } = customer;

  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  return (
    <div className="customer-food-card-container" id={id}>
      <p className="customer-name">{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((foodElement, index) => {
            return <p key={`${index}-food`}>{foodElement}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            type="text"
            value={customerFoodInput}
            onChange={event => setCustomerFoodInput(event.target.value)}
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;

              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
