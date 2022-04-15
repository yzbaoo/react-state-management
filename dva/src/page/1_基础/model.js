export default {
  namespace: 'user',
  state: {
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
    update: (state, action) => {
      state.grade++;
      // return state;
      return {...state};
    },
    updateChildren: (state, action) => { // 【注意】不纯了
      const name = action.payload;
      const record = state.children.find(v => v.name === name);
      record.grade++;
      return {...state}
    },
  }
}