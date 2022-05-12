<script context="module" lang="ts">
	export const load = async (loadInput: LoadInput) => ({
		props: {
			key: loadInput.url.pathname
		}
	});
</script>

<script lang="ts">
	import '../app.postcss';
	import json from '$/lang/en.json';
	import Animate from '$lib/components/Animate.svelte';
	import type { Load, LoadInput } from '@sveltejs/kit';
	let main: HTMLElement | null = null;

	export let key: string;
</script>

<svelte:head>
	<title>
		{json.title}
	</title>
</svelte:head>
<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>
<div bind:this={main} class="container dark:bg-gray-900 bg-white m-auto px-4 h-screen py-8 ">
	<Animate refresh={key}>
		<slot />
	</Animate>
</div>
