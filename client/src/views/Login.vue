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
    import axios from 'axios';

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
            async loginUser() {
                try {
                    const response = await axios({
                        method: 'POST',
                        url: 'http://localhost:3000/auth/login',
                        data: this.userData
                    });
                    const currentUser = response.data.currentUser;
                    localStorage.setItem('currentUserToken', JSON.stringify(currentUser.token));
                    this.$router.replace('/');
                    //replace this route with authenticated route (/qa)
                } catch(err) {
                    console.log(err.response)
                }
            }
        }
    }
</script>

<style>

</style>