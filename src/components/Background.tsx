import { Scalars } from "../types/types";
import { StyledBackground } from "./Background.styles";

interface BackgroundProps {
	src: Scalars["String"];
	alt: Scalars["String"];
}

const Background: React.FC<BackgroundProps> = ({ src, alt }) => {
	return <StyledBackground src={src} alt={alt} />;
};

export default Background;
