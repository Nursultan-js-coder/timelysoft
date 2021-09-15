import React, { useEffect } from "react";
import "./App.css";
import { menus, routes } from "./routes";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import PageNotFound from "./views/common/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadUser } from "./store/actions/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <Provider>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, index) => {
              const Component = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={!route.children?.length}
                >
                  <Component routes={route?.children} />
                </Route>
              );
            })}
            {menus.map((menu) => {
              const menuRoutes = menu.subMenus;
              const { path } = menu;
              return menuRoutes.map((route, index) => {
                const Component = route.component;
                return (
                  <Route
                    path={path + route.path}
                    exact={!route.children?.length}
                  >
                    <Component routes={route?.children} />
                  </Route>
                );
              });
            })}
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
