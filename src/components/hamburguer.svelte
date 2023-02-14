<script>
	import ServiciosDropdow from './servicios-dropdown-menu.svelte';
	import SolucionesDropdow from './soluciones-dropdown-menu.svelte';
	import logoJPG from '$lib/images/seo-agency-logo.jpg';
	import logoAVIF from '$lib/images/seo-agency-logo.avif';

	const menu = [
		'Agencia SEO',
		'Posicionamiento Web',
		'Consultores SEO',
		'SEO Local',
		'Servicios',
		'Soluciones para',
		'Contacto'
	];
	let activeClass = false;
	let displayDropdownServicios = false;
	let displayDropdownSoluciones = false;
</script>

<div class:active={activeClass}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		class="ham ham6"
		viewBox="0 0 100 100"
		width="80"
		on:click={() => (activeClass = !activeClass)}
		class:active={activeClass}
	>
		<path
			class="line top"
			d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
		/>
		<path
			class="line middle"
			d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
		/>
		<path
			class="line bottom"
			d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
		/>
	</svg>
</div>

<nav class:active={activeClass}>
	<picture>
		<source srcset={logoAVIF} type="image/avif" />
		<img src={logoJPG} alt="logo" loading="lazy" />
	</picture>

	{#each menu as item}
		{#if item != 'Servicios' && item != 'Soluciones para'}
			<a class="menu-link" href="/">{item}</a>
		{/if}

		{#if item == 'Servicios'}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				on:click={() => (displayDropdownServicios = !displayDropdownServicios)}
				class="menu-link menu-dropdown"
				href="#"
				>{item}
				<span class:close={displayDropdownServicios}>&#x2716;</span>
			</a>

			<ServiciosDropdow
				dropdownDisplay={displayDropdownServicios ? 'display-dropdown__true' : ''}
			/>
		{:else if item == 'Soluciones para'}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				on:click={() => (displayDropdownSoluciones = !displayDropdownSoluciones)}
				class="menu-link menu-dropdown"
				href="#"
				>{item}
				<span class:close={displayDropdownSoluciones}>&#x2716;</span>
			</a>

			<SolucionesDropdow
				dropdownDisplay={displayDropdownSoluciones ? 'display-dropdown__true' : ''}
			/>
		{/if}
	{/each}
</nav>

<style>
	nav {
		background-color: #fff;
		width: 100%;
		height: 150vh;
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		right: -100%;
		transition: 0.85s;
		gap: 1rem;
		max-height: 100%;
		overflow-y: auto;
		z-index: 3;
	}

	nav.active {
		right: 0;
		transition: 350ms;
	}

	a {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50vw;
		margin: 0 auto;
		color: hsla(253, 73%, 63%, 1);
    	font-weight: 500;
    	border: solid 0.1rem hsla(253, 73%, 63%, 1);
	}

	div {
		display: none;
		z-index: 4;
	}

	@media (max-width: 1100px) {
		div {
			display: block;
		}

		div.active {
			position: fixed;
			right: 0;
			top: 0;
		}
	}

	.ham {
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		transition: transform 400ms;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.line {
		fill: none;
		transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
		stroke: #000;
		stroke-width: 5.5;
		stroke-linecap: round;
	}

	.ham6 .top {
		stroke-dasharray: 40 172;
	}
	.ham6 .middle {
		stroke-dasharray: 40 111;
	}
	.ham6 .bottom {
		stroke-dasharray: 40 172;
	}
	.ham6.active .top {
		stroke-dashoffset: -132px;
	}
	.ham6.active .middle {
		stroke-dashoffset: -71px;
	}
	.ham6.active .bottom {
		stroke-dashoffset: -132px;
	}

	span {
		display: none;
	}

	span.close {
		display: block;
		margin-left: 1rem;
	}

	@media (max-width: 468px) {
		div:not(.active) {
			position: absolute;
			right: 0;
			top: 2.5rem;
		}
	}
</style>
