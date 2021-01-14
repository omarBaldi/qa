/* eslint-disable */
import axios from 'axios';
import { JsonWebTokenError } from 'jsonwebtoken';

export default {
    namespaced : true,
    state:  {
        BASE_URL: 'http://localhost:3000',
        currentUser: {
            token: localStorage.getItem('currentUserToken') || null,
            info: null
        }
    },
    getters: {
        isUserAuthenticated(state) {
            return !!state.currentUser.token
        }
    },
    mutations: {
        setCurrentUser(state, token) {
            state.currentUser.token = token;
        },
        removeCurrentUser(state) {
            state.currentUser.token = null
        }
    },
    actions: {
        register({ state }, data) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'POST',
                    url: `${state.BASE_URL}/auth/register`,
                    data
                })
                .then(() => resolve(true))
                .catch((err) => reject(err));
            });
        },
        login({ state, commit }, data) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'POST',
                    url: `${state.BASE_URL}/auth/login`,
                    data
                })
                .then((response) => {
                    const { token, user } = response.data.currentUser;
                    localStorage.setItem('currentUserToken', token);
                    commit('setCurrentUser', token);
                    resolve(true);
                })
                .catch((err) => reject(err));
            });
        },
        logout({ commit }) {
            localStorage.removeItem('currentUserToken');
            commit('removeCurrentUser');
        }
    },

}