import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './view/HomeView' ;
import CategoriesView from './view/CategoriesView';
import ProductsView from './view/ProductsView';
import ProductDetailsView from './view/ProductDetailsView';
import ContactsView from './view/ContactsView' ;
import SearchView from './view/SearchView';
import CompareView from './view/CompareView';
import ShoppingCartView from './view/ShoppingCartView';
import WishListView from './view/WishListView';
import NotFoundView from './view/NotFoundView';
import ProductProvider from './contexts/ProductContext';


function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
