<script context="module">
	import { API } from '$lib/API';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load(input) {
		input.session.user = await API.get('auth/session');
		input.session.admin = input.session.user.profiles.includes('admin');

		return {};
	}
</script>

<script>
	import { session } from '$app/stores';

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
	@import 'scss/style';
</style>
