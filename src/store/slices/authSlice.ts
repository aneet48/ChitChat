import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IauthData {
  uid: string | null;
}

const initialState: IauthData = {
  uid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(_, action: PayloadAction<IauthData>) {
      if (action.payload.uid) {
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
