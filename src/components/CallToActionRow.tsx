import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import { IMAGES } from "../requests/requests";
import { MediaRequest, Scalars } from "../types/types";
import Background from "./Background";
import Button from "./Button";
import { CallToActionRowTitle, Cta, CtaPoster, Dot, Dots, StyledCallToActionRow } from "./CallToActionRow.styles";
import Loading from "./Loading";

interface CallToActionRowProps {
	request: Scalars["String"];
	title: Scalars["String"];
	ctaText: Scalars["String"];
	ctaLink: Scalars["String"];
}

const CallToActionRow: React.FC<CallToActionRowProps> = ({ request, title, ctaText, ctaLink }) => {
	const { data, error, status } = useFetch<MediaRequest>(request);

	const [index, setIndex] = useState<number>(0);
	const length = data?.results?.length as number;

	const media = data?.results[index];
	const date = media?.release_date || media?.first_air_date;
	const mediaTitle = media?.title || media?.name;

	const handleClick = (direction: "left" | "right") => {
		if (direction === "right") {
			if (index < length - 1) {
				setIndex((state) => (state += 1));
			} else {
				setIndex((state) => (state = 0));
			}
		}

		if (direction === "left") {
			if (index > 0) {
				setIndex((state) => (state -= 1));
			} else {
				setIndex((state) => (state = length - 1));
			}
		}
	};

	if (status === "loading") {
		return <Loading />;
	}

	if (error) {
		return <p>Error loading items</p>;
	}

	return (
		<StyledCallToActionRow>
			<CallToActionRowTitle>
				<h2>{title}</h2> <Button href={ctaLink}>{ctaText}</Button>
			</CallToActionRowTitle>
			<AnimatePresence>
				<motion.div key={index} initial={{ opacity: 0 }} transition={{ duration: 1.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					{data && <Background src={`${IMAGES.baseUrl}${IMAGES.backdropSizes.original}${media?.backdrop_path}`} alt="" />}
				</motion.div>
			</AnimatePresence>

			<AnimatePresence>
				<CtaPoster>
					{data && (
						<motion.img
							key={index}
							initial={{ x: "-100%" }}
							transition={{ duration: 1 }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							src={`${IMAGES.baseUrl}${IMAGES.posterSizes[500]}${media?.poster_path}`}
							alt=""
						/>
					)}
				</CtaPoster>
			</AnimatePresence>

			<AnimatePresence>
				<motion.div
					key={index}
					className="content"
					initial={{ opacity: 0 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<h3>{mediaTitle}</h3>
					{/* <p>{data?.results[index]?.overview}</p> */}
					<span>{date?.split("-")[0]}</span>
					<span>{media?.media_type === "tv" ? "Series" : "Movie"}</span>
					<span>{media?.vote_average ? `${Math.ceil(media?.vote_average * 10)}%` : ""}</span>
					<Button varient="filled" href={"/movies"}>
						Find Out More
					</Button>

					<div className="arrows">
						<BsArrowLeft onClick={() => handleClick("left")} />
						<BsArrowRight onClick={() => handleClick("right")} />
					</div>
				</motion.div>

				<Cta className="cta">
					<Button href={ctaLink}>{ctaText}</Button>
				</Cta>
			</AnimatePresence>

			<Dots>{data && data.results.map((el, i) => <Dot key={el.id} className={`${i === index ? "current" : ""}`}></Dot>)}</Dots>
		</StyledCallToActionRow>
	);
};

export default CallToActionRow;
