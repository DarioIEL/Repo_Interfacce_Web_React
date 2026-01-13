import {BrowserRouter,Route, Routes, Link} from 'react-router-dom'
import App from '../App'
import DivGenerico from './DivGenerico'


function Navbar(){
    return(
        <BrowserRouter>
            <nav>
               
                <Link to="/divgen"> Div Generico</Link>
            </nav>

            <Routes>
                
                <Route path='/divgen' element={<DivGenerico/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar