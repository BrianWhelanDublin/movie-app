import React, { useEffect, useRef, useState } from "react";

export type Direction = "top" | "bottom" | "left" | "right";

export const useSwipe = <TElement extends HTMLElement>(ref: React.MutableRefObject<TElement>, onSwipe: (direction: Direction) => void) => {
	const [touchStart, setTouchStart] = useState<Touch | null>(null);
	const [touchEnd, setTouchEnd] = useState<Touch | null>(null);
	const [swipeDirection, setSwipeDirection] = useState<Direction | null>(null);
	const onSwipeHandler = useRef<Function | null>(null);
	onSwipeHandler.current = onSwipe;

	const onTouchStart = (e: TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0]);
		console.log("started");
	};

	const onTouchMove = (e: TouchEvent) => setTouchEnd(e.targetTouches[0]);

	useEffect(() => {
		if (!ref.current) return;

		ref.current.addEventListener("touchstart", onTouchStart);
		ref.current.addEventListener("touchmove", onTouchMove);

		return () => {
			if (!ref.current) return;
			ref.current.removeEventListener("touchstart", onTouchStart);
			ref.current.removeEventListener("touchmove", onTouchMove);
		};
	}, [ref.current]);

	useEffect(() => {
		if (touchStart && touchEnd) {
			const xDifference = touchStart?.clientX - touchEnd?.clientX;
			const yDifference = touchStart.clientY - touchEnd.clientY;

			let direction: Direction;
			if (Math.abs(xDifference) > Math.abs(yDifference)) {
				xDifference > 0 ? (direction = "left") : (direction = "right");
			} else {
				yDifference > 0 ? (direction = "top") : (direction = "bottom");
			}

			setSwipeDirection(direction);
		} else {
			setSwipeDirection(null);
		}
	}, [touchStart, touchEnd]);

	useEffect(() => {
		if (swipeDirection && onSwipeHandler.current) onSwipeHandler.current(swipeDirection);
	}, [swipeDirection]);
};
