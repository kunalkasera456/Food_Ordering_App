import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Offer from "./components/Offer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
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
      element: <Body/>
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
    ]
  },
  
]);

export default App;
