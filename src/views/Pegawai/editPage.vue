<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT PEGAWAI</h4>
                        <hr>
                        <form @submit.prevent="update">

                            <div class="form-group mb-3">
                                
                                <label class="form-label">Id</label>
                                <input type="text" class="form-control" v-model="pegawai.id"
                                    placeholder="Masukkan id ">
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                
                                <label class="form-label">Id</label>
                                <input type="text" class="form-control" v-model="pegawai.id_pegawai"
                                    placeholder="Masukkan id pegawai">
                                <div v-if="validation.id_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.id_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="form-label">Nama</label>
                                <input type="text" class="form-control" v-model="pegawai.nama_pegawai"
                                    placeholder="Masukkan nama pegawai">
                                <div v-if="validation.nama_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.nama_pegawai[0] }}
                                </div>
                            </div>


                            <div class="form-group mb-3">
                                <label class="formlabel">Alamat</label>
                                <input class="form-control" type="text" v-model="pegawai.alamat_pegawai"
                                    placeholder="Masukkan alamat pegawai">
                                <div v-if="validation.telepon" class="mt-2 alert alert-danger">
                                    {{ validation.alamat_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="form-label">EMAIL</label>
                                <input class="form-control" type="text" v-model="pegawai.email_pegawai"
                                    placeholder="Masukkan email pegawai">
                                <div v-if="validation.email_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.email_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="form-label">Password</label>
                                <input class="form-control" type="text" v-model="pegawai.password_pegawai"
                                    placeholder="Masukkan password pegawai">
                                <div v-if="validation.password_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.password_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="formlabel">TELEPON</label>
                                <input class="form-control" type="number" v-model="pegawai.telepon_pegawai"
                                    placeholder="Masukkan telepon pegawai">
                                <div v-if="validation.telepon_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.telepon_pegawai[0] }}
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        
        let pegawais = ref([])
        //state pegawai
        const pegawai = reactive({
            id: '',
            id_pegawai: '',
            nama_pegawai: '',
            alamat_pegawai: '',
            email_pegawai: '',
            password_pegawai: '',
            telepon_pegawai: ''
        })

        //state validation
        const validation = ref([])
        //vue router

        const router = useRouter()
        const route = useRoute()

        onMounted(() => {
            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/pegawais/${route.params.id}`)
            .then(response => {
                pegawai.id= response.data.data.id
                pegawai.id_pegawai= response.data.data.id_pegawai
                pegawai.nama_pegawai= response.data.data.nama_pegawai
                pegawai.alamat_pegawai= response.data.data.alamat_pegawai
                pegawai.email_pegawai= response.data.data.email_pegawai
                pegawai.password_pegawai = response.data.data.password_pegawai
                pegawai.telepon_pegawai= response.data.data.telepon_pegawai
                
            }).catch(error => {
                console.log(error.response.data)
            })

            axios.get('http://localhost:8000/api/pegawais/')
            .then(response => {
            //assign state posts with response data
            pegawais.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })

        })

        //method update
        function update() {
            let id = pegawai.id
            let id_pegawai = pegawai.id_pegawai
            let nama_pegawai = pegawai.nama_pegawai
            let alamat_pegawai = pegawai.alamat_pegawai
            let email_pegawai = pegawai.email_pegawai
            let password_pegawai = pegawai.password_pegawai
            let telepon_pegawai = pegawai.telepon_pegawai
            axios.put(`http://localhost:8000/api/pegawais/${route.params.id}`, {
                id: id,
                id_pegawai: id_pegawai,
                nama_pegawai: nama_pegawai,
                alamat_pegawai: alamat_pegawai,
                email_pegawai: email_pegawai,
                password_pegawai: password_pegawai,
                telepon_pegawai: telepon_pegawai
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'pegawai.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            pegawai,
            validation,
            router,
            update
        }
    }
}
</script>
<style>

</style>