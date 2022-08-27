<template>
  <div class="inscrire">
    <p>Let's create a new account</p>
    <input type="text" placeholder="nom" v-model="nom" /><br />
    <input type="text" placeholder="Prenom" v-model="prenom" /><br />
    <input type="text" placeholder="Email" v-model="email" /><br />
    <input type="password" placeholder="Password" v-model="password" /><br />
    <button @click.prevent="inscrire">Inscrire</button>
    <span>or go back to <router-link to="/Login">login</router-link>.</span>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';


const auth = getAuth(app);



export default {
  name: "inscription",
  data() {
    return {
      nom: "",
      prenom: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async inscrire() {
      let ins = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      };
      console.log("sa passe", ins);
        createUserWithEmailAndPassword(auth, this.email.trim(), this.password)
        .then(
          (user) => console.log(user)
        ).catch(
          (e) => console.log(e.message)
        )
      // firebase
      // .auth().createUserWithEmailAndPassword(this.email,this.password)
      // .then(()=>{
      //    alert('utilisateur crée')
      // })
      // .catch((error)=>{
      //     alert('oops' + error.message)
      // })
    },
  },
};
</script>
<style scoped>
.inscrire {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 30%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
