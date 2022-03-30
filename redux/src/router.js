import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'; // react-router-dom@v6
import Page_1 from './page/1_page'
import Page_2 from './page/2_page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/1" element={<Page_1/>} />
        <Route exact path="/2" element={<Page_2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;