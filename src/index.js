import React from 'react';
import ReactDOM from 'react-dom';

import MenuPage from './page/MenuPage'
import FormPage from "./page/FormPage";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Link to="/">First Page</Link>
                <Link to="/form" style={{ marginLeft: "20px" }}>Second Page</Link>
            </nav>
            {children}
        </>
    )
}
const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Layout>
                    <Route exact={true} path="/" component={MenuPage} />
                    <Route path="/form" component={FormPage} />
                </Layout>
            </Switch>
        </HashRouter>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)