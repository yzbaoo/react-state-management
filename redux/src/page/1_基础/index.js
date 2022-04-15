import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
// import produce from 'immer'
// import {store} from '../../store';

function Parent() {
  const dispatch = useDispatch();
  const { user: userInfo } = useSelector(state => state); // store.getState()
  // console.error('---parent render---:',userInfo)
  // userInfo.name = 'xx'; // 【验证一】数据只读，这点很重要！！
  
  const increment = () => {
    dispatch({type: 'user/update'});
    // console.error('store:',store.getState().user.grade);
    console.error('redux:',userInfo); // 【注意】dva和redux-toolkit值的更新时机不同
  }

  return (
    <div>
      <h3> <Link to="/2">redux</Link> </h3>
      <p> 姓名：{userInfo.name} </p>
      <p> 年级：{userInfo.grade} <button onClick={increment}> +1 </button> </p>
      <div> 
        children：
        
          {userInfo.children.map((v,i)=>{
            return <Children key={i} {...v}/>
          })}
        
      </div>
    </div>
  );
}

// 【验证三】memo只能用在纯函数组件中 
// React.memo has a useState, useReducer or useContext Hook in its implementation, it will still re-render when state or context change.
const Children = React.memo(({name, grade}) => {
  const dispatch = useDispatch();
  const { user: userInfo } = useSelector(state => state);
  // console.error('---children render---：', name);

  const increment = () => {
    // const record = userInfo.children.find(v => v.name === name);
    // record.grade++; // 只读
    // dispatch(user.actions.update({children: userInfo.children}));

    // 【验证二】store中的数据只读，迫使开发者不得不使用深拷贝或者其他immutable库
    // const copy = produce(userInfo.children, (draft) => {
    //   const record = draft.find(v => v.name === name);
    //   record.grade++;
    // });
    // dispatch(user.actions.update({children: copy}));

    dispatch({type: 'user/updateChildren', payload: name});
  }

  return (
    <ul>
      <li> 姓名：{name} </li>
      <li> 年级：{grade} <button onClick={increment}> +1 </button></li>
    </ul>
  )
})

export default Parent;