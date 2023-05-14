<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH POST</h4>
                        <hr>
                        <form @submit.prevent="store">

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="member.id" 
                                    placeholder="Masukkan id">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div>


                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Member</label>
                                <input class="form-control" v-model="member.id_member" 
                                    placeholder="Masukkan id Member">
                                
                                <div v-if="validation.id_member" class="mt-2 alert alert-danger">
                                    {{ validation.id_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label class="form-label">Nama
                                    Member</label>
                                <input type="text" class="form-control" v-model="member.nama_member"
                                    placeholder="Masukkan nama member">
                               
                                <div v-if="validation.nama_member" class="mt-2 alert alert-danger">
                                    {{ validation.nama_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Alamat</label>
                                <input class="form-control" v-model="member.alamat_member" 
                                    placeholder="Masukkan alamat">
                                
                                <div v-if="validation.alamat_member" class="mt-2 alert alert-danger">
                                    {{ validation.alamat_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Telepon</label>
                                <input class="form-control" type="number" v-model="member.telepon_member"
                                    placeholder="Masukkan nomor telepon">
                               
                                <div v-if="validation.telepon_member" class="mt-2 alert alert-danger">
                                    {{ validation.telepon_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Email</label>
                                <input class="form-control" v-model="member.email_member" 
                                    placeholder="Masukkan email">
                                
                                <div v-if="validation.email_member" class="mt-2 alert alert-danger">
                                    {{ validation.email_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Lahir</label>
                                <input class="form-control" v-model="member.lahir_member"
                                    placeholder="Masukkan Tanggal Lahir">
                               
                                <div v-if="validation.lahir_member" class="mt-2 alert alert-danger">
                                    {{ validation.lahir_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Password</label>
                                <input class="form-control" v-model="member.password_member" 
                                    placeholder="Masukkan Password">
                                
                                <div v-if="validation.password_member" class="mt-2 alert alert-danger">
                                    {{ validation.password_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">jumlah deposit kelas</label>
                                <input class="form-control" v-model="member.jumlah_deposit_kelas"
                                    placeholder="Masukkan Deposit Kelas">
                               
                                <div v-if="validation.jumlah_deposit_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.jumlah_deposit_kelas[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">jumlah_deposit_reguler</label>
                                <input class="form-control" v-model="member.jumlah_deposit_reguler" 
                                    placeholder="Masukkan deposit reguler">
                                
                                <div v-if="validation.jumlah_deposit_reguler" class="mt-2 alert alert-danger">
                                    {{ validation.jumlah_deposit_reguler[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">masa_kadaluarsa_member</label>
                                <input class="form-control" v-model="member.masa_kadaluarsa_member"
                                    placeholder="Masukkan kadaluwarsa member">
                               
                                <div v-if="validation.masa_kadaluarsa_member" class="mt-2 alert alert-danger">
                                    {{ validation.masa_kadaluarsa_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">masa kadaluwarsa deposit</label>
                                <input class="form-control" v-model="member.masa_kadaluarsa_deposit"
                                    placeholder="Masukkan kadaluwarsa deposit">
                               
                                <div v-if="validation.masa_kadaluarsa_deposit" class="mt-2 alert alert-danger">
                                    {{ validation.masa_kadaluarsa_deposit[0] }}
                                </div>
                            </div>

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
        //state member
        const member = reactive({
            id: '',
            id_member: '',
            nama_member: '',
            alamat_member: '',
            telepon_member: '',
            email_member: '',
            lahir_member: '',
            password_member: '',
            jumlah_deposit_kelas: '',
            jumlah_deposit_reguler: '',
            masa_kadaluarsa_member: '',
            masa_kadaluarsa_deposit: ''
        })
        //state validation
        const validation = ref([])
        //vue router
        const router = useRouter()
        //method store
        function store() {
            let id = member.id
            let id_member = member.id_member
            let nama_member = member.nama_member
            let alamat_member = member.alamat_member
            let telepon_member = member.telepon_member
            let email_member = member.email_member
            let lahir_member = member.lahir_member
            let password_member = member.password_member
            let jumlah_deposit_kelas = member.jumlah_deposit_kelas
            let jumlah_deposit_reguler = member.jumlah_deposit_reguler
            let masa_kadaluarsa_member = member.masa_kadaluarsa_member
            let masa_kadaluarsa_deposit = member.masa_kadaluarsa_deposit
            axios.post('http://localhost:8000/api/members', {
                id: id,
                id_member: id_member,
                nama_member: nama_member,
                alamat_member: alamat_member,
                telepon_member: telepon_member,
                email_member: email_member,
                lahir_member: lahir_member,
                password_member: password_member,
                jumlah_deposit_kelas : jumlah_deposit_kelas ,
                jumlah_deposit_reguler : jumlah_deposit_reguler,
                masa_kadaluarsa_member : masa_kadaluarsa_member,
                masa_kadaluarsa_deposit : masa_kadaluarsa_deposit
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'member.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            member,
            validation,
            router,
            store
        }
    }
}
</script>
<style>

</style>