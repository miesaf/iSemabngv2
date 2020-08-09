<template>
    <div>
        <h3>Sila login untuk menggunakan iSembang</h3>

        <form @submit.prevent="login">
            <div class="form-group">
                <label>Emel</label>
                <input type="email" v-model="email" placeholder="Alamat Emel" />
            </div>
            <div class="form-group">
                <label>Kata Laluan</label>
                <input type="password" v-model="pword" placeholder="Kata Laluan" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app"

export default {
    name : "Login",

    data() {
        return {
            email : null,
            pword : null,
            user : null
        }
    },

    methods : {
        login () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.pword)
                .then((user)=>{
                    console.log("berjaya: " + user)
                    this.user = user.user
                    // this.user = user.user.email
                    // this.user = user.user.emailVerified
                    // this.user = user.user.displayName
                    // this.user = user.user.photoURL
                    // this.user = user.user.uid
                    // this.user = user.user.providerData
                    this.$router.push({ name: 'PrivateChat' })
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                    console.log("Code: " + errorCode)
                    console.log("Message: " + errorMessage)
            });
        }
    }
}
</script>

<style>

</style>