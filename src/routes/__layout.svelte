<script lang="ts">
	import '../app.postcss';
	import json from '$app/lang/en.json';
	let main: HTMLElement | null = null;
</script>

<svelte:head>
	<title>
		{json.title}
	</title>
</svelte:head>

<div bind:this={main} class="container dark:bg-gray-900 bg-white m-auto px-4 h-screen py-8 ">
	<slot />
</div>
