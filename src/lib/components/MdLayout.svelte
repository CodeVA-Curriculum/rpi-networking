<script context='module'>
    import TextImage from '$lib/components/TextImage.svelte'
    const textimage = TextImage
    export {textimage}
</script>

<script>
    import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<div class='section content'>
    <div class='container'>
    <slot />
</div>
</div>

<style>
    div {
        margin-right: 5rem;
        margin-left: 5rem;
    }
</style>
