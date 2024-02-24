import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IauthData {
  authToken: string | null;
  uid: string | null;
}

const initialState: IauthData = {
  authToken: null,
  uid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(_, action: PayloadAction<IauthData>) {
      if (action.payload.authToken && action.payload.uid) {
        return action.payload;
      }
    },
    revokeToken() {
      return initialState;
    },
  },
  // extraReducers:{}
});

export const {setToken, revokeToken} = authSlice.actions;

export default authSlice.reducer;
