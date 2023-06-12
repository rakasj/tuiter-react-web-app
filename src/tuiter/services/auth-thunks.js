import { createAsyncThunk } from "@reduxjs/toolkit";

import { login, logout, profile, updateUser, register } from "./auth-services";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await login(credentials);
        return user;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        return await profile();
    });
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await updateUser(user);
        return user;
    });

export const registerThunk = createAsyncThunk(
    "user/register", async (credentials) => {
        const user = await register(credentials);
        return user;
    }
);
