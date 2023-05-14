<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH DEPOSIT KELAS</h4>
                        <hr>
                        <form @submit.prevent="store">

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Id</label>
                                <input class="form-control" v-model="deposit_kelas.id" 
                                    placeholder="Masukkan id">
                                
                                <div v-if="validation.id" class="mt-2 alert alert-danger">
                                    {{ validation.id[0] }}
                                </div>
                            </div> -->

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Deposit Kelas</label>
                                <input class="form-control" v-model="deposit_kelas.id_deposit_kelas" 
                                    placeholder="Masukkan id Deposit Kelas">
                                
                                <div v-if="validation.id_deposit_kelass" class="mt-2 alert alert-danger">
                                    {{ validation.id_deposit_kelass[0] }}
                                </div>
                            </div> -->
                            

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Member</label>
                                <input class="form-control" v-model="deposit_kelas.id_member" 
                                    placeholder="Masukkan id Member">
                                
                                <div v-if="validation.id_member" class="mt-2 alert alert-danger">
                                    {{ validation.id_member[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Promo</label>
                                <input class="form-control" v-model="deposit_kelas.id_promo" 
                                    placeholder="Masukkan id Promo">
                                
                                <div v-if="validation.id_promo" class="mt-2 alert alert-danger">
                                    {{ validation.id_promo[0] }}
                                </div>
                            </div>


                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Member</label>
                                <input class="form-control" v-model="deposit_kelas.nama_member" 
                                    placeholder="Masukkan nama Member">
                                
                                <div v-if="validation.nama_member" class="mt-2 alert alert-danger">
                                    {{ validation.nama_member[0] }}
                                </div>
                            </div>

                            <!-- <div class="form-group mb-3">
                                <label for="content" class="form-label">Tanggal Deposit Kelas</label>
                                <input class="form-control" v-model="deposit_kelas.tanggal_deposit_kelas"
                                    placeholder="Masukkan tanggal_deposit_kelas">
                               
                                <div v-if="validation.tanggal_deposit_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.tanggal_deposit_kelas[0] }}
                                </div>
                            </div> -->

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Waktu Pembayaran</label>
                                <input class="form-control" v-model="deposit_kelas.waktu_pembayaran" 
                                    placeholder="Masukkan waktu pembayaran">
                                
                                <div v-if="validation.waktu_pembayaran" class="mt-2 alert alert-danger">
                                    {{ validation.waktu_pembayaran[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Kelas</label>
                                <input class="form-control" v-model="deposit_kelas.nama_kelas" 
                                    placeholder="Masukkan nama kelas">
                                
                                <div v-if="validation.nama_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.nama_kelas[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Total Deposit Kelas</label>
                                <input class="form-control" v-model="deposit_kelas.total_deposit_kelas" 
                                    placeholder="Masukkan total deposit kelas">
                                
                                <div v-if="validation.total_deposit_kelas" class="mt-2 alert alert-danger">
                                    {{ validation.total_deposit_kelas[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Masa Berlaku</label>
                                <input class="form-control" v-model="deposit_kelas.masa_berlaku" 
                                    placeholder="Masukkan masa berlaku">
                                
                                <div v-if="validation.masa_berlaku" class="mt-2 alert alert-danger">
                                    {{ validation.masa_berlaku[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Id Pegawai</label>
                                <input class="form-control" v-model="deposit_kelas.id_pegawai" 
                                    placeholder="Masukkan id pegawai">
                                
                                <div v-if="validation.id_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.id_pegawai[0] }}
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Nama Pegawai</label>
                                <input class="form-control" v-model="deposit_kelas.nama_pegawai" 
                                    placeholder="Masukkan nama pegawai">
                                
                                <div v-if="validation.nama_pegawai" class="mt-2 alert alert-danger">
                                    {{ validation.nama_pegawai[0] }}
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
        //state deposit_kelas
        const deposit_kelas = reactive({
            // id: '',
            // id_deposit_kelas: '',
            id_member: '',
            id_promo: '',
            nama_member: '',
            // tanggal_transaksi_kelas: '',
            waktu_pembayaran: '',
            nama_kelas: '',
            total_deposit_kelas: '',
            masa_berlaku: '',
            id_pegawai: '',
            nama_pegawai: '',
           
            
        })
        //state validation
        const validation = ref([])
        //vue router
        const router = useRouter()
        //method store
        function store() {
            // let id = deposit_kelas.id
            // let id_deposit_kelas = deposit_kelas.id_deposit_kelas
            let id_member = deposit_kelas.id_member
            let id_promo = deposit_kelas.id_promo
            let nama_member = deposit_kelas.nama_member 
            // let tanggal_deposit_kelas = deposit_kelas.tanggal_deposit_kelas
            let waktu_pembayaran = deposit_kelas.waktu_pembayaran
            let nama_kelas = deposit_kelas.nama_kelas
            let total_deposit_kelas = deposit_kelas.total_deposit_kelas
            let masa_berlaku= deposit_kelas.masa_berlaku
            let id_pegawai = deposit_kelas.id_pegawai
            let nama_pegawai = deposit_kelas.nama_pegawai
            
        
            axios.post('http://localhost:8000/api/deposit_kelas', {
                // id: id,
                // id_deposit_kelass: id_deposit_kelas,
                id_member: id_member,
                id_promo: id_promo,
                nama_member: nama_member,
                // tanggal_deposit_kelas: tanggal_deposit_kelas,

                waktu_pembayaran: waktu_pembayaran,
                nama_kelas: nama_kelas,

                total_deposit_kelas: total_deposit_kelas,
                masa_berlaku: masa_berlaku,
                id_pegawai: id_pegawai,
                nama_pegawai: nama_pegawai,
                
                
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'deposit_kelas.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            deposit_kelas,
            validation,
            router,
            store
        }
    }
}
</script>
<style>

</style>