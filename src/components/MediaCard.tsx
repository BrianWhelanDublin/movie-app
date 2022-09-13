import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGES } from "../requests/requests";
import { MediaItem } from "../types/types";
import { StyledCard } from "./MediaCard.styles";

interface MediaCardProps {
	media: MediaItem;
}

const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
	const mediumImageUrl = `${IMAGES.baseUrl}${IMAGES.posterSizes[342]}${media.poster_path}`;

	return (
		<StyledCard>
			<LazyLoadImage src={mediumImageUrl} alt={`${media.title || media.name} poster`} />
		</StyledCard>
	);
};

export const MediaCardRef = forwardRef<any, MediaCardProps>(({ media }, ref) => {
	const mediumImageUrl = `${IMAGES.baseUrl}${IMAGES.posterSizes[342]}${media.poster_path}`;

	return (
		<StyledCard ref={ref}>
			<LazyLoadImage src={mediumImageUrl} alt={`${media.title || media.name} poster`} />
		</StyledCard>
	);
});

export default MediaCard;
