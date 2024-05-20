import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../custom_hooks/useNowPlayingMovies";
import usePopularMovies from "../custom_hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../custom_hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom_hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
