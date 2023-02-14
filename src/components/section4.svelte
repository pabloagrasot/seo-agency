<script>


    import linkedingLogo from '$lib/images/linkedin.svg';
    import quiqueJPG from '$lib/images/enrique.png';
    import quiqueAVIF from '$lib/images/enrique.avif';
    import jesusJPG from '$lib/images/jesus.png';
    import jesusAVIF from '$lib/images/jesus.avif';
    import pabloJPG from '$lib/images/pablo.png';
    import pabloAVIF from '$lib/images/pablo.avif';

    const equipo = [
        {     
            linkedin: '/src/lib/images/seo-icon-1.svg',
            imgAvif: quiqueAVIF,
            imgpng: quiqueJPG,
            name:'Enrique Romero',
            puesto: 'Strategic Director',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            linkedin: '/src/lib/images/seo-icon-2.svg',
            imgAvif: jesusAVIF,
            imgpng: jesusJPG,
            name:'Jesús Ábalos',
            puesto: 'Head of SEO',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            linkedin: '/src/lib/images/seo-icon-3.svg',
            imgAvif: pabloAVIF,
            imgpng: pabloJPG,
            name:'Pablo Agrasot',
            puesto: 'IT & Developer Expert',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        }
    ]
</script>

<section class="section4">
	<div class="section-style">
        <h2>Nuestro Equipo</h2>
        <p>Glavrida for habitant morbi tristique senectus et netus et malesuada fames</p>
        <div class="equipo">
            {#each equipo as miembro}
            <div class="miembro">
                <picture>
                    <source srcset={miembro.imgAvif} type="image/avif">
                    <img class="avatar" src={miembro.imgpng} alt={miembro.name}>
                </picture>
                <h3>{miembro.name}</h3>
                <p class="puesto">{miembro.puesto}</p>
                <p>{miembro.description}</p>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href={miembro.linkedin}><img src={linkedingLogo} alt="linkedin {miembro.name}"></a>
            </div>

        {/each}
        </div>
    </div>
</section>

<style>
	.section4 {
        background-color: #e299ff;
        background-image: radial-gradient(at 1% 63%, hsla(244, 66%, 72%, 1) 0px, transparent 50%), radial-gradient(at 3% 25%, hsla(213, 89%, 76%, 1) 0px, transparent 50%), radial-gradient(at 58% 7%, hsla(220, 68%, 70%, 1) 0px, transparent 50%), radial-gradient(at 82% 70%, hsla(253, 73%, 63%, 1) 0px, transparent 50%), radial-gradient(at 67% 7%, hsla(69, 73%, 74%, 1) 0px, transparent 50%), radial-gradient(at 46% 86%, hsla(132, 87%, 76%, 1) 0px, transparent 50%), radial-gradient(at 49% 24%, hsla(311, 60%, 73%, 1) 0px, transparent 50%);
		background-position: center center;
		background-size: 100%;
		background-repeat: no-repeat;
        margin-left: 0;
		margin-right: 0;
		width: 100%;
		margin-top: 2rem;
	}

    .section-style{
        padding: 4rem 9rem;
        text-align: center;
    }

    .section-style > h2 {
        font-size: 2.5rem;
    }

    .section-style > p {
        color: #ffffff;
        font-size: 2rem;
        margin-bottom: 5rem;
    }

    .equipo{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 4rem;
        margin-top: 2rem;
    }

    .miembro{
        flex: 20%;
        background-color: #ffffff;
        border-radius: 0.5rem;
        padding: 2rem;
        min-width: 13rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
    }

    .avatar{
        width: 12rem;
        background-color: hsla(69, 73%, 74%, 1);
        border-radius: 33%;
    }


    h3{
        letter-spacing: 1px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.25rem;
    }

    .miembro > p:not(.puesto){
        font-size: 1.125rem;
        line-height: 1.6;
        font-weight: 400;
    }

    .puesto{
        color: hsla(220, 68%, 57%, 1);
        font-weight: bold;
        font-size: 1.2rem;
        margin: 0 auto;
    }

    @media (max-width: 728px) {
		.section-style{
        padding: 4rem 2rem;
        }

        .section-style > p {
        font-size: 1.5rem;

        }
	}


	@media (max-width: 468px) {
		.section4 {
			margin-top: -4rem;
		}
	}


</style>
