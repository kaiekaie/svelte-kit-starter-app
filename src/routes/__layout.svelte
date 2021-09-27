<script lang="ts">
	import '../app.postcss';
	let main: HTMLElement | null = null;
</script>

<div bind:this={main} class="container dark:bg-gray-900 bg-white m-auto px-4 h-screen py-8 ">
	<slot />
</div>
