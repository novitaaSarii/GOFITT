<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <div class="form-group mb-3">
                                <!-- <label class="form-label">SEACRH</label>
                                <input type="text" class="form-control" v-model="search"
                                    placeholder="Seacrh" required> -->
                                
                            </div>
                        <!-- <router-link :to="{ name: 'izin_instruktur.create' }" class="btn btn-md btn-success">TAMBAH
                            JADWAL UMUM</router-link> -->
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Instruktur</th>
                                    <th scope="col">Id Jadwal Harian</th>
                                    <th scope="col">Nama Instruktur</th>
                                    <th scope="col">Tanggal Izin</th>
                                    <th scope="col">Keterangan Izin</th>
                                    <th scope="col">Sesi Izin</th>
                                    <th scope="col">Id Pegawai</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Aksi</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(izin_instruktur, id) in izin_instrukturs" :key="id">
                                    <td>{{ izin_instruktur.id}}</td>
                                    <td>{{ izin_instruktur.id_instruktur}}</td>
                                    <td>{{ izin_instruktur.id_jadwal_harian}}</td>
                                    <td>{{ izin_instruktur.nama_instruktur}}</td>
                                    <td>{{ izin_instruktur.tanggal_izin}}</td>
                                    <td>{{ izin_instruktur.keterangan_izin}}</td>
                                    <td>{{ izin_instruktur.sesi_izin}}</td>
                                    <td>{{ izin_instruktur.id_pegawai}}</td>
                                    <td>{{ izin_instruktur.status}}</td>

                                    <td class="text-center">

                                        <router-link :to="{ name:'izin_instruktur.konfirmasiIzin', 
                                        params: { id: izin_instruktur.id } }" 
                                        class="btn btn-sm btn-primary mr-1">Konfirmasi Izin</router-link>
                              
                                   </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
    setup() {
        //reactive state
        let izin_instrukturs = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/izin_instrukturs')
                .then(response => {
                    //assign state posts with response data
                    izin_instrukturs.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        // function postDelete(id) {
            
        //     //delete data post by ID
        //     axios.delete("http://localhost:8000/api/izin_instrukturs/" + id)
        //     .then(() => {
                       
        //         //splice posts 
        //         izin_instrukturs.value.splice(izin_instrukturs.value.indexOf(id), 1);
        //         window.location.reload();
         
        //      }).catch(error => {
        //          console.log(error.response.data)
        //      });
         
        //  }
        //return
        return {
            izin_instrukturs,
            // postDelete
        }
    }
}
</script>
<style></style>
