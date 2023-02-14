<script>
	const preguntas = [
        {   
            pregunta: 'What if I need more time after the free trial?',
            respuesta:'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        },
		{   
            pregunta: 'What if I need more time after the free trial?',
            respuesta:'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        },
		{   
            pregunta: 'What if I need more time after the free trial?',
            respuesta:'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        },
		{   
            pregunta: 'What if I need more time after the free trial?',
            respuesta:'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.'
        }
    ]
</script>

<section class="section-5">
	<h2>Preguntas frecuentes</h2>
	
	<div>
		{#each preguntas as pregunta}
		<details>
			<summary>{pregunta.pregunta}</summary>
				<p>{pregunta.respuesta}</p>
		</details>
		{/each}
	</div>
	
</section>

<style>
	.section-5{
		flex-direction: column;
	}

	h2{
		font-size: 2.5rem;
    	color: hsla(220, 68%, 57%, 1);
		text-align: center;
		margin: 0 auto;
	}

	h2::after{
		content: '';
    	height: 0.5rem;
    	width: 10rem;
    	background-color: hsla(220, 68%, 57%, 1);
    	position: relative;
    	display: block;
    	top: 8px;
    	margin-bottom: 2rem;
    	left: 7rem;
		border-radius: 0.2rem;
	}

	div{
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
		width: 100%
	}

	summary{
		padding: 1.5rem;
		border-radius: 0.5rem;
		background-color: #8bbcf8;
		color: hsla(253, 73%, 63%, 1);
		cursor: pointer;
		font-weight: 500;
		font-size: 1.2rem;
	}
	summary::marker{
		color: #fff;
		content: '+ '
	}

	details[open] > summary::marker{
		content: '- ';
		color: #fff;
	}

	summary:hover, details[open] > summary{
		background-color: hsla(253, 73%, 63%, 1);
		color:  #fff;
	}

	details > p {
		padding: 0 2rem;
	}

	@media (max-width: 468px) {
	
		.section-5 {
			margin: 2rem;
		}

		details > p {
			padding: 0 1em;
		}
	}
</style>
