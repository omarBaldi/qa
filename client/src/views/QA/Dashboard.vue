<template>
    <div>
        <h1>Dashboard here</h1>
        <button @click="loggingOut">Logout</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'Dashboard',
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('Auth', ['isUserAuthenticated'])
        },
        methods: {
            ...mapActions('Auth', ['logout']),
            loggingOut() {
                this.logout();
                this.$router.replace({ path: '/login' });
            }
        }
    }
</script>

<style>

</style>