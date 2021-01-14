<template>
    <b-container fluid class="container__login">
        <b-row class="vh-100" align-v="center" align-h="center">
            <b-card header="LOGIN" header-bg-variant="primary" header-text-variant="white">
                <b-form @submit.prevent="loginUser">

                    <!-- Email -->
                    <b-form-group
                        class="col-12"
                        label="Enter your email"
                    >
                        <b-form-input
                        v-model="userData.email"
                        type="email"
                        required
                        placeholder="Email"
                        ></b-form-input>
                    </b-form-group>

                    <!-- Password  -->
                    <b-form-group 
                        class="col-12"
                        label="Enter your Password"
                    >
                        <b-form-input
                        v-model="userData.password"
                        type="password"
                        required
                        placeholder="Password"
                        ></b-form-input>
                    </b-form-group>

                    <b-button block type="submit" variant="primary" class="mt-5">Login</b-button>

                </b-form>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
    /* eslint-disable */
    import { mapActions } from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                userData: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            ...mapActions('Auth', ['login']),
            loginUser() {
                this.login(this.userData)
                    .then(() => this.$router.replace({ path: '/qa' }))
                    .catch((err) => console.log("Err: ", err.response.data.message));
            }
        }
    }
</script>

<style>

</style>