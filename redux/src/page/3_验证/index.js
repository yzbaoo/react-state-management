import produce from 'immer';
import {useDispatch, useSelector} from 'react-redux'
import React, { useCallback, useRef, useEffect } from 'react'

const useEventCallback = (fn, dependencies) => {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const fn = ref.current;
    return fn();
  }, [ref]);
}


const List = () => {
  const {state: data} = useSelector(state => state);
  const dispatch = useDispatch();

    // 用 ref 缓存 data
    const ref = useRef(data)
    // 监听 data 变化存到ref
    useEffect(() => {
      ref.current = data
    }, [ref, data])
    

  const handleOnChange = useCallback((i) => (e) => {
    const copyData = produce(ref.current, (draft) => {
      draft[i].x = Number(e.target.value);
    })
    dispatch({type: 'state/update', payload: copyData})
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

const ListItem = React.memo(({idx, left, handleOnChange}) => {
  return (
    <div>
      x: <input type="number" value={left} onChange={handleOnChange(idx)} />
    </div>
  )
})

const Canvas = () => {
  const {state: data} = useSelector(state => state)
  const dispatch = useDispatch();

   // 用 ref 缓存 data
   const ref = useRef(data)
   // 监听 data 变化存到ref
   useEffect(() => {
     ref.current = data
   }, [ref, data])

  const handleDrag = useCallback((i) => (e) => {
    const copyData = produce(ref.current, (draft) => {
      draft[i].x = e.pageX - 50;
      draft[i].y = e.pageY - 50;
    })
    dispatch({type: 'state/update', payload: copyData})
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

const CanvasItem = React.memo(({idx, left, top, handleDrag}) => {
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
})


export default () => {
  return (
    <div>
      <List></List>
      <Canvas></Canvas>
    </div>
  )
}