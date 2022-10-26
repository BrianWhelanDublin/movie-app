import React from "react";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { VideoRequest } from "../../types/types";
import { RowTitle, StyledRow } from "../Row/Row.styles";

import { StyledVideo, StyledVideoContainer } from "./Video.styles";

interface VideosProps {
  id: string;
  mediaType: string;
}

const Videos: React.FC<VideosProps> = ({ id, mediaType }) => {
  let request = `${REQUESTS.baseUrl}${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_IMDB_API_KEY}`;
  const { data, error } = useFetch<VideoRequest>(request);
  const trailer = data?.results?.filter((el) => el.name == "Official Trailer");

  return trailer?.length ? (
    <StyledRow>
      <RowTitle>Trailer</RowTitle>
      <StyledVideoContainer style={{ maxWidth: "1000px", margin: "40px auto" }}>
        {trailer?.map((el) => (
          <StyledVideo key={el?.id} style={{ marginTop: "auto" }}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${el?.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </StyledVideo>
        ))}
      </StyledVideoContainer>
    </StyledRow>
  ) : null;
};

export default Videos;
