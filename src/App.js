import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offer from "./components/Offer";
import RestaurantMenu from "./components/RestaurantMenu";

// import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import About from "./components/About";
import Profile from "./components/Profile";

// const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading....</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
