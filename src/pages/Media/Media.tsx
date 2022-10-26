import { useParams } from "react-router-dom";
import CreditsRow from "../../components/CreditsRow/CreditsRow";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Reviews from "../../components/Reviews/Reviews";
import useFetch from "../../hooks/useFetch";
import { REQUESTS } from "../../requests/requests";
import { MovieDetails, TvDetails } from "../../types/types";

import Videos from "../../components/Video/Videos";

const Media = () => {
  let params = useParams();

  let request = `${REQUESTS.baseUrl}${params.type}/${params.id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`;
  const { data, error, status } = useFetch<MovieDetails | TvDetails>(request);

  console.log(request);

  if (status === "loading") {
    return <Loading />;
  }
  if (error) {
    return <p>Something has gone wrong.... </p>;
  }

  console.log(data);

  return (
    <>
      {data && <Header media={data} showPoster={true} showButton={false} />}
      <Videos id={params.id as string} mediaType={params.type as string} />
      <CreditsRow id={params.id as string} mediaType={params.type as string} />

      {/* <Reviews id={params.id as string} mediaType={params.type as string} /> */}
    </>
  );
};

export default Media;
