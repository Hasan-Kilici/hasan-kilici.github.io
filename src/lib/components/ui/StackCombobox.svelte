<script lang="ts">
  import { selectedStacks } from "$lib/stores/projectFilters";

  export let allStacks: string[] = [];

  let input = "";
  let open = false;

  function addStack(stack: string) {
    if (!$selectedStacks.includes(stack)) {
      selectedStacks.set([...$selectedStacks, stack]);
    }
    input = "";
  }

  function removeStack(stack: string) {
    selectedStacks.set($selectedStacks.filter(s => s !== stack));
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();

      const match = allStacks.find(
        s => s.toLowerCase() === input.toLowerCase()
      );

      if (match) addStack(match);
    }
  }
</script>

<div>
  <p class="text-sm mb-2">Teknoloji</p>
  <!-- INPUT -->
  <div class="border px-3 py-2 flex flex-wrap gap-2 items-center">
    <!-- SELECTED TAGS -->
    {#each $selectedStacks as stack}
      <span class="border px-2 py-1 text-xs flex items-center gap-2">
        {stack}
        <button on:click={() => removeStack(stack)}>×</button>
      </span>
    {/each}
    <!-- INPUT -->
    <input
      bind:value={input}
      on:focus={() => open = true}
      on:keydown={handleKey}
      placeholder="Teknoloji ekle..."
      class="flex-1 outline-none min-w-[120px]"
    />
  </div>
  <!-- DROPDOWN -->
  {#if open && input.length > 0}
    <div class="border mt-2 max-h-40 overflow-y-auto">

      {#each allStacks.filter(s =>
        s.toLowerCase().includes(input.toLowerCase()) &&
        !$selectedStacks.includes(s)
      ) as stack}

        <button
          type="button"
          class="w-full text-left px-3 py-2 text-sm hover:bg-black hover:text-white transition"
          on:click={() => addStack(stack)}
        >
          {stack}
        </button>

      {/each}

    </div>
  {/if}

</div>