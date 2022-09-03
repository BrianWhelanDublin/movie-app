import React, { MutableRefObject, ReactNode, useRef, useState } from "react";
import { ArrowContainer, SliderContainer, SliderInnerContainer } from "./Slider.styles";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

interface SliderProps {
	children: React.ReactNode | Array<React.ReactNode>;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
	const container = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
	const innerContainer = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
	const [width, setWidth] = useState<number>(0);

	const handleClick = (direction: string) => {
		const containerWidth = container?.current?.offsetWidth;
		const innerContainerWidth = innerContainer?.current?.scrollWidth;

		const numberOfCards = React.Children.toArray(children).length;
		const cardWidth = innerContainerWidth / numberOfCards;
		const widthToMove = Math.floor(containerWidth / cardWidth) * cardWidth;
		const maxWidth = innerContainerWidth - containerWidth;

		if (direction === "right") {
			if (width < maxWidth - widthToMove) {
				setWidth((state) => (state += widthToMove));
			} else {
				setWidth((state) => (state = maxWidth));
			}
		} else {
			if (width > widthToMove) {
				setWidth((state) => (state -= widthToMove));
			} else {
				setWidth((state) => (state = 0));
			}
		}
	};

	return (
		<>
			<ArrowContainer>
				<BsArrowLeft onClick={() => handleClick("left")} />
				<BsArrowRight onClick={() => handleClick("right")} />
			</ArrowContainer>
			<SliderContainer ref={container}>
				<SliderInnerContainer style={{ transform: `translateX(-${width}px)` }} ref={innerContainer}>
					{children}
				</SliderInnerContainer>
			</SliderContainer>
		</>
	);
};

export default Slider;
