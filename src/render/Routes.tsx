import {
  Route,
  HashRouter as Router,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import RouterPaths from "@/render/utils/routes.json";
import HomePage from "@/render/containers/HomePage";
import Todo from "@/render/containers/Todo";
import Layout from "@/render/containers/Common/Layout"

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<Layout/>}>
            <Route
              caseSensitive
              path="/"
              element={<Navigate replace to={RouterPaths.HOME}/>}
            />
            <Route caseSensitive path={RouterPaths.HOME} element={<HomePage/>}/>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Route caseSensitive path={RouterPaths.TODO} element={<Todo/>}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
