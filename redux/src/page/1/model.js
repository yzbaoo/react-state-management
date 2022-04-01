import { 
  // createAction,
  // createEntityAdapter 
  createSlice
} from '@reduxjs/toolkit'

// 测试 createAction
// const user = createAction('global/user')
// console.error(user({text:1})); // {type: 'global/user', payload: {text: 1}}

// 测试 createEntityAdapter
// const usersAdapter = createEntityAdapter();
// console.error(usersAdapter.getInitialState());

const user = createSlice({
  name: 'user',
  initialState: {
    name: 'parent',
    grade: 5,
    children: [
      {
        name: 'children1',
        grade: 1,
      },
      {
        name: 'children2',
        grade: 2,
      },
    ]
  },
  reducers: {
    // update: (state, action) => ({...state, ...action.payload}),
    update: (state, action) => {
      state.grade++;
      return state;
    },
    updateChildren: (state, action) => {
      const name = action.payload;
      const record = state.children.find(v => v.name === name);
      record.grade++;
      return state
    },
  }
})

// console.error('---user---:',user);

export default user;