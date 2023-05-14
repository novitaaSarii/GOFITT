<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div v-if="loginFailed" class="alert alert-danger">
                    ID Pegawai atau password pegawai Anda salah.
                </div>
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        
                        <h4>LOGIN</h4>
                        <hr>
                        <form @submit.prevent="login">
                            <div class="form-group mb-3">
                                <label class="form-label">Id Pegawai</label>
                                <input type="text" class="form-control" v-model="id_pegawai"
                                    placeholder="Masukkan ID pegawai" required>
                                <!-- validation -->
                                <div v-if="validation.id_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.id_pegawai[0] }}
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Password Pegawai</label>
                                <input type="password_pegawai" class="form-control" v-model="password_pegawai"
                                    placeholder="Masukkan password Pegawai" required>
                                <!-- validation -->
                                <div v-if="validation.password_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.password_pegawai[0] }}
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name: 'LoginMember',

    data() {
        return {
            //state loggedIn with localStorage
            loggedIn: localStorage.getItem('loggedIn'),
            //state token
            token: localStorage.getItem('token'),
            //state user
            user: [],
            //state validation
            validation: [],
            //state login failed
            loginFailed: null
        }
    },
    methods: {

        movepage(link) {
            this.$router.push(link) 
            this.window.location.reload()
        },

        login() {
            if (this.pegawai.id_pegawai && this.pegawai.password_pegawai) {
                axios.get('http://localhost:8000/sanctum/csrf-cookie')
                    .then(response => {

                        //debug cookie
                        console.log(response)

                        axios.post('http://localhost:8000/api/pegawais', {
                            id_pegawai: this.user.id_pegawai,
                            password_pegawai: this.user.password_pegawai
                        }).then(res => {

                            //debug user login
                            console.log(res)

                            if (res.data.success) {

                                //set localStorage
                                localStorage.setItem("loggedIn", response.data.token)

                                //set localStorage Token
                                localStorage.setItem("token", res.data.token)

                                //change state
                                this.loggedIn = true

                                //redirect dashboard
                                return this.$router.push({ name: 'pegawai' })

                            } else {

                                //set state login failed
                                this.loginFailed = true

                            }

                        }).catch(error => {
                            console.log(error)
                        })

                    })
            }

            this.validation = []

            if (!this.pegawai.id_pegawai) {
                this.validation.id_pegawai = true
            }

            if (!this.pegawai.password_pegawai) {
                this.validation.password_pegawai = true
            }

        }
    },

    //check user already logged in
    mounted() {
        if (this.loggedIn) {
            return this.$router.push({ name: 'pegawai' })
        }
    }
}
</script>
<style>
form {
    border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text],
input[type=password_pegawai] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #04AA6D;
    color: rgb(255, 255, 255);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
    opacity: 0.8;
}

/* Extra style for the cancel button (red) */
/* .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
} */

/* Center the avatar image inside this container */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
    width: 40%;
    border-radius: 50%;
}

/* Add padding to containers */
.container {
    padding: 16px;
}

/* The "Forgot password_pegawai" text */
span.psw {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }

    .cancelbtn {
        width: 100%;
    }
}
</style>