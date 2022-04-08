import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {useRecoilState, useRecoilValue} from 'recoil'
import {userAtom, userUpdater} from './model'
import produce from 'immer'

function Parent() {
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  // console.error('---parent render---:',userInfo)
  const increment = () => {
    // userInfo.grade++; // 只读
    const copyUserInfo = {...userInfo};
    copyUserInfo.grade++;
    setUserInfo(copyUserInfo);
  }

  return (
    <div>
      <h3> <Link to="/2">recoil</Link> </h3>
      <p> 姓名：{userInfo.name} </p>
      <p> 年级：{userInfo.grade} <button onClick={increment}> +1 </button> </p>
      {/* <p> children总年级：{userInfo.children[0].grade} </p> */}
      <div> 
        children：
        
          {userInfo.children.map((v,i)=>{
            return <Children key={i} {...v}/>
          })}
        
      </div>
    </div>
  );
}

const Children = React.memo(({name, grade}) => {
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const increment = () => {
    const copy = produce(userInfo, (draft)=>{
     const record =  draft.children.find(v => v.name === name);
     record.grade++;
    });
    setUserInfo(copy);
  }

  return (
    <ul>
      <li> 姓名：{name} </li>
      <li> 年级：{grade} <button onClick={increment}> +1 </button></li>
    </ul>
  )
})

export default Parent;