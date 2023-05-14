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
                                <label class="form-label">SEACRH</label>
                                <input type="text" class="form-control" v-model="search"
                                    placeholder="Seacrh" required>

                                    <h4>
                                        <button @click="generateJadwal()" class="btn btn-sm btn-danger ml1">Generate Jadwal</button>
                                    </h4>
                                
                            </div>
                        <!-- <router-link :to="{ name: 'jadwal_harian.create' }" class="btn btn-md btn-success">TAMBAH
                            JADWAL HARIAN</router-link> -->
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Jadwal Harian</th>
                                    <th scope="col">Id Pegawai</th>
                                    <th scope="col">Id Kelas</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Hari Jadwal Harian</th>
                                    <th scope="col">Waktu</th>
                                    <th scope="col">Jenis Kelas</th>
                                    <th scope="col">Keterangan Kelas</th>

                                    <th scope="col">Aksi</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(jadwal_harian, id) in jadwal_harians" :key="id">
                                    <td>{{ jadwal_harian.id}}</td>
                                    <td>{{ jadwal_harian.id_jadwal_harian }}</td>
                                    <td>{{ jadwal_harian.id_pegawai }}</td>
                                    <td>{{ jadwal_harian.id_kelas }}</td>
                                    <td>{{ jadwal_harian.tanggal}}</td>
                                    <td>{{ jadwal_harian.hari_jadwal_harian}}</td>

                                    <td>{{ jadwal_harian.waktu}}</td>
                                    <td>{{ jadwal_harian.jenis_kelas}}</td>
                                    <td>{{ jadwal_harian.keterangan_kelas}}</td>
                                    <td class="text-center">

                                        <router-link :to="{ name:'jadwal_harian.edit', 
                                        params: { id: jadwal_harian.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <!-- <button @click="postDelete(jadwal_harian.id)" class="btn btn-sm btn-danger ml1">DELETE</button> -->
                                
                                        
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
        let jadwal_harians = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/jadwal_harians')
                .then(response => {
                    //assign state posts with response data
                    jadwal_harians.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        function postDelete(id) {
            
            //delete data post by ID
            axios.delete("http://localhost:8000/api/jadwal_harians/" + id)
            .then(() => {
                       
                //splice posts 
                jadwal_harians.value.splice(jadwal_harians.value.indexOf(id), 1);
                window.location.reload();
         
             }).catch(error => {
                 console.log(error.response.data)
             });
         
         }
        //return
        return {
            jadwal_harians,
            postDelete
        }
    }
}
</script>
<style></style>
