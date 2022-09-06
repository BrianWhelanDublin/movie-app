import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGES } from "../requests/requests";
import { Genres, MediaItem } from "../types/types";
import Button from "./Button";
import { HeaderContent, StyledHeader } from "./Header.styles";

interface HeaderProps {
	media: MediaItem;
	genres: Array<Genres>;
}

const Header: React.FC<HeaderProps> = ({ media, genres }) => {
	console.log(media.backdrop_path);

	const background = `${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media.backdrop_path}`;
	const date = media.release_date || media.first_air_date;
	const title = media?.title || media?.name;

	const mediaGenres = genres.filter((el) => media.genre_ids?.includes(el.id));

	return (
		<StyledHeader>
			<LazyLoadImage className="background" src={background} alt="" />

			<HeaderContent>
				<h1 className="title">{title}</h1>
				<p className="info">
					<span>{date?.split("-")[0]}</span>
					<span>{media.media_type === "tv" ? "Series" : "Movie"}</span>
					<span>{media?.vote_average ? `${Math.ceil(media?.vote_average * 10)}%` : ""}</span>
				</p>
				<p className="excerpt">{media.overview}</p>

				{/* TODO : add links for each genre */}
				{mediaGenres && (
					<ul className="genres">
						{mediaGenres.map((el) => (
							<li key={el.id}>{el.name}</li>
						))}
					</ul>
				)}

				<Button href={"#"}>Find Out More</Button>
			</HeaderContent>
		</StyledHeader>
	);
};

export default Header;
