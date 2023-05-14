<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <label class="form-label">SEACRH</label>
                                <input type="text" class="form-control" v-model="search"
                                    placeholder="Seacrh" required>
                        <router-link :to="{ name: 'pegawai.create' }" class="btn btn-md btn-success">TAMBAH
                            PEGAWAI</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Pegawai</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Telepon </th>
                                    <th scope="col">Aksi </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(pegawai, id) in pegawais" :key="id">
                                    <td>{{ pegawai.id}}</td>
                                    <td>{{ pegawai.id_pegawai}}</td>
                                    <td>{{ pegawai.nama_pegawai }}</td>
                                    <td>{{ pegawai.alamat_pegawai }}</td>
                                    <td>{{ pegawai.email_pegawai}}</td>
                                    <td>{{ pegawai.password_pegawai}}</td>
                                    <td>{{ pegawai.telepon_pegawai}}</td>

                                    <td class="text-center">
                                        
                                        <router-link :to="{ name:'pegawai.edit', 
                                        params: { id: pegawai.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <button @click="postDelete(pegawai.id)" class="btn btn-sm btn-danger ml1">DELETE</button>
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
        let pegawais = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/pegawais')
                .then(response => {
                    //assign state posts with response data
                    pegawais.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        function postDelete(id) {
            
            //delete data post by ID
            axios.delete("http://localhost:8000/api/pegawais/" + id)
            .then(() => {
                       
                //splice posts 
                pegawais.value.splice(pegawais.value.indexOf(id), 1);
                window.location.reload();
         
             }).catch(error => {
                 console.log(error.response.data)
             });
         
         }
        //return
        return {
            pegawais,
            postDelete
        }
    }
}
</script>
<style></style>
