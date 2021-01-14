<template>
	<b-container fluid>
		<b-row class="vh-100" align-v="center" align-h="center">
			<b-card header="REGISTER" header-bg-variant="primary" header-text-variant="white">
				<b-form @submit.prevent="registerUser">

					<!-- Name -->
					<b-form-group
						class="col-12"
						label="Enter your name"
					>
						<b-form-input
							v-model="userData.name"
							type="text"
							required
							placeholder="Name"
						></b-form-input>
					</b-form-group>

					<!-- Name -->
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

					<!-- Repeat password  -->
					<b-form-group 
						class="col-12"
						label="Repeat your password"
					>
						<b-form-input
							v-model="userData.confirmPassword"
							type="password"
							required
							placeholder="Password"
						></b-form-input>
					</b-form-group>

					<b-button block type="submit" variant="primary" class="mt-5">Create account</b-button>

				</b-form>
			</b-card>
		</b-row>
	</b-container>
</template>

<script>
	/* eslint-disable */
	import { mapActions } from 'vuex';

	export default {
		name: 'Register',
		data() {
			return {
				userData: {
					name: null,
					email: null,
					password: null,
					confirmPassword: null
				}
			}
		},
		methods: {
			...mapActions('Auth', ['register']),
			registerUser() {
				this.register(this.userData)
					.then(() => this.$router.replace({ path: '/login' }))
					.catch((err) => console.log(err.response.data.message));
			}
		}
	}
</script>

<style>

</style>