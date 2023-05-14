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
                                
                            </div>
                        <router-link :to="{ name: 'jadwal_umum.create' }" class="btn btn-md btn-success">TAMBAH
                            JADWAL UMUM</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Kelas</th>
                                    <th scope="col">Id Instruktur</th>
                                    <th scope="col">Hari </th>
                                    <th scope="col">Waktu</th>
                                    <th scope="col">Jenis Kelas</th>
                                    <th scope="col">Aksi</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(jadwal_umum, id) in jadwal_umums" :key="id">
                                    <td>{{ jadwal_umum.id}}</td>
                                    <td>{{ jadwal_umum.id_kelas }}</td>
                                    <td>{{ jadwal_umum.id_instruktur }}</td>
                                    <td>{{ jadwal_umum.hari_jadwal_umum}}</td>
                                    <td>{{ jadwal_umum.waktu}}</td>
                                    <td>{{ jadwal_umum.jenis_kelas}}</td>
                                    <td class="text-center">

                                        <router-link :to="{ name:'jadwal_umum.edit', 
                                        params: { id: jadwal_umum.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <button @click="postDelete(jadwal_umum.id)" class="btn btn-sm btn-danger ml1">DELETE</button>
                                
                                        
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
        let jadwal_umums = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/jadwal_umums')
                .then(response => {
                    //assign state posts with response data
                    jadwal_umums.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        function postDelete(id) {
            
            //delete data post by ID
            axios.delete("http://localhost:8000/api/jadwal_umums/" + id)
            .then(() => {
                       
                //splice posts 
                jadwal_umums.value.splice(jadwal_umums.value.indexOf(id), 1);
                window.location.reload();
         
             }).catch(error => {
                 console.log(error.response.data)
             });
         
         }
        //return
        return {
            jadwal_umums,
            postDelete
        }
    }
}
</script>
<style></style>
