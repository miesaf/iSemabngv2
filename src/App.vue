<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="!isAuth" :to="{ name: 'Login' }">Login</router-link>{{ isAuth ? null : ' |' }}
      <router-link v-if="!isAuth" :to="{ name: 'Register' }">Daftar</router-link>{{ isAuth ? null : ' |' }}
      <router-link v-if="!isAuth" :to="{ name: 'Reset' }">Lupa Kata Laluan</router-link>
      <router-link v-if="isAuth" :to="{ name: 'PrivateChat' }">Sembang</router-link>{{ isAuth ? ' |' : null }}
      <a v-if="isAuth" href @click.prevent="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
    return {
      isAuth : false
    }
  },

  methods: {
    logout () {
      firebase.auth().signOut().then(entah => {
        // Sign-out successful.
        this.isAuth = false
        // this.$router.push({ name: 'Login' })
        alert("INFO: Anda telah berjaya logout.")
      }).catch(function(error) {
        // An error happened.
        this.isAuth = false
        this.$router.push({ name: 'Login' })
        alert("RALAT: Gagal untuk logout.")
      })
    }
  },

  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuth = true
      } else {
        // do nothing
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
