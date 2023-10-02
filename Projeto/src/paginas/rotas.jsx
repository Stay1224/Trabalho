import {Routes, Route} from 'react-router-dom'

import Home from "./Home"
import Panda from "./Panda"
function Rotas(){
return(
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/panda' element={<Panda />}/>
</Routes>   
     
)
}
export default Rotas