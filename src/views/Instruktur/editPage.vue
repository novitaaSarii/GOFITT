<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        
                        <h4>EDIT INSTRUKTUR</h4>
                        <hr>
                        <form @submit.prevent="update">

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="instruktur.id" 
                                    placeholder="Masukkan id Instruktur">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="instruktur.id_instruktur" 
                                    >
                                
                                <div v-if="validation.id_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.id_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="form-label">Nama</label>
                                <input type="text" class="form-control" v-model="instruktur.nama_instruktur"
                                    >
                               
                                <div v-if="validation.nama_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.nama_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Alamat</label>
                                <input class="form-control" v-model="instruktur.alamat_instruktur" 
                                    >
                                
                                <div v-if="validation.alamat_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.alamat_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Telepon</label>
                                <input class="form-control" type="number" v-model="instruktur.telepon_instruktur"
                                    >
                               
                                <div v-if="validation.telepon_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.telepon_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Email</label>
                                <input class="form-control" v-model="instruktur.email_instruktur" 
                                   >
                                
                                <div v-if="validation.email_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.email_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Password</label>
                                <input class="form-control" v-model="instruktur.password_instruktur" 
                                    >
                                
                                <div v-if="validation.password_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.password_instruktur[0] }}
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
        
        let instrukturs = ref([])
        //state instruktur
        const instruktur = reactive({
            id: '',
            id_instruktur: '',
            nama_instruktur: '',
            alamat_instruktur: '',
            telepon_instruktur: '',
            email_instruktur: '',
            password_instruktur: ''
        })

        //state validation
        const validation = ref([])
        //vue router

        const router = useRouter()
        const route = useRoute()

        onMounted(() => {
            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/instrukturs/${route.params.id}`)
            .then(response => {
                instruktur.id= response.data.data.id
                instruktur.id_instruktur= response.data.data.id_instruktur
                instruktur.nama_instruktur= response.data.data.nama_instruktur
                instruktur.alamat_instruktur= response.data.data.alamat_instruktur
                instruktur.telepon_instruktur= response.data.data.telepon_instruktur
                instruktur.email_instruktur= response.data.data.email_instruktur
                instruktur.password_instruktur= response.data.data.password_instruktur
                
            }).catch(error => {
                console.log(error.response.data)
            })

            axios.get('http://localhost:8000/api/instrukturs/')
            .then(response => {
            //assign state posts with response data
            instrukturs.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })

        })

        //method update
        function update() {
            let id = instruktur.id
            let id_instruktur = instruktur.id_instruktur
            let nama_instruktur = instruktur.nama_instruktur
            let alamat_instruktur = instruktur.alamat_instruktur
            let telepon_instruktur = instruktur.telepon_instruktur
            let email_instruktur = instruktur.email_instruktur
            
            let password_instruktur = instruktur.password_instruktur
            axios.put(`http://localhost:8000/api/instrukturs/${route.params.id}`, {
                id: id,
                id_instruktur: id_instruktur,
                nama_instruktur: nama_instruktur,
                alamat_instruktur: alamat_instruktur,
                telepon_instruktur: telepon_instruktur,
                email_instruktur: email_instruktur,
                password_instruktur: password_instruktur,
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'instruktur.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            instruktur,
            validation,
            router,
            update
        }
    }
}
</script>
<style>

</style>

