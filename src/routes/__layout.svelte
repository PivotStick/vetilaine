<script>
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Vetilaine</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>

<style global lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Pacifico&display=swap');

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;

		box-sizing: border-box;
	}

	:root {
		font-family: 'Dongle', sans-serif;
		background-color: #e9e9e9;
	}

	main {
		margin-top: clamp(8em, 10vw, 10vw);
		padding: 2em;
	}
</style>
