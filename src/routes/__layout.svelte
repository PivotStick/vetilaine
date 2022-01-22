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
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;

		box-sizing: border-box;
	}

	:root {
		font-family: 'Rubik', sans-serif;
		background-color: #e9e9e9;
	}

	main {
		margin-top: clamp(8em, 10vw, 10vw);
		padding: 2em;
	}
</style>
