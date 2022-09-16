import { useParams } from "react-router-dom";
import { IMAGES } from "../requests/requests";
import { Genres, MediaItem, MovieDetails, TvDetails } from "../types/types";
import Background from "./Background";
import Button from "./Button";
import { GenresItem, GenresList, HeaderContent, HeaderExcerpt, HeaderInfo, HeaderPoster, HeaderTitle, StyledHeader } from "./Header.styles";

interface HeaderProps {
	media: MediaItem | MovieDetails | TvDetails;
	genres?: Array<Genres>;
	showPoster?: boolean;
	showButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ media, genres, showPoster, showButton = true }) => {
	let params = useParams();
	const background = `${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media?.backdrop_path}`;
	const poster = `${IMAGES.baseUrl}${IMAGES.posterSizes[500]}${media?.poster_path}`;
	let date = (media as MediaItem | MovieDetails)?.release_date || (media as MediaItem | TvDetails)?.first_air_date;
	const title = (media as MediaItem | MovieDetails)?.title || (media as MediaItem | TvDetails)?.name;

	let mediaGenres: Array<Genres>;

	if (genres) {
		mediaGenres = genres?.filter((el) => (media as MediaItem)?.genre_ids?.includes(el.id));
	} else {
		mediaGenres = (media as MovieDetails | TvDetails)?.genres as Array<Genres>;
	}

	return (
		<StyledHeader>
			{/* TOO DO : Add a default background in the case there is no backdrop returned */}
			<Background src={background} alt="" />
			<HeaderContent>
				<HeaderTitle>{title ?? ""}</HeaderTitle>
				<HeaderInfo>
					<span>{date?.split("-")[0]}</span>
					<span>{params?.type ?? (media as MediaItem).media_type === "tv" ? "Series" : "Movie"}</span>
					<span>{media?.vote_average ? `${Math.ceil(media?.vote_average * 10)}%` : ""}</span>
				</HeaderInfo>
				<HeaderExcerpt>{media.overview ?? ""}</HeaderExcerpt>

				{/* TODO : add links for each genre */}
				{mediaGenres && (
					<GenresList>
						{mediaGenres.map((el) => (
							<GenresItem key={el.id}>{el.name ?? ""}</GenresItem>
						))}
					</GenresList>
				)}

				{showButton && <Button href={"#"}>Find Out More</Button>}
			</HeaderContent>
			{showPoster && <HeaderPoster src={poster} />}
		</StyledHeader>
	);
};

export default Header;
