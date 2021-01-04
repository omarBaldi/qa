const bcrypt = require('bcrypt');

module.exports = {

    allFieldsOk: (...args) => {
        for (let arg of args) {
            if (!arg) return false
        }
        return true
    },

    passwordsEqual: (password, confirmPassword) => {
        return password === confirmPassword
    },

    hashing: async (password) => {
        const salt = 10;
        return await bcrypt.hash(password, salt);
    },

    emailFormatOk: (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

};