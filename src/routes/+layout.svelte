<script lang="ts">
	import NavigationBar from "$lib/components/ui/NavigationBar.svelte";
	import Footer from "$lib/components/ui/Footer.svelte";
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<NavigationBar />
<main>
	{@render children()}
</main>
<Footer />
