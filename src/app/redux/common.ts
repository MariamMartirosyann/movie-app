import { IState } from './../interfaces/main';
import { ICommonState } from './../interfaces/common';
import { createSlice } from "@reduxjs/toolkit";

const name="COMMON";
 const initialState:ICommonState={
 loading:false
 }
 const commonSlice=createSlice({
    initialState,
    name,
    reducers:{
 setLoading(state, {payload}){
    state.loading=payload
 }
    }
 });

 export const {setLoading}=commonSlice.actions;
 export const selectLoadingState=(state:IState)=>state.common.loading
 export default commonSlice.reducer