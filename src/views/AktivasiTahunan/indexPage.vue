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
                        <router-link :to="{ name: 'aktivasi_tahunan.create' }" class="btn btn-md btn-success">TAMBAH
                           Aktivasi Tahunan</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Aktivasi Tahunan</th>
                                    <th scope="col">Id Member</th>
                                    <th scope="col">Nama Pegawai</th>
                                    <th scope="col">Id Pegawai</th>
                                    <th scope="col">Nama Member</th>
                                    <th scope="col">Tanggal Aktivasi</th>
                                    <th scope="col">Biaya Aktivasi</th>
                                    <th scope="col">Masa Aktif</th>
                                    <!-- <th scope="col">Nama Pegawai</th>
                                    <th scope="col">Total Deposit</th> -->
                                    <th scope="col">Aksi </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(aktivasi_tahunan, id) in aktivasi_tahunans" :key="id">
                                    <td>{{ aktivasi_tahunan.id}}</td>
                                    <td>{{ aktivasi_tahunan.id_aktivasi}}</td>
                                    <td>{{ aktivasi_tahunan.id_member}}</td>
                                    <td>{{ aktivasi_tahunan.nama_pegawai}}</td>
                                    <td>{{ aktivasi_tahunan.id_pegawai}}</td>
                                    <td>{{ aktivasi_tahunan.nama_member}}</td>
                                    <td>{{ aktivasi_tahunan.tanggal_aktivasi}}</td>
                                    <td>{{ aktivasi_tahunan.biaya_aktivasi}}</td>
                                    <td>{{ aktivasi_tahunan.masa_aktif}}</td>

                                    <!-- <td class="text-center">
                                        
                                        <router-link :to="{ name:'depositReguler.edit', 
                                        params: { id: aktivasi_tahunan.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <button @click="postDelete(aktivasi_tahunan.id)" class="btn btn-sm btn-danger ml1">DELETE</button>
                                    </td> -->
                                    

                                    <td class="text-center">
                                        <router-link :to="{
                                                name: 'aktivasi_tahunan.cetakStruk',
                                                params: { id: aktivasi_tahunan.id }
                                            }" class="btn btn-sm btn-primary mr-1">Struk Aktivasi</router-link>
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
        let aktivasi_tahunans = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/aktivasi_tahunans')
                .then(response => {
                    //assign state posts with response data
                    aktivasi_tahunans.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        // function postDelete(id) {
            
        //     //delete data post by ID
        //     axios.delete("http://localhost:8000/api/aktivasi_tahunans/" + id)
        //     .then(() => {
                       
        //         //splice posts 
        //         pegawais.value.splice(aktivasi_tahunans.value.indexOf(id), 1);
        //         window.location.reload();
         
        //      }).catch(error => {
        //          console.log(error.response.data)
        //      });
         
        //  }
        //return
        return {
            aktivasi_tahunans,
            // postDelete
        }
    }
}
</script>
<style></style>
