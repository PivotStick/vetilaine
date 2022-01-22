<script>
	let items = [
		{
			src: 'https://images.unsplash.com/photo-1572187092690-63fffd19feb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			price: 110.0
		},
		{
			src: 'https://images.unsplash.com/photo-1571139627661-cf707929f465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
			price: 98.0
		},
		{
			src: 'https://images.unsplash.com/photo-1610973310510-82f514ea1986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
			price: 87.23
		}
	];
</script>

<ul>
	{#each items as { src, price }}
		{@const [pre, cents] = price.toFixed(2).toString().split('.')}
		<li>
			<img {src} alt="" />
			<p>{pre}<span>.{cents}</span></p>
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

		img {
			width: 100%;
			height: 25em;
			object-fit: cover;
		}

		p {
			font-size: 2em;
			font-weight: 900;

			span {
				font-size: 0.75em;
				font-weight: 300;
			}
		}
	}
</style>
