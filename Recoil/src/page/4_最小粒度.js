import { atom, useRecoilState } from 'recoil';
import produce from 'immer';

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
const creatItemAtom = (id, item) => {
  return atom({
    key: `item_${id}`,
    default: item
  })
}

export const itemAtomList = initialState.map((v,i) => creatItemAtom(i, v))

const List = () => {
  return (
    <div>
      {
        itemAtomList.map((item, i) => {
          return(
            <ListItem key={i} id={i}/>
          )
        })
      }
    </div>
  )
}

const ListItem = ({id}) => {
  const [data, setData] = useRecoilState(itemAtomList[id]);
  const handleOnChange = (e) => {
    const copyData = produce(data, (draft) => {
      draft.x = Number(e.target.value);
    })
    setData(copyData);
  }
  return (
    <div>
      <input type="number" value={data.x} onChange={handleOnChange} />
    </div>
  )
}

const Canvas = () => {
  return (
    <div>
    {
      itemAtomList.map((item, i) => (
       <CanvasItem key={i} id={i}/>
      ))
    }
    </div>
  )
}

const CanvasItem = ({id}) => {
  const style = {
    position:'absolute', 
    width: '100px', 
    height: '100px', 
    border: '1px solid black',
    borderRadius: '50%'
  }
  const [data, setData] = useRecoilState(itemAtomList[id]);

  const handleDrag = (e) => {
    const copyData = produce(data, (draft) => {
      draft.x = e.pageX - 50;
      draft.y = e.pageY - 50;
    })
    setData(copyData)
    e.preventDefault();
  }

  return (
    <div 
      style={{left: data.x + 'px', top: data.y + 'px', ...style}}
      draggable="true"
      onDrag={handleDrag}
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