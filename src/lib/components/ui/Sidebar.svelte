<script lang="ts">
  import { search, selectedType } from "$lib/stores/projectFilters";
  import StackCombobox from "./StackCombobox.svelte";

  export let allStacks: string[] = [];

  const types = [
    "Hepsi",
    "Backend / Fullstack",
    "Fullstack",
    "Realtime System"
  ];
</script>

<aside class="w-72 border-r p-5 sticky top-10 h-fit">

  <h1 class="text-xl font-bold mb-6">Projeler</h1>

  <!-- SEARCH -->
  <input
    bind:value={$search}
    placeholder="Proje ara..."
    class="w-full border px-3 py-2 mb-6"
  />

  <!-- TYPE (SELECT STILL HERE BUT CLEANED) -->
  <div class="mb-6">
    <p class="text-sm mb-2">Tip</p>

    <div class="flex flex-col gap-2">

      {#each types as type}
        <button
          type="button"
          class={`text-left px-3 py-2 border text-sm transition
            ${$selectedType === type ? 'bg-black text-white' : ''}`}
          on:click={() => selectedType.set(type)}
        >
          {type}
        </button>
      {/each}

    </div>
  </div>

  <!-- STACK COMBOBOX -->
  <StackCombobox {allStacks} />

</aside>