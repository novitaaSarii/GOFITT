<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        
                        <h4>Konfirmasi Izin</h4>
                        <hr>
                        <form @submit.prevent="update">
                            <div class="form-group mb-3">
                                <p>Id : {{ izin_instruktur.id}}</p>
                                
                             <!-- <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <p>Id Instruktur : {{ izin_instruktur.id_instruktur}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.id_kelas" 
                                    placeholder="Masukkan id Kelas">
                                
                                <div v-if="validation.id_izin_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.id_kelas[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <p> Id Jadwal Harian : {{ izin_instruktur.id_jadwal_harian}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.id_instruktur" 
                                    placeholder="Masukkan id Instruktur">
                                
                                <div v-if="validation.id_izin_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.id_instruktur[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <p>Nama Instruktur : {{ izin_instruktur.nama_instruktur}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.hari_izin_instruktur"
                                    placeholder="Masukkan hari">
                               
                                <div v-if="validation.hari" class="mt-2 alert alert-danger">
                                    {{ validation.hari_izin_instruktur[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <p>Tanggal Izin: {{ izin_instruktur.tanggal_izin}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.waktu" 
                                    placeholder="Masukkan Waktu">
                                
                                <div v-if="validation.waktu" class="mt-2 alert alert-danger">
                                    {{ validation.waktu[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <p>Keterangan Izin: {{ izin_instruktur.keterangan_izin}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.jenis_kelas" 
                                    placeholder="Masukkan Jenis Kelas">
                                
                                <div v-if="validation.password_izin_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.jenis_kelas[0] }}
                                </div> -->
                            </div>
                            
                            <div class="form-group mb-3">
                                <p>Sesi Izin: {{ izin_instruktur.sesi_izin}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.jenis_kelas" 
                                    placeholder="Masukkan Jenis Kelas">
                                
                                <div v-if="validation.password_izin_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.jenis_kelas[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <p>Id Pegawai: {{ izin_instruktur.id_pegawai}}</p>
                                <!-- <input class="form-control" v-model="izin_instruktur.jenis_kelas" 
                                    placeholder="Masukkan Jenis Kelas">
                                
                                <div v-if="validation.password_izin_instruktur" class="mt-2 alert alert-danger">
                                    {{ validation.jenis_kelas[0] }}
                                </div> -->
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Status</label>
                                <select class="form-control" v-model="izin_instruktur.status" 
                                > 
                                
                                <div v-if="validation.status" class="mt-2 alert alert-danger">
                                    {{ validation.status[0] }}
                                </div>
                                <!-- <option value="" disabled selected hidden>
                                    
                                  </option> -->
                                  <option value="Diizinkan">Diizinkan</option>
                                  <option value="Tidak Diizinkan">Tidak Diizinkan</option>
                                </select>
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
        
        let izin_instrukturs = ref([])
        //state instruktur
        const izin_instruktur = reactive({
            id: '',
            id_instruktur: '',
            id_jadwal_harian: '',
            nama_instruktur: '',
            tanggal_izin: '',
            keterangan_izin: '',
            sesi_izin: '',
            id_pegawai: '',
            status: ''
        })

        //state validation
        const validation = ref([])
        //vue router

        const router = useRouter()
        const route = useRoute()

        onMounted(() => {
            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/izin_instrukturs/${route.params.id}`)
            .then(response => {

                izin_instruktur.id= response.data.data.id
                izin_instruktur.id_instruktur= response.data.data.id_instruktur
                izin_instruktur.id_jadwal_harian= response.data.data.id_jadwal_harian
                izin_instruktur.nama_instruktur= response.data.data.nama_instruktur
                izin_instruktur.tanggal_izin= response.data.data.tanggal_izin
                izin_instruktur.keterangan_izin= response.data.data.keterangan_izin
                izin_instruktur.sesi_izin= response.data.data.sesi_izin
                izin_instruktur.id_pegawai= response.data.data.id_pegawai
                izin_instruktur.status= response.data.data.status
                
            }).catch(error => {
                console.log(error.response.data)
            })

            axios.get('http://localhost:8000/api/izin_instrukturs/')
            .then(response => {
            //assign state posts with response data
            izin_instrukturs.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })

        })

        //method update
        function update() {
            let id = izin_instruktur.id
            let id_instruktur = izin_instruktur.id_instruktur
            let id_jadwal_harian = izin_instruktur.id_jadwal_harian
            let nama_instruktur = izin_instruktur.nama_instruktur
            let tanggal_izin = izin_instruktur.tanggal_izin
            let keterangan_izin = izin_instruktur.keterangan_izin
            let sesi_izin = izin_instruktur.sesi_izin
            let id_pegawai = izin_instruktur.id_pegawai
            let status = izin_instruktur.status
            
            axios.put(`http://localhost:8000/api/izin_instrukturs/${route.params.id}`, {
                id: id,
                id_instruktur: id_instruktur,
                id_jadwal_harian: id_jadwal_harian,
                nama_instruktur: nama_instruktur,
                tanggal_izin: tanggal_izin,
                keterangan_izin: keterangan_izin,
                sesi_izin: sesi_izin,
                id_pegawai: id_pegawai,
                status: status
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'izin_instruktur.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            izin_instruktur,
            validation,
            router,
            update
        }
    }
}
</script>
<style>

</style>