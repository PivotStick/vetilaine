<script>
	import { base } from '$app/paths';
	import Img from './Img.svelte';
</script>

<header>
	<h1>vetilaine.</h1>
	<nav>
		<a href="{base}/">Accueil</a>
		<a href="{base}/about">Contacts</a>
	</nav>
</header>

<style lang="scss">
	h1 {
		font-family: 'Pacifico', cursive;
	}

	header {
		position: fixed;
		z-index: 99999;

		top: 2em;
		left: 2em;
		right: 2em;

		background-color: #e9e9e9;
		display: flex;
		justify-content: space-between;
		align-items: center;

		gap: 2em;
		padding: 1em;

		border: 1px solid black;

		& > :global(img) {
			width: 4em;
			object-fit: contain;
		}
	}
</style>
