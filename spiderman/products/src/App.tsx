import React from "react";
import {Routes, Route} from "react-router-dom";
import ProductsPage from "./pages/Products/ProdcutsPage";
import './index.css'

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
