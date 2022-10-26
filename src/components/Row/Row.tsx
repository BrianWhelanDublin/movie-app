import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { MediaRequest, Scalars } from "../../types/types";
import Loading from "../Loading/Loading";
import MediaCard from "../MediaCard/MediaCard";
import { RowTitle, StyledCardContainer, StyledInnerContainer, StyledRow } from "./Row.styles";
import Slider from "../Slider/Slider";

interface RowProps {
  request: Scalars["String"];
  title: Scalars["String"];
}

const Row: React.FC<RowProps> = ({ request, title }) => {
  const { data, error, status } = useFetch<MediaRequest>(request);

  const mediaType = request.includes("tv") ? "tv" : "movie";

  if (status === "loading") {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading items</p>;
  }

  return (
    <StyledRow>
      <RowTitle>{title}</RowTitle>

      {data && (
        <Slider>
          {data.results.map((el) => (
            <MediaCard media={el} key={el.id} href={`/${el.media_type ?? mediaType}/${el.id}`} />
          ))}
        </Slider>
      )}
    </StyledRow>
  );
};

export default Row;
