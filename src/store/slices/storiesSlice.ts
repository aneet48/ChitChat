import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface IUserStory {}
interface Idata {
  list: Array<IUserStory>;
}

const initialState: Idata = {
  list: [],
};

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    // setToken(_, action: PayloadAction<Idata>) {
    //   if (action.payload.uid) {
    //     return action.payload;
    //   }
    // },
    // revokeToken() {
    //   return initialState;
    // },
  },
  // extraReducers:{}
});

export const {setToken, revokeToken} = storiesSlice.actions;

export default storiesSlice.reducer;
