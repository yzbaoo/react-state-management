import {atom,selector} from 'recoil'
export const userAtom = atom({
  key: 'userAtom',
  default: {
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
  }
})
export const userUpdater = selector({
  key: 'userUpdater',
  get: ({get}) => {
    const userInfo = get(userAtom);
    return userInfo;
  }
})