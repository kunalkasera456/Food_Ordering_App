import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offer from "./components/Offer";
import RestaurantMenu from "./components/RestaurantMenu";

// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {

  

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offer",
        element: <Offer />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
