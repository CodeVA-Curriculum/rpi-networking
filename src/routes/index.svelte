<script>
	// import '../app.scss';
	import NSFLogo from '$lib/assets/NSFLogo.png';
	import CodeVA from '$lib/assets/CodeVALogo.png';
	import {base} from '$app/paths';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>Twine Trail Guide</title>
</svelte:head>

<section class='hero is-fullheight-with-navbar homepage'>
	<div class='hero-head'>
		<Nav />
	</div>
	<div class='hero-body pt-0'>
		<div class='container has-text-centered'>
			<img alt='The CodeVA logo' style='height: 10rem; width: auto;' src='{CodeVA}' />
			<h1 class='title m-2'>Teaching Networking with Raspberry Pi</h1>
			<h2 class='subtitle m-2'>CodeVA @CSTA 2022</h2>
			<div class='buttons is-centered m-3'>
				<a href="{base}/session" class='button is-primary'>View Materials</a>
				<a href="{base}/about" class='button is-secondary'>About</a>
			</div>
			
		</div>
	</div>
</section>

<style>
	.homepage {
		height: 100vh;
	}
	.is-tiny {
		font-size: 0.75rem;
	}
	.disclaimer {
		background-color: gainsboro;
	}
</style>
