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
                        <router-link :to="{ name: 'deposit_kelas.create' }" class="btn btn-md btn-success">Tambah
                           Deposit Kelas</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Deposit Kelas</th>
                                    <th scope="col">Id Member</th>
                                    <th scope="col">Id Promo</th>
                                    <th scope="col">Nama Member</th>
                                    <th scope="col">Tanggal Deposit Kelas</th>
                                    <th scope="col">Waktu Pemvayaran</th>
                                    <th scope="col">Nama Kelas</th>
                                    <th scope="col">Total Deposit Kelas</th>
                                    <th scope="col">Masa Berlaku</th>
                                    <th scope="col">Id Pegawai</th>
                                    <th scope="col">Nama Pegawai</th>
                                    <th scope="col">Aksi </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(deposit_kelas, id) in deposit_kelas" :key="id">
                                    <td>{{ deposit_kelas.id}}</td>
                                    <td>{{ deposit_kelas.id_deposit_kelas}}</td>
                                    <td>{{ deposit_kelas.id_member}}</td>
                                    <td>{{ deposit_kelas.id_promo}}</td>
                                    <td>{{ deposit_kelas.nama_member}}</td>
                                    <td>{{ deposit_kelas.tanggal_deposit_kelas}}</td>
                                    <td>{{ deposit_kelas.waktu_pembayaran}}</td>
                                    <td>{{ deposit_kelas.nama_kelas}}</td>

                                    <td>{{ deposit_kelas.total_deposit_kelas}}</td>
                                    <td>{{ deposit_kelas.masa_berlaku}}</td>

                                    <td>{{ deposit_kelas.id_pegawai}}</td>
                                    <td>{{ deposit_kelas.nama_pegawai}}</td>
                                    

                                    <!-- <td class="text-center">
                                        
                                        <router-link :to="{ name:'depositReguler.edit', 
                                        params: { id: deposit_kelas.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <button @click="postDelete(deposit_kelas.id)" class="btn btn-sm btn-danger ml1">DELETE</button>
                                    </td> -->
                                    
                                    <td class="text-center">
                                        <router-link :to="{
                                                name: 'deposit_kelas.cetakStruk',
                                                params: { id: deposit_kelas.id }
                                            }" class="btn btn-sm btn-primary mr-1">Struk Deposit Kelas</router-link>
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
        let deposit_kelas = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/deposit_kelas')
                .then(response => {
                    //assign state posts with response data
                    deposit_kelas.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        // function postDelete(id) {
            
        //     //delete data post by ID
        //     axios.delete("http://localhost:8000/api/deposit_kelass/" + id)
        //     .then(() => {
                       
        //         //splice posts 
        //         pegawais.value.splice(deposit_kelass.value.indexOf(id), 1);
        //         window.location.reload();
         
        //      }).catch(error => {
        //          console.log(error.response.data)
        //      });
         
        //  }
        //return
        return {
            deposit_kelas,
            // postDelete
        }
    }
}
</script>
<style></style>
