import { createAsyncThunk } from "@reduxjs/toolkit";
import {login, register, profile, logout, updateUser}  from "./auth-service"; 

export const loginThunk = createAsyncThunk(
    "auth/login", async (credentials) => {
        const user = await login(credentials);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "auth/register", async (credentials) => {
        const user = await register(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        const response = profile();
        if (!response.ok) {
            return response;
        }
        return response.data;
    });
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await logout();
    });
export const updateUserThunk = createAsyncThunk(
    "auth/updateUser", async (user) => {
        await updateUser(user);
        return user;
    });
