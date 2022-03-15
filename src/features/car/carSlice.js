import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cars:["Model S","Model X","Model 3","Model Y"],
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})


export const selectCars = state => state.car.cars //where car is carSlice name and this line directly maps the state

export default carSlice.reducer; // export some kind of reduce even though the reducer is empty