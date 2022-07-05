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
