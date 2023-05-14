<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH AKTIVASI TAHUNAN</h4>
                        <hr>
                        <form @submit.prevent="store">


                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Aktivasi Tahunan</label>
                                <input class="form-control" v-model="aktivasi_tahunan.id_aktivasi" 
                                    placeholder="Masukkan id Aktivasi">
                                
                                <div v-if="validation.id_aktivasi_tahunans" class="mt-2 alert alert-danger">
                                    {{ validation.id_aktivasi_tahunan[0] }}
                                </div>
                            </div> -->

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Member</label>
                                <input class="form-control" v-model="aktivasi_tahunan.id_member" 
                                    placeholder="Masukkan id Member">
                                
                                <div v-if="validation.id_member" class="mt-2 alert alert-danger">
                                    {{ validation.id_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Pegawai</label>
                                <input class="form-control" v-model="aktivasi_tahunan.nama_pegawai" 
                                    placeholder="Masukkan Nama Pegawai">
                                
                                <div v-if="validation.nama_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.nama_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Pegawai</label>
                                <input class="form-control" v-model="aktivasi_tahunan.id_pegawai" 
                                    placeholder="Masukkan Id Pegawai">
                                
                                <div v-if="validation.id_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.id_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Member</label>
                                <input class="form-control" v-model="aktivasi_tahunan.nama_member" 
                                    placeholder="Masukkan nama Member">
                                
                                <div v-if="validation.nama_member" class="mt-2 alert alert-danger">
                                    {{ validation.nama_member[0] }}
                                </div>
                            </div>

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Aktivasi</label>
                                <input class="form-control" v-model="aktivasi_tahunan.tanggal_aktivasi"
                                    placeholder="Masukkan tanggal aktivasi">
                               
                                <div v-if="validation.tanggal_aktivasi" class="mt-2 alert alert-danger">
                                    {{ validation.tanggal_aktivasi[0] }}
                                </div>
                            </div> -->

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Biaya Aktivasi</label>
                                <input class="form-control" v-model="aktivasi_tahunan.biaya_aktivasi" 
                                    placeholder="Masukkan biaya aktivasi">
                                
                                <div v-if="validation.biaya_aktivasi" class="mt-2 alert alert-danger">
                                    {{ validation.biaya_aktivasi[0] }}
                                </div>
                            </div>

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Masa Aktif</label>
                                <input class="form-control" v-model="aktivasi_tahunan.	masa_aktif" 
                                    placeholder="Masukkan masa aktif">
                                
                                <div v-if="validation.masa_aktif" class="mt-2 alert alert-danger">
                                    {{ validation.masa_aktif[0] }}
                                </div>
                            </div> -->

                           

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
        //state aktivasi_tahunan
        const aktivasi_tahunan = reactive({
            
            id_member: '',
            nama_pegawai: '',
            id_pegawai: '',
            nama_member: '',
            tanggal_aktivasi: '',
            biaya_aktivasi: '',
            
            
        })
        //state validation
        const validation = ref([])
        //vue router
        const router = useRouter()
        //method store
        function store() {
            let id_member = aktivasi_tahunan.id_member
            let nama_pegawai = aktivasi_tahunan.nama_pegawai 
            let id_pegawai = aktivasi_tahunan.id_pegawai
            let nama_member = aktivasi_tahunan.nama_member 
            let biaya_aktivasi = aktivasi_tahunan.biaya_aktivasi
        
            axios.post('http://localhost:8000/api/aktivasi_tahunans', {
                id_member: id_member,
                nama_pegawai: nama_pegawai,
                id_pegawai: id_pegawai,
                nama_member: nama_member,
                
                biaya_aktivasi: biaya_aktivasi
                
                
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'aktivasi_tahunan.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            aktivasi_tahunan,
            validation,
            router,
            store
        }
    }
}
</script>
<style>

</style>