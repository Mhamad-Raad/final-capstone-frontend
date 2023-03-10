import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSignIn = createAsyncThunk(
  'session/signIn/fetch',
  async (
    {
      email, password, navigate,
    },
    { fulfillWithValue, rejectWithValue },
  ) => {
    const signInResponse = await fetch(
      'https://capstone-backend-gz9j.onrender.com/api/v1/auth/log_in',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      },
    );
    const data = await signInResponse.json();
    if (signInResponse.status === 200) {
      navigate('/home');
      return fulfillWithValue(data);
    }
    return rejectWithValue({
      ...data,
      status: signInResponse.status,
    });
  },
);

export const signInReducer = (builder) => {
  builder
    .addCase(fetchSignIn.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    })
    .addCase(fetchSignIn.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      const newState = {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
      };

      return newState;
    })
    .addCase(fetchSignIn.rejected, (state, action) => {
      if (action.payload && action.payload.status) {
        const newState = {
          ...state,
          error: {
            msg: action.payload.msg,
            value: action.payload.error.value,
            details: action.payload.error.details,
          },
          loading: false,
        };
        return newState;
      }
      const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
      return newState;
    });
};
