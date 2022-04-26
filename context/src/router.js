import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'; // react-router-dom@v6
import Page1 from './page/1_基础'
// import Page2 from './page/page2'
import Page3 from './page/3_验证'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/1" element={<Page1/>} />
        {/* <Route exact path="/2" element={<Page2/>} /> */}
        <Route exact path="/3" element={<Page3/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;