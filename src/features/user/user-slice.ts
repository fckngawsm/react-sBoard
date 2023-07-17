import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/User";
import { Extra } from "../../types/Extra";
import { StatusType } from "../../types/Status";

type AuthInitialState = {
  user: UserType | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  user: null,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk<
  { token: string },
  UserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/register",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.post(api.REGISTER_USER, data);
      return res.data;
    } catch (error) {
      return rejectWithValue("У вас случилась ошибка");
    }
  }
);

export const loginUser = createAsyncThunk<
  UserType,
  UserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/login",
  async (dataUser, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.post(api.LOGIN_USER, dataUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = data;
      localStorage.setItem("jwt", token);
      return data;
    } catch (error) {
      rejectWithValue("err");
    }
  }
);

export const checkAuth = createAsyncThunk<
  UserType,
  string,
  { extra: Extra; rejectWithValue: string }
>("@@user-isAuth", async (jwt, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.get(api.CHECK_TOKEN, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (err) {
    return rejectWithValue("Ошибка");
  }
});

export const updateUser = createAsyncThunk<
  UserType,
  UserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@user/update",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await client.patch(api.UPDATE_USER, data, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${jwt}`,
        },
      });

      return res.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

export const deleteAccount = createAsyncThunk<
  UserType,
  undefined,
  { extra: Extra; rejectWithValue: string }
>("@@user/delete", async (_, { extra: { client, api }, rejectWithValue }) => {
  const jwt = localStorage.getItem("jwt");
  try {
    const res = await client.delete(api.DELETE_USER, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    });

    return res.data;
  } catch (err) {
    return rejectWithValue("Ошибка");
  }
});

const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("jwt");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "received";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.user = null;
        state.status = "received";
        localStorage.removeItem("jwt");
      });
  },
});

export const { logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
