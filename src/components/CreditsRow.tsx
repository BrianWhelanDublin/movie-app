import useFetch from "../hooks/useFetch";
import { IMAGES, REQUESTS } from "../requests/requests";
import { CreditsRequest } from "../types/types";
import PersonCard from "./PersonCard";
import { RowTitle, StyledRow } from "./Row.styles";
import Slider from "./Slider";

interface CreditsRowProps {
	id: string;
	mediaType: string;
}

const CreditsRow: React.FC<CreditsRowProps> = ({ id, mediaType }) => {
	let request = `${REQUESTS.baseUrl}${mediaType === "series" ? "tv" : "movie"}/${id}/credits?api_key=${
		process.env.REACT_APP_IMDB_API_KEY
	}&language=en-US`;

	const imageUrl = `${IMAGES.baseUrl}${IMAGES.profileSizes[185]}`;

	const { data, error } = useFetch<CreditsRequest>(request);

	if (error) {
		return <p>Error loading cast</p>;
	}

	return (
		<StyledRow>
			<RowTitle>Cast</RowTitle>
			{data && (
				<Slider>
					{data?.cast?.map((el) => (
						<PersonCard person={el} key={el?.id} />
					))}
				</Slider>
			)}
		</StyledRow>
	);
};

export default CreditsRow;
