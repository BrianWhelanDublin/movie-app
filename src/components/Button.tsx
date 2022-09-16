import { Scalars } from "../types/types";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: (e: any) => void;
	href?: Scalars["String"];
	varient?: "filled" | "outline";
	target?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, href, varient = "outline", target }) => {
	if (!href)
		return (
			<StyledButton type="button" onClick={onClick} varient={varient}>
				{children}
			</StyledButton>
		);

	return (
		<StyledButton as="a" href={href} varient={varient} target={target}>
			{children}
		</StyledButton>
	);
};

export default Button;
