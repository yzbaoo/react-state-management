import { 
  createSlice
} from '@reduxjs/toolkit'

const state = createSlice({
  name: 'state',
  initialState: [
    {
      x: 0,
      y: 200
    },
    {
      x: 100,
      y: 200
    },
    {
      x: 200,
      y: 200
    },
  ],
  reducers: {
    update: (state, action) => (action.payload),
    // update: (state, action) => {
    //   const {e, i} = action.payload;
    //   state[i].x = e.pageX - 50;
    //   state[i].y = e.pageY - 50;
    //   return state;
    // },
  }
})
// console.error('---user---:',user);

export default state;