import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './components/layout/MainLayout';
import HomePage from './pages/home/HomePage';
import { routes } from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
          {/* <Route index element={<HomePage/>}/> */}
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
