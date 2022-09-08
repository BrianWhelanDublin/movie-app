import { Scalars } from "../types/types";
import { StyledButton, StyledLinkButton } from "./Button.styles";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: (e: any) => void;
	href?: Scalars["String"];
	varient?: "filled" | "outline";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, href, varient = "outline" }) => {
	if (!href)
		return (
			<StyledButton type="button" onClick={onClick} varient={varient}>
				{children}
			</StyledButton>
		);

	return (
		<StyledLinkButton href={href} varient={varient}>
			{children}
		</StyledLinkButton>
	);
};

export default Button;
