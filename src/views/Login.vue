<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="Password" v-model="password"><br>
        <button @click.prevent="loginne">Connection</button>
        <p>You don't have an account ? You can <router-link to="/inscription">create one</router-link> </p>
    </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
const auth = getAuth(app);


export default {
    name:'login',
    data(){
        return{
            email:"",
            password:""
        };
    },
    methods:{
        async loginne(){
            let aze ={
                email:this.email,
                password:this.password
            }
            console.log("qssfdfd",aze);
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((user)=>{
                console.log(user);
                this.$router.replace('/home');
            })
            .catch((e)=>{
                console.log(e.code);
            })
        }
    }
}
</script>
<style scoped>
    .login{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p{
        margin-top: 40px;
        font-size: 13px;
    }
    p a{
        text-decoration: underline;
        cursor: pointer;
    }

</style>
