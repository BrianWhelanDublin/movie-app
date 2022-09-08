import { IMAGES } from "../requests/requests";
import { Genres, MediaItem } from "../types/types";
import Background from "./Background";
import Button from "./Button";
import { GenresItem, GenresList, HeaderContent, HeaderExcerpt, HeaderInfo, HeaderTitle, StyledHeader } from "./Header.styles";

interface HeaderProps {
	media: MediaItem;
	genres: Array<Genres>;
}

const Header: React.FC<HeaderProps> = ({ media, genres }) => {
	const background = `${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media.backdrop_path}`;
	const date = media.release_date || media.first_air_date;
	const title = media?.title || media?.name;

	const mediaGenres = genres.filter((el) => media.genre_ids?.includes(el.id));

	return (
		<StyledHeader>
			<Background src={background} alt="" />

			<HeaderContent>
				<HeaderTitle>{title ?? ""}</HeaderTitle>
				<HeaderInfo>
					<span>{date?.split("-")[0]}</span>
					<span>{media.media_type === "tv" ? "Series" : "Movie"}</span>
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

				<Button href={"#"}>Find Out More</Button>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
