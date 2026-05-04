import { writable } from "svelte/store";

export const page = writable(1);
export const pageSize = writable(6);