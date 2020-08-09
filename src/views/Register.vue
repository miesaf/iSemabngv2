<template>
    <div>
        <h3>Pendaftaran Akaun Baru</h3>

        <form @submit.prevent="register">
            <div class="form-group">
                <label>Emel</label>
                <input type="email" v-model="email" placeholder="Alamat Emel" />
            </div>
            <div class="form-group">
                <label>Kata Laluan</label>
                <input type="password" v-model="pword" placeholder="Kata Laluan" />
            </div>
            <button type="submit">Daftar</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app"

export default {
    name : "Register",

    data() {
        return {
            email : null,
            pword : null
        }
    },

    methods : {
        register () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.pword)
                .then((user)=>{
                    console.log("berjaya: " + user)
                    this.$router.push({ name: 'PrivateChat' })
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log("Code: " + errorCode)
                alert("Error: " + errorMessage)
            });
        }
    }
}
</script>

<style>

</style>