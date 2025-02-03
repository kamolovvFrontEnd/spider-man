import React from "react";
import {Routes, Route} from "react-router-dom";
import ProductsPage from "./pages/Products/ProdcutsPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />}/>
        </Routes>
    );
};

export default App;
