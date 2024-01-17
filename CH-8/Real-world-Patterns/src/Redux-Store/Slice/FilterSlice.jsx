import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    term: '',
    results: [],
  },
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setTerm, setResults } = filterSlice.actions;
export default filterSlice.reducer;