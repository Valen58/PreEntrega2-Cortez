import NavBar from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx'

function App() {

    return (
        <BrowserRouter>
            <header id="header">
                <div id="marca"> <a href="">BLM</a></div>
                <NavBar></NavBar>
            </header>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:category' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
