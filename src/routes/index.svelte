<script context="module">
	import { API } from '$lib/API';

	export async function load() {
		const articles = await API.get('/articles');

		return {
			props: { articles }
		};
	}
</script>

<script>
	export let articles = [];
</script>

<ul>
	{#each articles as { _id, src, price, description } (_id)}
		{@const [pre, cents] = price.toFixed(2).toString().split('.')}
		<li>
			<img {src} alt="" />
			<div>
				<p class="price">{pre}<span>.{cents}</span></p>
				<p class="description">{description}</p>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		gap: 2em;
		list-style: none;
	}

	li {
		display: flex;
		flex-direction: column;
		border: 1px solid black;

		img {
			width: 100%;
			height: 25em;
			object-fit: cover;
		}

		& > div {
			padding: 1em;
		}

		.price {
			font-size: 2em;
			font-weight: 900;

			span {
				font-size: 0.5em;
				font-weight: 300;

				&::after {
					content: '€';
				}
			}
		}

		.description {
			margin-top: 1em;
		}
	}
</style>
