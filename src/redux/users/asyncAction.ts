import {createAsyncThunk} from "@reduxjs/toolkit";
import {UsersType} from "./type";
import axios from "axios";

export const fetchUsers = createAsyncThunk<UsersType[], {
}>('users/fetchUsers', async () => {
    try {
        const response = await axios.get<UsersType[]>('https://644c19d117e2663b9d003ecf.mockapi.io/users/');
        return response.data;
    } catch (error) {
       throw error
    }
});


