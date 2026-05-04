import { writable } from "svelte/store";

export const search = writable("");
export const selectedType = writable("Hepsi");
export const selectedStacks = writable<string[]>([]);

export const page = writable(1);
export const pageSize = writable(6);