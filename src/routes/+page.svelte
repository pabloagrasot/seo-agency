<script>
	import Menu from '../components/menu.svelte';
	import Hero from '../components/hero.svelte';
	import Section1 from '../components/section1.svelte';
	import Section2 from '../components/section2.svelte';
	import Section3 from '../components/section3.svelte';
	import Section4 from '../components/section4.svelte';
	import Section5 from '../components/section5.svelte';
	import Form from '../components/form.svelte';

	export let data;

	export let form;

console.log(form)
console.log(data)
	
</script>

<div class="body__container">
	<Menu />
	<Hero />
	<Section1 />
</div>

<Section2 />

<div class="body__container">
	<Section3 />
</div>

<Section4 />

<div class="body__container">
	<Section5 />
	<Form data form/>
</div>


