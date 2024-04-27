import APIClient from "./api-client";
import { Genre } from "./genreService";
import { Platform } from "./platformService";

interface Publisher {
  id: number;
  name: string;
}

interface esrb_rating {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  esrb_rating: esrb_rating;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  website: string;
  released: string;
}

export default new APIClient<Game>("/games");
