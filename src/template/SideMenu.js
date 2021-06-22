import PropTypes from "prop-types";
import { HomeIcon, TableIcon, DocumentTextIcon, CogIcon } from "@heroicons/react/outline";
import { ChipIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Header(props) {
  const headerHeight = '72px';

  return (
    <div
      className="flex lg:space-x-3 justify-center lg:justify-start lg:px-3 border-b border-gray-900 items-center"
      style={{ height: headerHeight }}
    >
      <ChipIcon className="w-12 h-12 lg:w-10 lg:h-10 text-indigo-500" />
      <h2 className="text-white text-2xl font-semibold hidden lg:inline">
        {props.title}
      </h2>
    </div>
  );
}

function MenuItem(props) {
  let activeClass =
    " text-gray-400 lg:rounded-md hover:text-white hover:bg-gray-700";

  if (props.active) {
    activeClass = " lg:rounded-md text-white bg-gray-900";
  }

  return (
    <Link
      to={props.to}
      replace
      className={"lg:mx-2 py-4 lg:py-2 lg:px-3 flex justify-center lg:justify-start space-x-4 items-center truncate " + activeClass}
    >
      {props.children}
      <span className="hidden lg:inline">{props.title}</span>
    </Link>
  );
}

function SideMenu(props) {
  const itemIconClass = "w-8 h-8 lg:w-5 lg:h-5";

  const location = useLocation();

  useEffect(() => [location])

  return (
    <div className="bg-gray-800 overflow-y-auto h-screen">
      <Header title="Admin" />
      <ul className="lg:mt-2 lg:space-y-2">
        <MenuItem to="/dashboard" title="Dashboard" active={location.pathname === '/dashboard'}>
          <HomeIcon className={itemIconClass} />
        </MenuItem>
        <MenuItem to="/forms" title="Forms" active={location.pathname === '/forms'}>
          <DocumentTextIcon className={itemIconClass} />
        </MenuItem>
        <MenuItem to="/tables" title="Tables" active={location.pathname === '/tables'}>
          <TableIcon className={itemIconClass} />
        </MenuItem>

        <div>
          <span className="my-3 lg:my-5 border-b border-gray-900 block"></span>
        </div>

        <MenuItem to="/" title="Settings">
          <CogIcon className={itemIconClass} />
        </MenuItem>
      </ul>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

SideMenu.MenuItem = MenuItem;
SideMenu.Header = Header;

export default SideMenu;
