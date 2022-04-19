import { Outlet, Link } from "react-router-dom";
import RouterPaths from "@/render/utils/routes.json";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Link to={RouterPaths.TODO}>siriffo</Link>
          </li>
          <li>
            <Link to={RouterPaths.HOME}>home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
