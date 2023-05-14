<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        
                        <h4>EDIT JADWAL HARIAN</h4>
                        <hr>
                        <form @submit.prevent="update">

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="jadwal_harian.id" 
                                    placeholder="Masukkan id">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Jadwal Harian</label>
                                <input class="form-control" v-model="jadwal_harian.id_jadwal_harian" 
                                    placeholder="Masukkan id Jadwal Harian">
                                
                                <div v-if="validation.id_jadwal_harian" class="mt-2 alert alert-danger">
                                    {{ validation.id_jadwal_harian[0] }}
                                </div>
                            </div>


                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Pegawai</label>
                                <input class="form-control" v-model="jadwal_harian.id_pegawai" 
                                    placeholder="Masukkan id Pegawai">
                                
                                <div v-if="validation.id_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.id_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Kelas</label>
                                <input class="form-control" v-model="jadwal_harian.id_kelas" 
                                    placeholder="Masukkan id Kelas">
                                
                                <div v-if="validation.id_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.id_kelas[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal</label>
                                <input class="form-control" type="date" v-model="jadwal_harian.tanggal"
                                    placeholder="Masukkan tanggal">
                               
                                <div v-if="validation.tanggal" class="mt-2 alert alert-danger">
                                    {{ validation.tanggal[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Hari Jadwal Harian</label>
                                <select class="form-control" v-model="jadwal_harian.hari_jadwal_harian" 
                                    placeholder="Masukkan Hari Jadwal Harian">
                                
                                <div v-if="validation.hari_jadwal_harian" class="mt-2 alert alert-danger">
                                    {{ validation.hari_jadwal_harian[0] }}
                                </div>
                                <option value="" disabled selected hidden>
                                      Hari
                                  </option>
                                  <option value="Senin">Senin</option>
                                  <option value="Selasa">Selasa</option>
                                  <option value="Rabu">Rabu</option>
                                  <option value="Kamis">Kamis</option>
                                  <option value="Jumat">Jumat</option>
                                  <option value="Sabtu">Sabtu</option>
                                  <option value="Minggu">Minggu</option>
                                </select>

                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Waktu</label>
                                <input class="form-control" v-model="jadwal_harian.waktu" 
                                    placeholder="Masukkan Waktu">
                                
                                <div v-if="validation.waktu" class="mt-2 alert alert-danger">
                                    {{ validation.waktu[0] }}
                                </div>
                            </div>
                            
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Jenis Kelas</label>
                                <input class="form-control" v-model="jadwal_harian.jenis_kelas" 
                                    placeholder="Masukkan jenis kelas">
                                
                                <div v-if="validation.jenis_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.jenis_kelas[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Keterangan Kelas</label>
                                <input class="form-control" v-model="jadwal_harian.keterangan_kelas" 
                                    placeholder="Masukkan Keterangan">
                                
                                <div v-if="validation.keterangan_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.keterangan_kelas[0] }}
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
        
        let jadwal_harians = ref([])
        //state instruktur
        const jadwal_harian = reactive({
            id: '',
            id_jadwal_harian: '',
            id_pegawai : '',
            id_kelas : '',
            tanggal: '',
            hari_jadwal_harian: '',
            waktu : '',
            jenis_kelas : '',
            keterangan_kelas: ''
        })

        //state validation
        const validation = ref([])
        //vue router

        const router = useRouter()
        const route = useRoute()

        onMounted(() => {
            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/jadwal_harians/${route.params.id}`)
            .then(response => {

                jadwal_harian.id= response.data.data.id
                jadwal_harian.id_jadwal_harian= response.data.data.id_jadwal_harian
                jadwal_harian.id_pegawai= response.data.data.id_pegawai
                jadwal_harian.id_kelas=response.data.data.id_kelas
                jadwal_harian.tanggal= response.data.data.tanggal
                jadwal_harian.hari_jadwal_harian= response.data.data.hari_jadwal_harian
                jadwal_harian.waktu= response.data.data.waktu
                jadwal_harian.jenis_kelas= response.data.data.jenis_kelas
                jadwal_harian.keterangan_kelas= response.data.data.keterangan_kelas
                
            }).catch(error => {
                console.log(error.response.data)
            })

            axios.get('http://localhost:8000/api/jadwal_harians/')
            .then(response => {
            //assign state posts with response data
            jadwal_harians.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })

        })

        //method update
        function update() {
            let id = jadwal_harian.id
            let id_jadwal_harian = jadwal_harian.id_jadwal_harian
            let id_pegawai= jadwal_harian.id_pegawai
            let id_kelas = jadwal_harian.id_kelas
            let tanggal = jadwal_harian.tanggal
            let hari_jadwal_harian = jadwal_harian.hari_jadwal_harian
            let waktu = jadwal_harian.waktu
            let jenis_kelas = jadwal_harian.jenis_kelas
            let keterangan_kelas = jadwal_harian.keterangan_kelas
            
            axios.put(`http://localhost:8000/api/jadwal_harians/${route.params.id}`, {
                id: id,
                id_jadwal_harian: id_jadwal_harian,
                id_pegawai : id_pegawai ,
                id_kelas : id_kelas ,
                tanggal: tanggal,
                hari_jadwal_harian: hari_jadwal_harian ,
                waktu: waktu,
                jenis_kelas: jenis_kelas,
                keterangan_kelas: keterangan_kelas
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'jadwal_harian.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            jadwal_harian,
            validation,
            router,
            update
        }
    }
}
</script>
<style>

</style>