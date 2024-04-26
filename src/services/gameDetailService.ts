import APIClient from "./api-client";
import { Game } from "./gamesService";

const gameDetailsService = new APIClient<Game>("/games");

export default gameDetailsService;
