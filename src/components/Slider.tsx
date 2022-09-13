import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ArrowContainer, SliderContainer, SliderInnerContainer, SliderItem } from "./Slider.styles";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { debounce } from "../utils/helpers";

interface SliderProps {
	children: React.ReactNode | Array<React.ReactNode>;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
	const container = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
	const innerContainer = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
	const numberOfCards = React.Children.toArray(children).length;
	const [index, _setIndex] = useState<number>(0);
	const currentIndex = useRef<number>(0);

	const setIndex = (data: number) => {
		currentIndex.current = data;
		_setIndex(data);
	};

	useEffect(() => {
		const rezize = () => {
			const itemsPerScreen = parseInt(getComputedStyle(innerContainer.current).getPropertyValue("--items-per-screen"));
			const cur = currentIndex.current;
			const itemsScrolled = itemsPerScreen * cur;
			const itemsLeft = numberOfCards - itemsPerScreen - itemsScrolled;
			if (itemsLeft <= 0) {
				setIndex(cur - 1 + (numberOfCards - itemsScrolled) / itemsPerScreen);
			}
		};
		const resizeHandler = debounce(rezize, 100);

		window.addEventListener("resize", resizeHandler);

		return () => window.removeEventListener("resize", resizeHandler);
	}, [numberOfCards]);

	const handleClick = (direction: string, slide: number) => {
		// const numberOfCards = React.Children.toArray(children).length;
		const itemsPerScreen = parseInt(getComputedStyle(innerContainer.current).getPropertyValue("--items-per-screen"));
		const itemsScrolled = itemsPerScreen * slide;
		const itemsLeft = numberOfCards - itemsPerScreen - itemsScrolled;

		if (direction === "right") {
			if (itemsLeft > 0) {
				setIndex(slide);
			} else {
				setIndex(slide - 1 + (numberOfCards - itemsScrolled) / itemsPerScreen);
			}
		}
		if (direction === "left") {
			if (slide < 0) {
				setIndex(0);
			} else {
				setIndex(slide);
			}
		}
	};

	return (
		<>
			<ArrowContainer>
				<BsArrowLeft onClick={() => handleClick("left", index - 1)} />
				<BsArrowRight onClick={() => handleClick("right", index + 1)} />
			</ArrowContainer>
			<SliderContainer ref={container}>
				<SliderInnerContainer style={{ transform: `translateX(calc(${index} * -100%))` }} ref={innerContainer}>
					{React.Children.map(children, (child) => {
						return <SliderItem>{child}</SliderItem>;
					})}
				</SliderInnerContainer>
			</SliderContainer>
		</>
	);
};

export default Slider;
