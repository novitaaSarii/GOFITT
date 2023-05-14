<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Struk Aktivasi</h4>
                        <hr>
                        <form>
                            <div>
                                <p>GoFit</p>
                                <p>Jl. Centralpark No. 10 Yogyakarta</p>
                            </div>
                            <div>
                                <p>Deposit Kelas</p>
                                <p>Member ID : {{ aktivasi_tahunan.id_member }}</p>
                                <p>Nama : {{ aktivasi_tahunan.nama_member }}</p>
                                <p>Aktivasi Tahunan : {{ aktivasi_tahunan.biaya_aktivasi }}</p>
                                <p>Masa Aktif Member: {{ aktivasi_tahunan.masa_aktif }}</p>

                                <button @click="cetakStruk()" class="btn btn-sm btn-danger ml1">Cetak Struk</button>

                                <!-- <p>Total Deposit Kelas: {{ aktivasi_tahunan.total_aktivasi_tahunan }}</p>
                                <p>Berlaku sampai dengan : {{ aktivasi_tahunan.masa_berlaku }}</p> -->
                                <!-- <p>Bonus Deposit : {{ member.telepon_member }}</p> -->
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
      let aktivasi_tahunans = ref([])

    const aktivasi_tahunan = reactive({
       
            id_member: '',
            nama_member: '',
            biaya_aktivasi: '',
            masa_aktif: ''
    })

      const router = useRouter()
      const route = useRoute()
      //mounted
      onMounted(() => {
        //get API from Laravel Backend
        axios.get(`http://localhost:8000/api/aktivasi_tahunans/${route.params.id}`)
          .then(response => {
            //assign state posts with response data
            aktivasi_tahunan.id_member = response.data.data.id_member
            aktivasi_tahunan.nama_member = response.data.data.nama_member
            aktivasi_tahunan.biaya_aktivasi = response.data.data.biaya_aktivasi
            aktivasi_tahunan.masa_aktif = response.data.data.masa_aktif
            
          }).catch(error => {
            console.log(error.response.data)
          })

          axios.get('http://localhost:8000/api/aktivasi_tahunans/')
            .then(response => {
            //assign state posts with response data
            aktivasi_tahunans.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })
      })

      function cetakStruk() {
            window.print()
        }

      //return
      return {
        aktivasi_tahunan,
        cetakStruk,
        router,
        route
      }
  
     
    }
  }
  </script>
  <style>
  
  </style>