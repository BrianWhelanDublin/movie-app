import React from "react";
import { IMAGES } from "../requests/requests";
import { MediaItem } from "../types/types";
import { StyledCard } from "./MediaCard.styles";

interface MediaCardProps {
	media: MediaItem;
}

const MediaCard = React.forwardRef<HTMLDivElement, MediaCardProps>(({ media }, ref) => {
	const smallImageUrl = `${IMAGES.baseUrl}${IMAGES.posterSizes[185]}${media.poster_path}`;
	const mediumImageUrl = `${IMAGES.baseUrl}${IMAGES.posterSizes[342]}${media.poster_path}`;
	return (
		<StyledCard ref={ref}>
			<img
				sizes="100vw"
				src={smallImageUrl}
				srcSet={`${smallImageUrl} 375w, ${mediumImageUrl} 700w`}
				alt={`${media.title || media.name} poster`}
			/>
		</StyledCard>
	);
});

export default MediaCard;
