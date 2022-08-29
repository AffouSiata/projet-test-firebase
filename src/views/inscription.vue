<template>
  <div class="inscrire">
    <p>Let's create a new account</p>
    <span class="error"></span>
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
import {required} from 'vuelidate/lib/validators'



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
  validations:{
    
  },
  methods: {
    async inscrire() {
      function showerror(errorMe){
        document.querySelector('.error').innerHTML =errorMe;



        if(errorMe.code=="auth/email-already-in-use"){
        showerror("l'email existe déja")
        return false;

        }
        if(errorMe.code=="auth/invalid-email"){
        showerror("l'email est invalid")
        return false;

        }
       
        if(errorMe.code=="auth/invalid-email" || errorMe.code=="auth/internal-error"){
        showerror("les champs ne doivent pas etre vide")
        return false;

        }
        if(errorMe.code=="auth/weak-password"){
        showerror("le mot passe est trés court")
        return false;

        }
        
        
      }
      

   

      
    

      let ins = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      };
      console.log("sa passe", ins);
        createUserWithEmailAndPassword(auth, this.email.trim(), this.password)
        .then((user)=>{
          console.log(user)
          this.$router.replace('/login')
        })
        .catch((e)=>{
          // console.log(e.code)
          showerror(e)
      
        })
       
          
        
    }
         
      
    }
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
.error{
  color:red;
  padding: 10px;
  /* display: none; */
}
.error.display-error{
 display: block;
 margin-bottom: 20px;
 transform: translateY(-20px);
}
</style>
