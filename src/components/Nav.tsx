import { Link, useLocation } from "react-router-dom";
import { TbSearch } from "react-icons/tb";

import { NavItem, NavList, StyledNav } from "./Nav.styles";

const Nav: React.FC = () => {
	const location = useLocation();

	return (
		<StyledNav>
			<NavList>
				<NavItem className={location.pathname === "/" ? "current" : ""}>
					<Link to={"/"}>Home</Link>
				</NavItem>
				<NavItem className={location.pathname === "/movies" ? "current" : ""}>
					<Link to={"/movies"}>Movies</Link>
				</NavItem>
				<NavItem className={location.pathname === "/series" ? "current" : ""}>
					<Link to={"/series"}>Series</Link>
				</NavItem>
				<NavItem className={location.pathname === "/search" ? "current" : ""}>
					<Link to={"/search"}>
						<TbSearch />
						<span className="visually-hidden">Search</span>
					</Link>
				</NavItem>
			</NavList>
		</StyledNav>
	);
};

export default Nav;
