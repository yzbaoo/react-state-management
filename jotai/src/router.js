import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'; // react-router-dom@v6
import Page1 from './page/1_基础'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/1" element={<Page1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;