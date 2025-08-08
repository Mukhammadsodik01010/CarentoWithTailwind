import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComp from './Components/home';

function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomeComp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
