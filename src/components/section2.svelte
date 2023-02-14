<script>
// @ts-nocheck

     import icon1 from '$lib/images/seo-icon-1.svg';
     import icon2 from '$lib/images/seo-icon-2.svg';
     import icon3 from '$lib/images/seo-icon-3.svg';
     import icon4 from '$lib/images/seo-icon-4.svg';
     import icon5 from '$lib/images/seo-icon-5.svg';
     import icon6 from '$lib/images/seo-icon-6.svg';
    const servicios = [
        {   
            
            icon: {icon1},
            name:'APP DEVELOPMENT',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            icon: {icon2},
            name:'MOBILITY SERVICES',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            icon: {icon3},
            name:'CONSULTING',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            icon: {icon4},
            name:'TEAM EXTENSION',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            icon: {icon5},
            name:'APPLICATIONS',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            icon: {icon6},
            name:'24/7 SUPPORT',
            description:'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.'
        }
    ]
</script>

<section class="section2">
	<div class="section-style">
        <h2>Nuestro trabajo</h2>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>

        <div class="services">
            {#each servicios as service, index}

            <div class="service">
                <div class={ index % 2 == 0 ? "icons green" : "icons yellow"}>
                    <img src={service.icon} alt="seo icon">
                </div>
                <article class="service__content">  
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="#">Saber más</a>
                </article>
            </div>

        {/each}
        </div>
    </div>
</section>

<style>
	.section2 {
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

    .services{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 4rem;
        margin-top: 2rem;
    }

    .service{
        flex: 20%;
        background-color: #ffffff;
        border-radius: 0.5rem;
        padding: 2rem;
        min-width: 13rem;
    }

    .icons{
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -5rem;
        margin: 0 auto;
    }

    .icons.yellow{
        background-color: hsla(69, 73%, 74%, 1);
    }

    .icons.green{
        background-color:  hsla(132, 87%, 76%, 1)
    }

    .icons > img{
        width: 3.5rem;
    }

    .service__content{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        top: -3rem;
        gap: 0.5rem;
    }

    h3{
        letter-spacing: 1px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.25rem;
    }

    .service__content > p{
        font-size: 1.125rem;
        line-height: 1.6;
        font-weight: 400;
    }

    .service__content > a {       
        color: hsla(253, 73%, 63%, 1);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
        margin: 0 auto;
        border: solid 0.1rem hsla(253, 73%, 63%, 1);
    }

    .service__content > a:hover {       
        background-color: hsla(253, 73%, 63%, 1);
        color: #ffffff;
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
		.section2 {
			margin-top: -4rem;
		}
	}


</style>
