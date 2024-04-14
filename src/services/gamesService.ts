import APIClient from "./api-client";
import { Platform } from "./platformService";

interface esrb_rating {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  esrb_rating: esrb_rating;
}

export default new APIClient<Game>("/games");
