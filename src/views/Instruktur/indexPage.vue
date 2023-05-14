<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <div class="input-group">
                                        <input type="text" class="form-control" name="cari"
                                        placeholder="Cari Data Member" value="">
                                        <div class="input-group-append">
                                            <button class="input-group-text btn btn-primary"> Cari </button>
                                        </div>
                                    </div>
                                    <br>
                        <router-link :to="{ name: 'instruktur.create' }" class="btn btn-md btn-success">TAMBAH
                            INSTRUKTUR</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Instruktur</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Telepon </th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Aksi</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(instruktur, id) in instrukturs" :key="id">
                                    <td>{{ instruktur.id}}</td>
                                    <td>{{ instruktur.id_instruktur}}</td>
                                    <td>{{ instruktur.nama_instruktur }}</td>
                                    <td>{{ instruktur.alamat_instruktur }}</td>
                                    <td>{{ instruktur.telepon_instruktur}}</td>
                                    <td>{{ instruktur.email_instruktur}}</td>
                                    <td>{{ instruktur.password_instruktur}}</td>
                                    <td class="text-center">

                                        <router-link :to="{ name:'instruktur.edit', 
                                        params: { id: instruktur.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <button @click="postDelete(instruktur.id)" class="btn btn-sm btn-danger ml1">DELETE</button>
                                
                                        
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
        let instrukturs = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/instrukturs')
                .then(response => {
                    //assign state posts with response data
                    instrukturs.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        function postDelete(id) {
            
            //delete data post by ID
            axios.delete("http://localhost:8000/api/instrukturs/" + id)
            .then(() => {
                       
                //splice posts 
                instrukturs.value.splice(instrukturs.value.indexOf(id), 1);
                window.location.reload();
             }).catch(error => {
                 console.log(error.response.data)
             });
         
         }
        //return
        return {
            instrukturs,
            postDelete
        }
    }
}
</script>
<style></style>
