<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH JADWAL UMUM</h4>
                        <hr>
                        <form @submit.prevent="store">

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Jadwal Umum</label>
                                <input class="form-control" v-model="jadwal_umum.id" 
                                    placeholder="Masukkan id Jadwa Umum">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Kelas</label>
                                <input class="form-control" v-model="jadwal_umum.id_kelas" 
                                    placeholder="Masukkan id Kelas">
                                
                                <div v-if="validation.id_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.id_kelas[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Instruktur</label>
                                <input class="form-control" v-model="jadwal_umum.id_instruktur" 
                                    placeholder="Masukkan id Instruktur">
                                
                                <div v-if="validation.id_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.id_instruktur[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Hari</label>
                                <input class="form-control" v-model="jadwal_umum.hari_jadwal_umum"
                                    placeholder="Masukkan hari">
                               
                                <div v-if="validation.hari_jadwal_umum" class="mt-2 alert alert-danger">
                                    {{ validation.hari_jadwal_umum[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Waktu</label>
                                <input class="form-control" v-model="jadwal_umum.waktu" 
                                    placeholder="Masukkan Waktu">
                                
                                <div v-if="validation.waktu" class="mt-2 alert alert-danger">
                                    {{ validation.waktu[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Jenis Kelas</label>
                                <input class="form-control" v-model="jadwal_umum.jenis_kelas" 
                                    placeholder="Masukkan Jenis Kelas">
                                
                                <div v-if="validation.jenis_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.jenis_kelas[0] }}
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
        //state jadwal_umum
        const jadwal_umum = reactive({
            id: '',
            id_kelas: '',
            id_instruktur: '',
            hari_jadwal_umum: '',
            waktu: '',
            jenis_kelas: ''
            
        })
        //state validation
        const validation = ref([])
        //vue router
        const router = useRouter()
        //method store
        function store() {
            let id = jadwal_umum.id
            let id_kelas = jadwal_umum.id_kelas
            let id_instruktur = jadwal_umum.id_instruktur
            let hari_jadwal_umum = jadwal_umum.hari_jadwal_umum
            let waktu = jadwal_umum.waktu 
            let jenis_kelas = jadwal_umum.jenis_kelas
            
        
            axios.post('http://localhost:8000/api/jadwal_umums', {
                id: id,
                id_kelas: id_kelas,
                id_instruktur: id_instruktur,
                hari_jadwal_umum: hari_jadwal_umum,
                waktu: waktu,
                jenis_kelas: jenis_kelas,
                
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'jadwal_umum.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            jadwal_umum,
            validation,
            router,
            store
        }
    }
}
</script>
<style>

</style>