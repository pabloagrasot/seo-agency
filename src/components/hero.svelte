<script>
	import wave from '$lib/images/wave.svg';

const TAGS = [
		'Keywords',
		'Estrategia',
		'Etiquetas',
		'WPO',
		'Core Web Vitals',
		'Canonical',
		'Structured Data',
		'Rich Snippets',
		'Alts',
		'AVIF',
		'H1',
		'Contenido',
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
	
	let tag = [""]
	function showRandom(){
  		tag = TAGS[Math.floor(Math.random()*TAGS.length)].split(" ");
	}

	setInterval(showRandom, 1000);

	$: outerWidth = 0
	$: blobRotate = outerWidth < 840 ? "rotate(0)" : "rotate(-38)";
	$: blobWidth = outerWidth > 508 ? "100%" : "90%";
	$: blobTextPositionX = outerWidth < 840 ? "80" : "200";
	$: blobTextPositionY = outerWidth < 840 ? "200" : "0";
	$: textRotate = outerWidth > 840 ? "rotate(38)" : "rotate(0)";

	
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet">
</svelte:head>


<svelte:window bind:outerWidth />
<section class="hero">
	<div>
		<h1>Agencia de SEO</h1>
		<p>Pharetra convallis posuere morbi leo. Tellus mauris a diam maecenas.</p>
		<a href="/">Contacta con nosotros</a>

	</div>
	<div class="image_hero">
		<svg class="blob"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 500 500"
			width={blobWidth}
			id="blobSvg"
			filter="blur(0px)"
			style="opacity: 1;"
			transform={blobRotate}
			><path id="blob" fill="url(#gradient)" style="opacity: 1;">
				<animate
					attributeName="d"
					dur="12100ms"
					repeatCount="indefinite"
					values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
				/>
				
			</path>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" style="stop-color: rgb(121, 91, 229);" />
					<stop offset="100%" style="stop-color: rgb(70, 120, 219);" />
				</linearGradient>
			</defs>

			<text y={blobTextPositionY} transform={textRotate}>
				{#each tag as text}
					<tspan x={blobTextPositionX} dy="50">{text} </tspan>
				{/each}
			</text>



		</svg>
	</div>
</section>

<style>

	@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');


	.hero {
		min-height: 37rem;
		z-index: 2;
		margin-bottom: 8rem;
		margin-top: 0;
	}


	.hero::after{
		content: "";
   		left: 0;
		top:0;
   		background-image: url(wave);
   		background-size: 100%;
   		background-repeat: no-repeat;
   		background-position: bottom;
   		display: block;
   		position: absolute;
   		width: 100%;
   		height: 100%;
   		z-index: -1;
	}


	div {
		flex: 1;
	}

	.image_hero{
		width: 100%;
	}

	h1 {
		font-size: 3rem;
	}

	p {
		font-size: 2rem;
	}

	a {
		background-color: hsla(220, 68%, 57%, 1);
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		text-align: center;
		font-weight: 700;
		color: #fff;
	}

	a:hover{
		background-color: hsla(253, 73%, 63%, 1);
        color: #ffffff;
	}

	tspan{
		font-size:3.5rem;
		font-family: 'Alfa Slab One', cursive;
		fill: #fff;
	}

	@media (max-width: 1100px) {
		.hero::after{
   			display: none;
	}
	}

	@media (max-width: 840px) {
		h1 {
			font-size: 2rem;
			text-align: center;
		}

		p {
			font-size: 1.5rem;
		}

		a {
			display: block;
		}
	}

	@media (max-width: 468px) {
		div:not(.image_hero) {
			padding: 0 2rem;
		}
	}
</style>
