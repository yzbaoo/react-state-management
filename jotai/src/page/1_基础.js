import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const mockApi = () => new Promise(res => {
  setTimeout(() => {
    res({
      name: 'parent',
      grade: 5,
      children: [
        {
          name: 'children1',
          grade: 1,
        },
        {
          name: 'children2',
          grade: 1,
        },
      ]
    });
  }, 2000)
})

function Parent() {
  const userInfo = {
    name: 'parent',
    grade: 5,
    children: [
      {
        name: 'children1',
        grade: 1,
      },
      {
        name: 'children2',
        grade: 1,
      },
    ]
  }
  return (
    <div>
      <h3> <Link to="/2">jotai</Link> </h3>
      <p> 姓名：{userInfo.name} </p>
      <p> 年级：{userInfo.grade} <button> +1 </button> </p>
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

const Children = ({name, grade}) => {
  return (
    <ul>
      <li> 姓名：{name} </li>
      <li> 年级：{grade} <button> +1 </button></li>
    </ul>
  )
}

export default Parent;