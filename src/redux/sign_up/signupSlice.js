import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRegistration = createAsyncThunk(
  'registration/fetch',
  async (
    {
      name, email, password, confirmPassword,
    },
  ) => {
    const registration = await fetch('http://localhost:4000/api/v1/auth/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
          confirmPassword,
        },
      }),
    });
    const data = await registration.json();
    return data;
  },
);

const initialState = {
  user: {},
  loading: false,
  error: '',
};

const signUpSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistration.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        const newState = { ...state, user: action.payload, loading: false };
        return newState;
      })
      .addCase(fetchRegistration.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
        return newState;
      });
  },
});

export default signUpSlice.reducer;
