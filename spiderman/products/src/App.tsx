import React from "react";
import {Routes, Route} from "react-router-dom";
import ProductsPage from "./pages/Products/ProdcutsPage";
import CreateProductPage from "./pages/CreateProduct/CreateProductPage.tsx";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage/>}/>
            <Route path="/create-product" element={<CreateProductPage/>}/>
        </Routes>
    );
};

export default App;
