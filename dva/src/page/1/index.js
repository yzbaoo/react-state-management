import React from 'react';
import {Link} from 'react-router-dom'
// import user from './model';
import {useDispatch, useSelector} from 'react-redux'
// import {store} from '../../store';

function Parent() {
  const dispatch = useDispatch();
  const { user: userInfo } = useSelector(state => state); // store.getState()
  // console.error('---parent render---:',userInfo)
  // userInfo.name = 'xx'; // 【验证一】数据不是只读
  
  const increment = () => {
    dispatch({type: 'user/update'});
    // console.error('store:',store.getState().user.grade);
    console.error('dva:',userInfo);
  }

  return (
    <div>
      <h3> <Link to="/2">dva</Link> </h3>
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
  // console.error('---children render---：', name);
  const increment = () => {
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