<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Struk Deposit Kelas</h4>
                        <hr>
                        <form>
                            <div>
                                <p>GoFit</p>
                                <p>Jl. Centralpark No. 10 Yogyakarta</p>
                            </div>
                            <div>
                                <p>Deposit Kelas</p>
                                <p>Member ID : {{ deposit_kelas.id_member }}</p>
                                <p>Nama : {{ deposit_kelas.nama_member }}</p>
                                <p>Deposit : {{ deposit_kelas.deposit }}</p>
                                <p>Jenis Kelas : {{ deposit_kelas.nama_kelas}}</p>

                                <p>Total Deposit Kelas: {{ deposit_kelas.total_deposit_kelas }}</p>
                                <p>Berlaku sampai dengan : {{ deposit_kelas.masa_berlaku }}</p>
                                <!-- <p>Bonus Deposit : {{ member.telepon_member }}</p> -->

                                <button @click="cetakStruk()" class="btn btn-sm btn-danger ml1">Cetak Struk</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import { onMounted, reactive, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  export default {

    setup() {
      //reactive state
      let deposit_kelass = ref([])

    const deposit_kelas = reactive({
        id_member : '',
        nama_member : '',
        deposit : '',
        nama_kelas : '',
        // sisa_deposit : '',
        total_deposit_kelas : '',
        masa_berlaku : ''
    })

      const router = useRouter()
      const route = useRoute()
      //mounted
      onMounted(() => {
        //get API from Laravel Backend
        axios.get(`http://localhost:8000/api/deposit_kelas/${route.params.id}`)
          .then(response => {
            //assign state posts with response data
            deposit_kelas.id_member = response.data.data.id_member
            deposit_kelas.nama_member = response.data.data.nama_member
            deposit_kelas.deposit = response.data.data.deposit
            deposit_kelas.nama_kelas = response.data.data.nama_kelas
            
            deposit_kelas.total_deposit_kelas = response.data.data.total_deposit_kelas
            deposit_kelas.masa_berlaku = response.data.data.masa_berlaku
          }).catch(error => {
            console.log(error.response.data)
          })

          axios.get('http://localhost:8000/api/deposit_kelas/')
            .then(response => {
            //assign state posts with response data
            deposit_kelass.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })
      })

      function cetakStruk() {
            window.print()
        }

      //return
      return {
        deposit_kelas,
        cetakStruk,
        router,
        route
      }
  
     
    }
  }
  </script>
  <style>
  
  </style>