<script>
	import { base } from '$app/paths';
	import { session } from '$app/stores';
	import { API } from '$lib/API';

	const logout = async () => {
		document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
		$session.user = await API.get('auth/session');
		$session.admin = false;
	};
</script>

<header>
	<nav>
		<a href="{base}/">Accueil</a>
		<a href="{base}/about">Contacts</a>
		{#if $session.admin}
			<button on:click={logout}>Se déconnecter</button>
		{/if}
	</nav>
	<h1>Vetilaine.</h1>
	<div />
</header>

<style lang="scss">
	h1 {
		font-family: 'Pacifico', cursive;
		text-align: center;
	}

	header {
		position: fixed;
		z-index: 99999;
		color: white;

		top: 0;
		left: 0;
		right: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		gap: 2em;
		padding: 1em;

		background: linear-gradient(to bottom, rgba(black, 0.85), rgba(black, 0));

		& > * {
			flex: 1;
		}

		& > :global(img) {
			width: 4em;
			object-fit: contain;
		}
	}

	nav {
		display: flex;
		gap: 1.5em;
	}

	a {
		color: white;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-decoration: none;
	}
</style>
