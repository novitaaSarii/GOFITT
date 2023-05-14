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
                        <router-link :to="{ name: 'deposit_reguler.create' }" class="btn btn-md btn-success">Tambah
                           Deposit Reguler</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Deposit Reguler</th>
                                    <th scope="col">Id Promo</th>
                                    <th scope="col">Id Member</th>
                                    <th scope="col">Nama Member</th>
                                    <th scope="col">Tanggal Transaksi Deposit</th>
                                    <th scope="col">Bonus Deposit</th>
                                    <th scope="col">Sisa Deposit</th>
                                    <th scope="col">Id Pegawai</th>
                                    <th scope="col">Nama Pegawai</th>
                                    <th scope="col">Total Deposit</th>
                                    <th scope="col">Aksi </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(deposit_reguler, id) in deposit_regulers" :key="id">
                                    <td>{{ deposit_reguler.id}}</td>
                                    <td>{{ deposit_reguler.id_deposit_regulers}}</td>
                                    <td>{{ deposit_reguler.id_promo}}</td>
                                    <td>{{ deposit_reguler.id_member}}</td>
                                    <td>{{ deposit_reguler.nama_member}}</td>
                                    <td>{{ deposit_reguler.tanggal_transaksi_deposit}}</td>
                                    <td>{{ deposit_reguler.bonus_deposit}}</td>
                                    <td>{{ deposit_reguler.sisa_deposit}}</td>
                                    <td>{{ deposit_reguler.id_pegawai}}</td>
                                    <td>{{ deposit_reguler.nama_pegawai}}</td>
                                    <td>{{ deposit_reguler.total_deposit}}</td>
                                    <td>{{ deposit_reguler.telepon_pegawai}}</td>

                                    <!-- <td class="text-center">
                                        
                                        <router-link :to="{ name:'depositReguler.edit', 
                                        params: { id: deposit_reguler.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                    <button @click="postDelete(deposit_reguler.id)" class="btn btn-sm btn-danger ml1">DELETE</button>
                                    </td> -->
                                    

                                    <td class="text-center">
                                        <router-link :to="{
                                                name: 'deposit_reguler.cetakStruk',
                                                params: { id: deposit_reguler.id }
                                            }" class="btn btn-sm btn-primary mr-1">Struk Deposit Reguler</router-link>
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
        let deposit_regulers = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/deposit_regulers')
                .then(response => {
                    //assign state posts with response data
                    deposit_regulers.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        // function postDelete(id) {
            
        //     //delete data post by ID
        //     axios.delete("http://localhost:8000/api/deposit_regulers/" + id)
        //     .then(() => {
                       
        //         //splice posts 
        //         pegawais.value.splice(deposit_regulers.value.indexOf(id), 1);
        //         window.location.reload();
         
        //      }).catch(error => {
        //          console.log(error.response.data)
        //      });
         
        //  }
        //return
        return {
            deposit_regulers,
            // postDelete
        }
    }
}
</script>
<style></style>
