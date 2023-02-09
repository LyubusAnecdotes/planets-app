import { IPlanet } from "./planet.model";

export interface IPlanetsPagination {
	count: number;
	next: string;
	previous: string;
	results: IPlanet[];
}