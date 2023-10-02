import {Routes, Route} from 'react-router-dom'

import Home from "./paginas/Home"
import Panda from "./paginas/Panda"
function Rotas(){
return(
<Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/panda' element={<Panda />}/>
</Routes>   
     
)
}
export default Rotas