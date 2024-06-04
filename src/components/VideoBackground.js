import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../custom_hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-screen -mt-32 max-sm:mt-12">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&amp;mute=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
