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
                        <!-- <label class="form-label">SEACRH</label>
                        <input type="text" class="form-control" v-model="search" placeholder="Seacrh" name = 'search' required>

                        <div class="input-group-append">
                                            <button class="input-group-text btn btn-primary"> Cari </button>
                                        </div> -->

                        <router-link :to="{ name: 'member.create' }" class="btn btn-md btn-success">TAMBAH
                            MEMBER</router-link>

                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Id Member</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Telepon </th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Tanggal Lahir</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Jumlah Deposit Kelas</th>
                                    <th scope="col">Jumlah Deposit Reguler</th>
                                    <th scope="col">Kadaluwarsa Member</th>
                                    <th scope="col">Kadaluwarsa Deposit</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(member, id) in members" :key="id">
                                    <td>{{ member.id }}</td>
                                    <td>{{ member.id_member }}</td>
                                    <td>{{ member.nama_member }}</td>
                                    <td>{{ member.alamat_member }}</td>
                                    <td>{{ member.telepon_member }}</td>
                                    <td>{{ member.email_member }}</td>
                                    <td>{{ member.lahir_member }}</td>

                                    <td>{{ member.password_member }}</td>
                                    <td>{{ member.jumlah_deposit_kelas }}</td>
                                    <td>{{ member.jumlah_deposit_reguler }}</td>
                                    <td>{{ member.masa_kadaluarsa_member }}</td>
                                    <td>{{ member.masa_kadaluarsa_deposit }}</td>

                                    <td class="text-center">

                                        <router-link :to="{
                                            name: 'member.edit',
                                            params: { id: member.id }
                                        }" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click="postDelete(member.id)"
                                            class="btn btn-sm btn-danger ml1">DELETE</button>
                                        <router-link :to="{
                                                name: 'member.card',
                                                params: { id: member.id }
                                            }" class="btn btn-sm btn-primary mr-1">KARTU</router-link>

                                        <button @click="resetPassword(member.id)" class="btn btn-sm btn-danger ml1">Reset
                                            Password</button>

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
        let members = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/members')
                .then(response => {
                    //assign state posts with response data
                    members.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        function postDelete(id) {

            //delete data post by ID
            axios.delete("http://localhost:8000/api/members/" + id)
                .then(() => {

                    //splice posts 
                    members.value.splice(members.value.indexOf(id), 1);
                    window.location.reload();

                }).catch(error => {
                    console.log(error.response.data)
                });

        }

        function resetPassword(id) {
            axios.put("http://localhost:8000/api/members/resetPassword/" + id, {
            }).then(() => {
                window.location.reload();
            }).catch(error => {
                console.log(error.response.data)
            });
        }

        //return
        return {
            members,
            postDelete,
            resetPassword
        }
    }
}
</script>
<style></style>
