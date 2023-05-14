<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH POST</h4>
                        <hr>
                        <form @submit.prevent="store">

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="pegawai.id" 
                                    placeholder="Masukkan id Pegawai">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="pegawai.id_pegawai" 
                                    placeholder="Masukkan id Pegawai">
                                
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
                                <label for="content" class="form-label">Alamat</label>
                                <input class="form-control" v-model="pegawai.alamat_pegawai" 
                                    placeholder="Masukkan alamat">
                                
                                <div v-if="validation.alamat_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.alamat_pegawai[0] }}
                                </div>
                            </div>

                            

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Email</label>
                                <input class="form-control" v-model="pegawai.email_pegawai" 
                                    placeholder="Masukkan alamat">
                                
                                <div v-if="validation.email_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.email_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Password</label>
                                <input class="form-control" v-model="pegawai.password_pegawai" 
                                    placeholder="Masukkan Password">
                                
                                <div v-if="validation.password_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.password_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Telepon</label>
                                <input class="form-control" type="number" v-model="pegawai.telepon_pegawai"
                                    placeholder="Masukkan nomor telepon">
                               
                                <div v-if="validation.telepon_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.telepon_pegawai[0] }}
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
        //method store
        function store() {
            let id = pegawai.id
            let id_pegawai = pegawai.id_pegawai
            let nama_pegawai = pegawai.nama_pegawai
            let alamat_pegawai = pegawai.alamat_pegawai
            
            let email_pegawai = pegawai.email_pegawai
            
            let password_pegawai = pegawai.password_pegawai
            let telepon_pegawai = pegawai.telepon_pegawai
        
            axios.post('http://localhost:8000/api/pegawais', {
                id : id,
                id_pegawai: id_pegawai,
                nama_pegawai: nama_pegawai,
                alamat_pegawai: alamat_pegawai,
                
                email_pegawair: email_pegawai,
                
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
            store
        }
    }
}
</script>
<style>

</style>