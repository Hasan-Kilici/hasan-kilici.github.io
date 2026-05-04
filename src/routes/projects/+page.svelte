<script lang="ts">
  import projects from "$lib/projects.json";

  import { derived } from "svelte/store";
  import { search, selectedType, selectedStacks, page, pageSize } from "$lib/stores/projectFilters";

  import Sidebar from "$lib/components/ui/Sidebar.svelte";
  import ProjectCard from "$lib/components/ui/ProjectCard.svelte";

  import { ArrowLeft, ArrowRight } from "phosphor-svelte";

  const allStacks = Array.from(
    new Set((projects ?? []).flatMap(p => p.stack ?? []))
  );

  const filtered = derived(
    [search, selectedType, selectedStacks],
    ([$search, $type, $stacks]) => {

      const s = $search.toLowerCase();

      return (projects ?? []).filter((p) => {

        const matchSearch =
          (p.name ?? "").toLowerCase().includes(s) ||
          (p.highlight ?? "").toLowerCase().includes(s);

        const matchType =
          $type === "Hepsi" || p.type === $type;

        const matchStack =
          $stacks.length === 0 ||
          $stacks.every(st => (p.stack ?? []).includes(st));

        return matchSearch && matchType && matchStack;
      });
    }
  );

  const paginated = derived(
    [filtered, page, pageSize],
    ([$filtered, $page, $pageSize]) => {

      const start = ($page - 1) * $pageSize;
      const end = start + $pageSize;

      return {
        items: $filtered.slice(start, end),
        total: $filtered.length,
        totalPages: Math.ceil($filtered.length / $pageSize),
        currentPage: $page
      };
    }
  );

  function nextPage(totalPages: number) {
    page.update(p => Math.min(p + 1, totalPages));
  }

  function prevPage() {
    page.update(p => Math.max(p - 1, 1));
  }

  search.subscribe(() => page.set(1));
  selectedType.subscribe(() => page.set(1));
  selectedStacks.subscribe(() => page.set(1));
</script>

<!-- PAGE WRAPPER -->
<div class="min-h-screen">
  <div class="max-w-7xl mx-auto px-6 py-10">
    <div class="flex gap-10">
      <!-- SIDEBAR -->
      <Sidebar {allStacks} />
      <!-- CONTENT -->
      <main class="flex-1">
        <!-- GRID -->
        <div class="grid md:grid-cols-2 gap-6">

          {#each $paginated.items as project}
            <ProjectCard {project} />
          {/each}
        </div>
        <!-- PAGINATION -->
        <div class="flex items-center justify-between mt-8 border-t pt-4">
          <!-- PREV -->
          <button
            class="flex items-center gap-2 px-4 py-2 bg-black text-white hover:opacity-90 transition disabled:opacity-40"
            on:click={prevPage}
            disabled={$paginated.currentPage === 1}
          >
            <ArrowLeft size={16} weight="bold" />
            Önceki
          </button>

          <!-- NUMBERS -->
          <div class="flex items-center gap-2">
            {#each Array($paginated.totalPages) as _, i}
              {@const pageNum = i + 1}

              <button
                class={`w-9 h-9 flex items-center justify-center border text-sm transition
                  ${$paginated.currentPage === pageNum
                    ? 'bg-black text-white border-black'
                    : 'hover:bg-black hover:text-white'}`}
                on:click={() => page.set(pageNum)}
              >
                {pageNum}
              </button>
            {/each}
          </div>

          <!-- NEXT -->
          <button
            class="flex items-center gap-2 px-4 py-2 bg-black text-white hover:opacity-90 transition disabled:opacity-40"
            on:click={() => nextPage($paginated.totalPages)}
            disabled={$paginated.currentPage === $paginated.totalPages}
          >
            Sonraki
            <ArrowRight size={16} weight="bold" />
          </button>
        </div>
      </main>
    </div>
  </div>
</div>