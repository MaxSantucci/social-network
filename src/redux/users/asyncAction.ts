import {createAsyncThunk, current} from '@reduxjs/toolkit';
import {UsersParams, UsersType} from './type';
import axios from "axios";

export const fetchUsers = createAsyncThunk<UsersType[], UsersParams>('users/fetchUsers', async (params) => {
    try {
       const {currentPage} = params
        const {data} = await axios.get<UsersType[]>(`https://644c19d117e2663b9d003ecf.mockapi.io/users?page=${currentPage}&limit=4`);
        return data;
    } catch (error) {
       throw error
    }
});

// export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
//    debugger
//    const { sortBy, order, category, search, currentPage } = params;
//    const { data } = await axios.get<PizzaItem[]>(`https://63cc509f9b72d2a88e0b89c8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
//
//    return data;
// });
