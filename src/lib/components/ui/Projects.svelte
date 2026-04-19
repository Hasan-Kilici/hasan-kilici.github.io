<script>
  import projects from "$lib/projects.json";
</script>
<section class="container mx-auto px-4 min-h-[600px]">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects.filter(p => p.include) as project}
      <a href={project.link} target="_blank" class="group block">
        <div class="min-h-[240px] rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          
          <div class="mb-3">
            <span class="text-xs px-2 py-1 rounded-md bg-muted text-foreground/70">
              {project.type}
            </span>
          </div>

          <h3 class="text-lg font-semibold group-hover:underline">
            {project.name}
          </h3>

          <p class="text-sm text-foreground/70 mt-2 leading-relaxed line-clamp-3">
            {project.highlight}
          </p>

          <div class="flex flex-wrap gap-2 mt-4">
            {#each project.stack as tech}
              <span class="text-xs px-2 py-1 rounded-md border border-border bg-background text-foreground/70">
                {tech}
              </span>
            {/each}
          </div>

        </div>
      </a>
    {/each}
  </div>
</section>