import { atom, useRecoilState } from 'recoil';
import produce from 'immer';
import React, { useCallback, useEffect, useRef } from 'react'

const initialState = [
  {
    x: 0,
    y: 0
  },
  {
    x: 100,
    y: 0
  },
  {
    x: 200,
    y: 0
  },
]
const state = atom({
  key: 'state',
  default: initialState
})
const List = () => {
  const [data, setData] = useRecoilState(state);

  const ref = useRef(data);
  useEffect(() => {
    ref.current = data;
  } ,[ref, data])

  const handleOnChange = useCallback((i) => (e) => {
    const copyData = produce(ref.current, (draft) => {
      draft[i].x = Number(e.target.value);
    })
    setData(copyData);
  },[])

  return (
    <div>
      {
        data.map(({x: left, y: top}, i) => {
          return(
            <ListItem idx={i} left={left} handleOnChange={handleOnChange}></ListItem>
          )
        })
      }
    </div>
  )
}

const ListItem = ({idx, left, handleOnChange}) => {
  return (
    <div>
      <input type="number" value={left} onChange={handleOnChange(idx)} />
    </div>
  )
}

const Canvas = () => {
  const [data, setData] = useRecoilState(state);

  const ref = useRef(data);
  useEffect(() => {
    ref.current = data;
  } ,[ref, data])

  const handleDrag = useCallback((i) => (e) => {
    const copyData = produce(ref.current, (draft) => {
      draft[i].x = e.pageX - 50;
      draft[i].y = e.pageY - 50;
    })
    setData(copyData)
    e.preventDefault();
  },[])

  return (
    <div>
    {
      data.map(({x: left, y: top}, i) => (
       <CanvasItem key={i} idx={i} left={left} top={top} handleDrag={handleDrag}></CanvasItem>
      ))
    }
    </div>
  )
}

const CanvasItem = ({idx, left, top, handleDrag}) => {
  const style = {
    position:'absolute', 
    width: '100px', 
    height: '100px', 
    border: '1px solid black',
    borderRadius: '50%'
  }


  return (
    <div 
      style={{left, top, ...style}}
      draggable="true"
      onDrag={handleDrag(idx)}
      onDragOver={(e) => { e.preventDefault() }}>
    </div>
  )
}


export default () => {
  return (
    <div>
      <List></List>
      <Canvas></Canvas>
    </div>
  )
}