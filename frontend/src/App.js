import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import { products } from "./data";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "./components/Navigation/Layout";
import Shop from "./pages/Shop";

function App() {
  // routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/search", element: <SearchResults products={products} /> },
        {
          path: "/product/:id",
          element: <ProductDetails products={products} />,
        },
        {
          path: "/shop/:shop_id",
          element: <Shop products={products} />,
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>{" "}
    </div>
  );
}

export default App;
