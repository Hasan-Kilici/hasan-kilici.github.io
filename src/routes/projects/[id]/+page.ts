import projects from "$lib/projects.json";

export const prerender = true;

export function entries() {
  return projects
    .filter((p) => p.id != null)
    .map((p) => ({
      id: String(p.id)
    }));
}

export function load({ params }) {
  const project = projects.find((p) => String(p.id) === params.id);

  if (!project) {
    throw new Error(`Project not found: ${params.id}`);
  }

  return { project };
}