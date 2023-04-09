import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const NavLink = [
    {
      nav: "Home",
      path: "/",
    },
    {
      nav: "About",
      path: "/about",
    },
    {
      nav: "Projects",
      path: "/projects",
    },
    {
      nav: "Blog",
      path: "/blog",
    },
  ];

  return (
    <header>
      <nav>
        <ul>
          {NavLink.map((el, i) => (
            <li key={i}>
              <Link to={el.path} className="nav_link">
                {el.nav}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
