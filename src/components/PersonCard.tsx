import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGES } from "../requests/requests";
import { Person } from "../types/types";
import { StyledPersonCard, StyledPersonTitle } from "./PersonCard.styles";

interface PersonCardProps {
	person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
	const imageUrl = `${IMAGES.baseUrl}${IMAGES.profileSizes[185]}`;

	console.log(person);
	return (
		<StyledPersonCard>
			<LazyLoadImage
				src={person?.profile_path ? `${imageUrl}${person?.profile_path}` : `/default_person.png`}
				alt={`Poster for ${person?.name}`}
			/>
			<StyledPersonTitle>
				<h3>{person?.name}</h3>
				<p>{person?.character}</p>
			</StyledPersonTitle>
		</StyledPersonCard>
	);
};

export default PersonCard;
