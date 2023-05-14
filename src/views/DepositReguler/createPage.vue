<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH DEPOSIT REGULER</h4>
                        <hr>
                        <form @submit.prevent="store">

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="deposit_reguler.id" 
                                    placeholder="Masukkan id">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div> -->

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Deposit Reguler</label>
                                <input class="form-control" v-model="deposit_reguler.id_deposit_regulers" 
                                    placeholder="Masukkan id Deposit Reguler">
                                
                                <div v-if="validation.id_deposit_regulers" class="mt-2 alert alert-danger">
                                    {{ validation.id_deposit_regulers[0] }}
                                </div>
                            </div> -->

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Promo</label>
                                <input class="form-control" v-model="deposit_reguler.id_promo" 
                                    placeholder="Masukkan id Promo">
                                
                                <div v-if="validation.id_promo" class="mt-2 alert alert-danger">
                                    {{ validation.id_promo[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Member</label>
                                <input class="form-control" v-model="deposit_reguler.id_member" 
                                    placeholder="Masukkan id Member">
                                
                                <div v-if="validation.id_member" class="mt-2 alert alert-danger">
                                    {{ validation.id_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Member</label>
                                <input class="form-control" v-model="deposit_reguler.nama_member" 
                                    placeholder="Masukkan nama Member">
                                
                                <div v-if="validation.nama_member" class="mt-2 alert alert-danger">
                                    {{ validation.nama_member[0] }}
                                </div>
                            </div>

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Transaksi Deposit</label>
                                <input class="form-control" v-model="deposit_reguler.tanggal_transaksi_deposit"
                                    placeholder="Masukkan tanggal_transaksi_deposit">
                               
                                <div v-if="validation.tanggal_transaksi_deposit" class="mt-2 alert alert-danger">
                                    {{ validation.tanggal_transaksi_deposit[0] }}
                                </div>
                            </div> -->

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Bonus Deposit</label>
                                <input class="form-control" v-model="deposit_reguler.bonus_deposit" 
                                    placeholder="Masukkan bonus_deposit">
                                
                                <div v-if="validation.bonus_deposit" class="mt-2 alert alert-danger">
                                    {{ validation.bonus_deposit[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Sisa Deposit</label>
                                <input class="form-control" v-model="deposit_reguler.sisa_deposit" 
                                    placeholder="Masukkan sisa_deposit">
                                
                                <div v-if="validation.sisa_deposit" class="mt-2 alert alert-danger">
                                    {{ validation.sisa_deposit[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Pegawai</label>
                                <input class="form-control" v-model="deposit_reguler.id_pegawai" 
                                    placeholder="Masukkan id pegawai">
                                
                                <div v-if="validation.id_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.id_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Pegawai</label>
                                <input class="form-control" v-model="deposit_reguler.nama_pegawai" 
                                    placeholder="Masukkan nama_pegawai">
                                
                                <div v-if="validation.nama_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.nama_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Total Deposit</label>
                                <input class="form-control" v-model="deposit_reguler.total_deposit" 
                                    placeholder="Masukkan total_deposit">
                                
                                <div v-if="validation.total_deposit" class="mt-2 alert alert-danger">
                                    {{ validation.total_deposit[0] }}
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
        //state deposit_reguler
        const deposit_reguler = reactive({
            // id: '',
            // id_deposit_regulers: '',
            id_promo: '',
            id_member: '',
            nama_member: '',
            // tanggal_transaksi_deposit: '',
            bonus_deposit: '',
            sisa_deposit: '',
            id_pegawai: '',
            nama_pegawai: '',
            total_deposit: ''
            
        })
        //state validation
        const validation = ref([])
        //vue router
        const router = useRouter()
        //method store
        function store() {
            // let id = deposit_reguler.id
            // let id_deposit_regulers = deposit_reguler.id_deposit_regulers
            let id_promo = deposit_reguler.id_promo
            let id_member = deposit_reguler.id_member
            let nama_member = deposit_reguler.nama_member 
            // let tanggal_transaksi_deposit = deposit_reguler.tanggal_transaksi_deposit
            let bonus_deposit = deposit_reguler.bonus_deposit
            let sisa_deposit = deposit_reguler.sisa_deposit
            let id_pegawai = deposit_reguler.id_pegawai
            let nama_pegawai = deposit_reguler.nama_pegawai
            let total_deposit = deposit_reguler.total_deposit
        
            axios.post('http://localhost:8000/api/deposit_regulers', {
                // id: id,
                // id_deposit_regulers: id_deposit_regulers,
                id_promo: id_promo,
                id_member: id_member,
                nama_member: nama_member,
                // tanggal_transaksi_deposit: tanggal_transaksi_deposit,
                bonus_deposit: bonus_deposit,
                sisa_deposit: sisa_deposit,
                id_pegawai: id_pegawai,
                nama_pegawai: nama_pegawai,
                total_deposit: total_deposit
                
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'deposit_reguler.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            deposit_reguler,
            validation,
            router,
            store
        }
    }
}
</script>
<style>

</style>