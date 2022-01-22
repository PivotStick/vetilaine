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
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	export let articles = [];
</script>

<div class="head">
	<h1>Lorem ipsum</h1>
</div>

{#if $session.admin}
	<a href="{base}/admin/articles">
		<button>Créer un Article</button>
	</a>
{/if}

<ul>
	{#each articles as { _id, src, price } (_id)}
		{@const [pre, cents] = price.toFixed(2).toString().split('.')}
		<li
			on:click={() => {
				goto(`${base}/articles/${_id}`);
			}}
		>
			<div class="img">
				<img {src} alt="" />
			</div>
			<div class="body">
				<p class="price">{pre}<span>.{cents}</span></p>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	.head {
		color: white;
		width: 100vw;
		height: 90vh;

		padding: calc(4em + 5vw) 5vw;

		background-image: url('https://images.unsplash.com/photo-1491245257527-395e9c480145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
		background-repeat: no-repeat;
		background-size: cover;

		h1 {
			margin: 1em;
			font-size: clamp(3em, 6vw, 5em);
		}
	}

	button {
		width: 100%;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
		margin-top: 2em;
		gap: 2em;
		list-style: none;
		margin: 4vw;
	}

	li {
		cursor: pointer;
		display: flex;
		flex-direction: column;

		.img {
			position: relative;
			height: 25em;
			overflow: hidden;

			&::after {
				position: absolute;
				content: 'Je suis intéressé';
				pointer-events: none;

				top: 50%;
				left: 50%;
				color: white;
				opacity: 0;
				font-size: 200%;
				text-align: center;

				transition-property: opacity, transform;

				transform: translate(-50%, -50%) scale(var(--scale, 1));
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;

				transition-property: transform, filter;
			}
		}

		.body {
			padding: 1em;
			text-align: center;
		}

		.price {
			font-size: 2em;
			font-weight: 900;

			span {
				font-size: 0.5em;
				font-weight: 300;
			}

			&::before {
				content: '€';
			}
		}

		&:hover {
			.img {
				&::after {
					transition-delay: 50ms;
					opacity: 1;
					--scale: 1.5;
				}

				img {
					filter: brightness(0.5);
					transform: scale(1.1);
				}
			}
		}
	}
</style>
