import React from "react";
import {Routes, Route} from "react-router-dom";
import ProductsPage from "./pages/Products/ProdcutsPage";
import AboutProduct from "./pages/AboutProduct/AboutProduct.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path={`/:id`} element={<AboutProduct/>} />
            </Routes>
        </div>
    );
};

export default App;
