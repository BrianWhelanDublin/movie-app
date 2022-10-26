import { forwardRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGES } from "../../requests/requests";
import { MediaItem } from "../../types/types";
import { StyledCard } from "./MediaCard.styles";

interface MediaCardProps {
  media: MediaItem;
  href?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ media, href }) => {
  const mediumImageUrl = `${IMAGES.baseUrl}${IMAGES.posterSizes[342]}${media.poster_path}`;

  return (
    <StyledCard href={href}>
      <LazyLoadImage src={mediumImageUrl} alt={`${media.title || media.name} poster`} />
    </StyledCard>
  );
};

export const MediaCardRef = forwardRef<any, MediaCardProps>(({ media, href }, ref) => {
  const mediumImageUrl = `${IMAGES.baseUrl}${IMAGES.posterSizes[342]}${media.poster_path}`;

  return (
    <StyledCard ref={ref} href={href}>
      <LazyLoadImage src={mediumImageUrl} alt={`${media.title || media.name} poster`} />
    </StyledCard>
  );
});

export default MediaCard;
