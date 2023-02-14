<script>
	// @ts-nocheck

	const TAGS = [
		'Keywords',
		'Titles',
		'Descriptions',
		'WPO',
		'Core Web Vitals',
		'Canonical',
		'Datos Estructurados',
		'Rich Snippets',
		'Alts',
		'AVIF',
		'H1',
		'Contenidos',
		'SEO Local',
		'GA4',
		'Ecommerce',
		'Robots',
		'Sitemaps',
		'Hreflang',
		'Lazy Loading',
		'Cache',
		'GZIP',
		'Critical CSS',
		'Thin Content',
		'Canibalización',
		'Contenido Duplicado'
	];
	const DURATION = 15000;
	const ROWS = 5;
	const TAGS_PER_ROW = 5;

	const random = (/** @type {number} */ min, /** @type {number} */ max) =>
		Math.floor(Math.random() * (max - min)) + min;
	const shuffle = (/** @type {string[]} */ arr) => [...arr].sort(() => 0.5 - Math.random());
	let duration = random(DURATION - 5000, DURATION + 5000);

</script>

	<div class="tag-list" >
		{#each Array(ROWS) as _, index (index)}
			<div
				class="loop-slider"
				style:--duration={duration + 'ms'}
				style:--direction={index % 2 ? 'reverse' : 'normal'}
			>
				<aside class="inner">
					{#each shuffle(TAGS).slice(0, TAGS_PER_ROW) as tag}
						<div class="tag">
							<span>#</span>
							{tag}
						</div>
					{/each}
				</aside>
			</div>
		{/each}
		<div class="fade" />
	</div>


<style>

	.tag-list {
		flex: 1;
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		align-items: center;
		gap: 1rem 0;
		position: relative;
		padding: 1.5rem 0;
		overflow: hidden;
		width: 100%;
		z-index: 2;
	}


	aside {
		display: flex;
		width: max-content;
		animation-name: loop;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: var(--direction);
		animation-duration: var(--duration);
	}
	.tag {
		display: flex;
		align-items: center;
		gap: 0 0.2rem;
		color: #e2e8f0;
		font-size: 0.9rem;
		background-color: #334155;
		border-radius: 0.4rem;
		padding: 0.7rem 1rem;
		margin-right: 1rem;
		box-shadow: 0 0.1rem 0.2rem #000, 0 0.1rem 0.5rem #000, 0 0.2rem 1.5rem #000;
	}
	.tag span {
		font-size: 1.2rem;
		color: #64748b;
	}
	.fade {
		pointer-events: none;
		background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 30%, #1e293b);
		position: absolute;
		inset: 0;
		border-radius: 1rem;
		z-index: 2;
		
	}

	@keyframes loop {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@media (max-width: 468px) {
		.fade {
			border-radius: 0;
			background: linear-gradient(90deg, #1e293b, transparent 0%, transparent 100%, #1e293b);
		}
	}
</style>
