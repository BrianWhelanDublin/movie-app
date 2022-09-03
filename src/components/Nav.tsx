import { Link, useLocation } from "react-router-dom";
import { TbSearch } from "react-icons/tb";

import { StyledNav } from "./Nav.styles";

const Nav: React.FC = () => {
	const location = useLocation();

	return (
		<StyledNav>
			<ul>
				<li className={location.pathname === "/" ? "current" : ""}>
					<Link to={"/"}>Home</Link>
				</li>
				<li className={location.pathname === "/movies" ? "current" : ""}>
					<Link to={"/movies"}>Movies</Link>
				</li>
				<li className={location.pathname === "/series" ? "current" : ""}>
					<Link to={"/series"}>Series</Link>
				</li>
				<li className={location.pathname === "/search" ? "current" : ""}>
					<Link to={"/search"}>
						<TbSearch />
						<span className="visually-hidden">Search</span>
					</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Nav;
