<script>
	import seoJPG from '$lib/images/seo.png';
	import seoAVIF from '$lib/images/seo.avif';
</script>

<section class="section-1">
	<div>
		<picture>
			<source srcset={seoAVIF} type="image/avif" />
			<img src={seoJPG} alt="seo" loading="lazy" />
		</picture>
	</div>

	<div>
		<h3>Sample Headline</h3>
		<h2>Our management consulting services focus on our clients' most critical issues</h2>
		<p class="negrita">
			<strong
				>I thought I had it figured out – I'd moved from Gujarat to Texas and was working with a
				trailblazing team at AT&amp;T, literally one of the biggest companies in the world.</strong
			>
		</p>

		<p>
			Sem fringilla ut morbi tincidunt augue interdum velit. Nunc sed blandit libero volutpat sed
			cras. Risus quis varius quam quisque id. Semper auctor neque vitae tempus quam pellentesque
			nec nam aliquam. Et tortor consequat id porta nibh. Tincidunt id aliquet risus feugiat in ante
			metus dictum at. Feugiat pretium nibh ipsum consequat.&nbsp;
		</p>
		<a href="/"> Consigue tus objetivos</a>
	</div>
</section>

<style>
	
	div {
		flex: 1;
	}

	h3 {
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: 300;
		font-size: 1.3rem;
	}

	h2 {
		font-size: 2.5rem;
		color: hsla(220, 68%, 57%, 1);
	}

	div:nth-last-child(1) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.negrita {
		font-size: 1.2rem;
	}

	a {
		background-color: hsla(220, 68%, 57%, 1);
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		text-align: center;
		font-weight: 700;
		align-self: flex-start;
		margin-top: 2rem;
		color: #fff;
	}

	a:hover {
		background-color: hsla(253, 73%, 63%, 1);
        color: #ffffff;
	}

	@media (min-width: 1100px) {

		section.section-1{
			gap:0;
		}


		div:nth-child(2) {
		    display: flex;
    		flex-direction: column;
    		justify-content: space-around;
    		margin-bottom: -2rem;
    		z-index: 2;
    		position: relative;
    		background-color: rgba(255,255,255,0.75);
    		position: relative;
    		right: 6rem;
    		top: -5rem;
    		padding: 2rem;
    		border: solid 0.2rem hsla(253, 73%, 63%, 1);
    		border-radius: 0.5rem;
		}
	}
	@media (max-width: 1100px) {

		div:nth-child(1) {
			position: absolute;
			z-index: 1;
			top: 77rem;
		}

		div:nth-last-child(1) {
			z-index: 2;
			background-color: rgba(255, 255, 255, 0.2);
			padding: 4rem;
			border-radius: 0.5rem;
			border: solid 0.2rem hsla(253, 73%, 63%, 1);
		}
	}

	@media (max-width: 840px) {
		a {
			align-self: auto;
		}
	}

	@media (max-width: 750px) {
		img {
			width: 100%;
		}

		div:nth-last-child(1) {
			z-index: 2;
			background-color: rgba(255, 255, 255, 0.2);
			padding: 4rem 2rem;
			margin: -4rem 0.5rem 2rem 0.5rem;
		}

		h2 {
			font-size: 2rem;
		}
		.negrita {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 468px) {
		div:nth-child(1) {
			top: 55rem;
		}
		h2 {
			font-size: 1.5rem;
		}
	}
</style>
