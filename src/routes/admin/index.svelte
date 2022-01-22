<script>
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';

	import { API } from '$lib/API';

	let payload = {
		username: '',
		password: ''
	};

	const login = async () => {
		const { jwt, user } = await API.post('/auth/login', payload);
		$session.user = user;
		$session.admin = true;
		document.cookie = `jwt=${jwt}; path=/`;
		await goto('/');
	};
</script>

<form on:submit|preventDefault={login}>
	<input type="text" placeholder="Identifiant" bind:value={payload.username} />
	<input type="password" placeholder="Mot de Passe" bind:value={payload.password} />
	<button>Se connecter</button>
</form>

<style>
	form {
		display: grid;
		gap: 1em;

		padding: 0 15vw;
	}
</style>
