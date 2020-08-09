<template>
    <div>
        <h3>Sila masukkan emel anda untuk reset kata laluan</h3>

        <form @submit.prevent="reset">
            <div class="form-group">
                <label>Emel</label>
                <input type="email" v-model="email" placeholder="Alamat Emel" />
            </div>
            <button type="submit">Reset</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app"

export default {
    name : "Reset",

    data() {
        return {
            email : null
        }
    },

    methods : {
        reset () {
            var auth = firebase.auth();

            auth.sendPasswordResetEmail(this.email).then(function() {
                // Email sent.
                alert("INFO: Sila semak emel anda untuk reset kata laluan.")
                this.$router.push({ name: 'Login' })
            }).catch(function(error) {
                // An error happened.
                alert("RALAT: Gagal menghantar emel untuk reset kata laluan.")
            });
        }
    }
}
</script>

<style>

</style>