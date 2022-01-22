<script context="module">
	import { API } from '$lib/API';

	/**
	 * @type {import("@sveltejs/kit").Load}
	 */
	export async function load({ params }) {
		const article = await API.get(`/articles/${params._id}`);

		return {
			props: { article }
		};
	}
</script>

<script>
	export let article;
</script>

<pre>{JSON.stringify(article, null, 2)}</pre>
