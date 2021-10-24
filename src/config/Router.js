import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Products from "../containers/Products";
import Navbar from "../components/NavBar";
import Context from "../Context";
import { Provider } from "react-redux";
import store from "../store";
import ProductDetails from "../containers/ProductDetails";
import Cart from "../containers/cart";

// function PrivateRoute({ component: Component, auth, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             component={({ location }) =>
//                 auth ? (
//                     <Component />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/",
//                             state: {
//                                 from: location.pathname
//                             },
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

// function PublicRoute({ component: Component, auth, ...rest }) {
//     const location = useLocation();
//     return (
//         <Route
//             {...rest}
//             component={() =>
//                 !auth ? (
//                     <Component />
//                 ) : (
//                     <Redirect
//                         to={location.state?.from ? location.state.from : "/profile"}
//                     />
//                 )
//             }
//         />
//     );
// }

function AppRouter() {
  //     const [isAuth, setIsAuth] = useState(false)
  //     useEffect(() => {
  //         onAuthStateChanged(auth, (user) => {
  //             if (user) {
  //                 setIsAuth(true)

  //             } else {
  //                 setIsAuth(false)
  //             }
  //         })
  //     }, [])
  return (
    <Router>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Switch>
          {/* <PublicRoute auth={isAuth} exact path="/" component={Login} />
                <PublicRoute auth={isAuth} exact path="/signup" component={Signup} />
                <PrivateRoute auth={isAuth} exact path="/profile/:id" component={Profile} />
            <PrivateRoute auth={isAuth} exact path="/chat/:uid" component={Chat} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/productDetails" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default AppRouter;
