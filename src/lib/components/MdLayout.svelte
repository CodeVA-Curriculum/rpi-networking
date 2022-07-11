<script context='module'>
    import TextImage from '$lib/components/TextImage.svelte'
    const textimage = TextImage
    export {textimage} // TODO: add link support
</script>

<script>
    import Nav from '$lib/components/Nav.svelte';
</script>

<div class='nav'>
<Nav />
</div>
<div class='section content'>
    <div class='container'>
    <slot />
</div>
</div>

<style>
    @media print {
        .nav {
            display: none;
        }
    }
</style>