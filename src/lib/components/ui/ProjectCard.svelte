<script lang="ts">
  export let project;
</script>

<a
  href={`/projects/${project.id}`}
  class="border p-6 hover:bg-black hover:text-white transition block"
>

  <h2 class="text-lg font-semibold">
    {project.name}
  </h2>

  <p class="text-sm mt-2 opacity-70">
    {project.highlight}
  </p>

  <div class="flex gap-2 flex-wrap mt-4">
    {#each (project.stack ?? []) as tech}
      <span class="text-xs border px-2 py-1">
        {tech}
      </span>
    {/each}
  </div>

  <p class="text-xs mt-4 opacity-60">
    {project.type}
  </p>

</a>