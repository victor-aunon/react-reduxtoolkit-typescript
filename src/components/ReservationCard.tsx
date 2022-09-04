import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addCustomer, removeReservation } from "../redux/states";

interface ReservationCardType {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardType) => {
  const dispatch = useDispatch();

  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: v4(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
