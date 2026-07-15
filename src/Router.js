import { createBrowserRouter } from "react-router-dom";
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop';
import { RootLayout } from './RootLayout';
import { Contact } from './Pages/Contact';
import { ProductDetails } from './Pages/ProductDetails';
import { Cart } from "./Pages/Cart";
import { Wishlist } from "./Pages/Wishlist";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: Shop },
      { path: "Contact", Component: Contact },
      { path: `ProductDetails/:id`, Component: ProductDetails },
      { path: `Cart`, Component: Cart },
      { path: `Wishlist`, Component: Wishlist },
      
    ],
  },
]);