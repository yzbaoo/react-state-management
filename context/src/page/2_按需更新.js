import {atom, useRecoilState, useSetRecoilState} from 'recoil';
import {useState} from 'react'
const namesState = atom({
  key: 'namesState',
  default: ['Ella', 'Chris', 'Paul'],
});

function FormContent({setNamesState}) {
  const [name, setName] = useState('');
  const [names] = useRecoilState(namesState);
  
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setNamesState(names => { console.error('!!names:',names); return [...names, name]})}>Add Name</button>
      <p>{names}</p>
    </>
)}

// This component will be rendered once when mounting
function Form() {
  console.error('mounted');
  const setNamesState = useSetRecoilState(namesState);
  // const [,setNamesState] = useRecoilState(namesState);
  
  return <FormContent setNamesState={setNamesState} />;
}

export default Form