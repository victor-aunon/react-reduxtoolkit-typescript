import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const reservationInitialState: ReservationState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: reservationInitialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1); // removes one element from the array starting at the index: action.payload
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
