import { Link, useLocation } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";
import { TbSearch } from "react-icons/tb";
import { device } from "../assets/styles/breakpoints";

interface Props {
	theme: DefaultTheme;
}

const StyledNav = styled.nav<Props>`
	background: linear-gradient(${(props) => props.theme.colors.black}, transparent);
	ul {
		display: flex;
		flex-direction: row;
		max-width: 500px;
		margin: 0 auto;
		padding: 20px;
		align-items: center;
		justify-content: space-between;

		@media (${device.sm}) {
			padding: 40px;
		}

		li {
			font-weight: ${(props) => props.theme.fontWeights.regular};
			font-size: 16px;
			position: relative;
			&::after {
				position: absolute;
				content: "";
				width: 0;
				height: 1px;
				bottom: -2px;
				left: 50%;
				background: ${(props) => props.theme.colors.white};
				transition: all 0.2s ease-in;
			}
			a {
				color: ${(props) => props.theme.colors.grey1};
			}

			&:hover {
				&::after {
					width: 100%;
					left: 0;
				}
			}

			&.current {
				a {
					color: ${(props) => props.theme.colors.white};
				}
			}
		}
	}
`;

const Nav = () => {
	const location = useLocation();
	console.log(location);
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
