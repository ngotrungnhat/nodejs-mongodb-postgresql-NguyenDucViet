import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/////////////////////////////////////////
import './App.css'
import { routerProducts } from './routers'

// function RouteWithSubRoutes(route) {
//     return (
//         <Route
//             exact
//             path={route.path}
//             render={props => (
//                 <route.component {...props} routes={route.routes} />
//             )}
//         />
//     )
// }

const AppRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => <Component {...props} />} />
)

function App() {
    return (
        // <Router>
        <div>
            <BrowserRouter>
                <Switch>
                    {/* {routerProducts.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))} */}
                    {routerProducts.map((router, index) => (
                        <AppRoute
                            exact
                            path={router.path}
                            component={router.component}
                            key={index}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>

        // </Router>
    )
}

export default App
