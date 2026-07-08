import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Count } from "./components/Count/Count";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";

import { CartView } from "./components/Cart/CartView";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ProductSuccess } from "./components/adminComponent/ProductSucess";
import { ProductoFormContainer } from './components/adminComponent/ProductFormContainer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView/>} />
          <Route path="/admin" element={<ProductoFormContainer/>} />
          <Route path="/success/:id" element={<ProductSuccess/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;