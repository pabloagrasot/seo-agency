<script>
	import logoJPG from '$lib/images/seo-agency-logo.png';
	import logoAVIF from '$lib/images/seo-agency-logo.avif';
	import Hamburguer from './hamburguer.svelte';
	import ServiciosDropdow from './servicios-dropdown-menu.svelte';
	import SolucionesDropdow from './soluciones-dropdown-menu.svelte';
	const menu = [
		'Agencia SEO',
		'Posicionamiento Web',
		'Consultores SEO',
		'SEO Local',
		'Servicios',
		'Soluciones para',
		'Contacto'
	];

	let displayDropdownServicios = false;
	let displayDropdownSoluciones = false;
</script>

<div>
	<picture>
		<source srcset={logoAVIF} type="image/avif" />
		<img src={logoJPG} alt="logo" loading="lazy" />
	</picture>

	<nav>
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
					<ServiciosDropdow
						dropdownDisplay={displayDropdownServicios ? 'display-dropdown__true' : ''}
					/>
				</a>
			{:else if item == 'Soluciones para'}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					on:click={() => (displayDropdownSoluciones = !displayDropdownSoluciones)}
					class="menu-link menu-dropdown"
					href="#"
					>{item}
					<SolucionesDropdow
						dropdownDisplay={displayDropdownSoluciones ? 'display-dropdown__true' : ''}
					/>
				</a>
			{/if}
		{/each}
	</nav>

	<Hamburguer />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 0.5rem;
		padding: 0 1rem;
	}
	img {
		width: 12rem;
		border-radius: 0.5rem;
	}

	nav {
		display: flex;
		gap: 1rem;
		z-index: 2;
	}

	a {
		margin: 0 1rem;
		padding: 0.5rem 0;
		font-size: 1.1rem;
		text-align: center;
		display: flex;
		align-items: center;
		background: linear-gradient(to right, #fff, #fff),
			linear-gradient(
				to right,
				hsla(213, 89%, 76%, 1),
				hsla(220, 68%, 70%, 1),
				hsla(253, 73%, 63%, 1)
			);
		background-size: 100% 3px, 0 3px;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	a:hover,
	a:active {
		/*animation: 0.9s draw linear forwards;*/
		background-size: 0 3px, 100% 3px;
		color: #189ab4;
	}

	@media (max-width: 1100px) {
		div {
			background-color: transparent;
		}
		nav {
			display: none;
		}
	}

	@media (max-width: 468px) {
		picture {
			position: relative;
			left: -1rem;
			top: 1.5rem;
		}
	}
</style>
