<template>
    <div class="notFound__container">
        <h1>404</h1>
        <h4>Oops! Page not found</h4>
        <router-link to="/">Return to homepage</router-link>
    </div>
</template>

<script>
    export default {
        name: 'notFound'
    }
</script>

<style lang="scss" scoped>
    .notFound__container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>