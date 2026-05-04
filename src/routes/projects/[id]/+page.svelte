<script lang="ts">
  import { marked } from "marked";
  import { GithubLogo, ArrowLeft } from "phosphor-svelte";

  export let data;
  const { project } = data;

  const contentHtml = marked.parse(project.content || "");
</script>

{#if project}
<main class="max-w-5xl mx-auto p-6">

  <!-- BACK -->
  <a href="/projects" class="flex gap-2 items-center text-sm text-black opacity-70 hover:opacity-100">
    <ArrowLeft /> Geri
  </a>

  <!-- THUMBNAIL -->
  {#if project.images?.length}
    <div class="mt-4">
      <img
        src={"/banners/"+project.id+".png"}
        alt={project.name}
        class="w-full h-72 border"
      />
    </div>
  {/if}

  <!-- TITLE -->
  <h1 class="text-3xl font-bold mt-6 text-black">
    {project.name}
  </h1>

  <p class="mt-2 text-black/60">
    {project.highlight}
  </p>

  <!-- STACK -->
  <div class="mt-4 flex gap-2 flex-wrap">
    {#each project.stack as tech}
      <span class="px-3 py-1 border text-sm text-black">
        {tech}
      </span>
    {/each}
  </div>

  <!-- CONTENT (MARKDOWN) -->
  <div class="mt-8 prose max-w-none text-black">
    {@html contentHtml}
  </div>

  <!-- GALLERY -->
  {#if project.images?.length > 1}
    <div class="grid grid-cols-2 gap-2 mt-8">
      {#each project.images as img}
        <img
          src={img}
          class="w-full border"
        />
      {/each}
    </div>
  {/if}

  <!-- GITHUB BUTTON -->
  <a
    href={project.link}
    target="_blank"
    class="inline-flex items-center gap-2 mt-10 border border-black px-4 py-2 hover:text-black bg-black text-white hover:bg-white transition"
  >
    <GithubLogo size={18} weight="bold" />
    GitHub
  </a>

</main>
{/if}