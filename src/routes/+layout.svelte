<script>
	import '$lib/styles/global.css'
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>
<main>
	<!-- <Nav /> -->
	<slot />
	<Footer />
</main>