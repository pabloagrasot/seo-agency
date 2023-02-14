
<slot />

<style global>
	:global(body) {
		color: #0a0a0a;
		margin: 0;
		box-sizing: border-box;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(h1, h2, h3, h4, h5) {
		margin: 0;
	}

	:global(a) {
		text-decoration: none;
		color: black;
	}

	:global(.body__container) {
		margin: 1rem;
		padding: 1rem 2rem;
	}

	:global(section) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 4rem 6rem;
		gap: 2rem;
	}

	@media (max-width: 1100px) {
		:global(section) {
			flex-direction: column-reverse;
		}
	}

	@media (max-width: 840px) {
		:global(section) {
			margin: 4rem 0;
		}
	}

	@media (max-width: 468px) {
		:global(.body__container) {
			margin: 0 auto;
			padding: 0;
		}
	}
</style>
