<script context='module'>
    import TextImage from '$lib/components/TextImage.svelte'
    import Anchor from './Anchor.svelte';
    import Box from './Box.svelte'
    const textimage = TextImage
    const a = Anchor
    const box = Box
    export {textimage, a, box}
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