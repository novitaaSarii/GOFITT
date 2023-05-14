<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH INSTRUKTUR</h4>
                        <hr>
                        <form @submit.prevent="store">

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="instruktur.id" 
                                    placeholder="Masukkan id Instruktur">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Instruktur</label>
                                <input class="form-control" v-model="instruktur.id_instruktur" 
                                    placeholder="Masukkan id Instruktur">
                                
                                <div v-if="validation.id_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.id_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="form-label">Nama</label>
                                <input type="text" class="form-control" v-model="instruktur.nama_instruktur"
                                    placeholder="Masukkan nama instruktur">
                               
                                <div v-if="validation.nama_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.nama_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Alamat</label>
                                <input class="form-control" v-model="instruktur.alamat_instruktur" 
                                    placeholder="Masukkan alamat">
                                
                                <div v-if="validation.alamat_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.alamat_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Telepon</label>
                                <input class="form-control" type="number" v-model="instruktur.telepon_instruktur"
                                    placeholder="Masukkan nomor telepon">
                               
                                <div v-if="validation.telepon_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.telepon_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Email</label>
                                <input class="form-control" v-model="instruktur.email_instruktur" 
                                    placeholder="Masukkan Email">
                                
                                <div v-if="validation.email_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.email_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Password</label>
                                <input class="form-control" v-model="instruktur.password_instruktur" 
                                    placeholder="Masukkan Password">
                                
                                <div v-if="validation.password_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.password_instruktur[0] }}
                                </div>
                            </div>


                            <button type="submit" class="btn btnprimary">SIMPAN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
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
        //method store
        function store() {
            let id = instruktur.id
            let id_instruktur = instruktur.id_instruktur
            let nama_instruktur = instruktur.nama_instruktur
            let alamat_instruktur = instruktur.alamat_instruktur
            let telepon_instruktur = instruktur.telepon_instruktur
            let email_instruktur = instruktur.email_instruktur
            
            let password_instruktur = instruktur.password_instruktur
            
        
            axios.post('http://localhost:8000/api/instrukturs', {
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
            store
        }
    }
}
</script>
<style>

</style>