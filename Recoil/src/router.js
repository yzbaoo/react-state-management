import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'; // react-router-dom@v6
import Page1 from './page/1_基础'
// import Page2 from './page/page2'
import Page3 from './page/3_验证'
import Page4 from './page/4_最小粒度'
import Todo from './page/5_todolist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/1" element={<Page1/>} />
        {/* <Route exact path="/2" element={<Page2/>} /> */}
        <Route exact path="/3" element={<Page3/>} />
        <Route exact path="/4" element={<Page4/>} />
        <Route exact path="/todo" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;