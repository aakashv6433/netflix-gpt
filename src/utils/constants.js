export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_USER_AVATAR_URL = "https://i.imgur.com/9VX2XI5.png";

export const ALTERNATE_TO_DEFAULT_USER_AVATAR_URL =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const BGIMAGE_URL =
  "https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg";

export const NOW_PLAYING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjFhYTFlZWUyYWNhYTU0MTk4ZDVkMzczYWE5NTIxMyIsInN1YiI6IjY2NDVlMDk1ZDliMjJkZjM4ODQwZmM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ViBmsPG2LrW4KKMoP3eJdrHXikyKuJ-gLFZNN_QGEao",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
