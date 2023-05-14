<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>Struk Deposit Reguler</h4>
                        <hr>
                        <form>
                            <div>
                                <p>GoFit</p>
                                <p>Jl. Centralpark No. 10 Yogyakarta</p>
                            </div>
                            <div>
                                <p>Member</p>
                                <p>Member ID : {{ deposit_reguler.id_member }}</p>
                                <p>Nama : {{ deposit_reguler.nama_member }}</p>
                                <p>Deposit : {{ deposit_reguler.deposit }}</p>
                                <p>Bonus Deposit : {{ deposit_reguler.bonus_deposit }}</p>

                                <p>Sisa Deposit : {{ deposit_reguler.sisa_deposit }}</p>
                                <p>Total Deposit : {{ deposit_reguler.total_deposit }}</p>
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
      let deposit_regulers = ref([])

    const deposit_reguler = reactive({
        id_member : '',
        nama_member : '',
        deposit : '',
        bonus_deposit : '',
        sisa_deposit : '',
        total_deposit : ''
    })

      const router = useRouter()
      const route = useRoute()
      //mounted
      onMounted(() => {
        //get API from Laravel Backend
        axios.get(`http://localhost:8000/api/deposit_regulers/${route.params.id}`)
          .then(response => {
            //assign state posts with response data
            deposit_reguler.id_member = response.data.data.id_member
            deposit_reguler.nama_member = response.data.data.nama_member
            deposit_reguler.deposit = response.data.data.deposit
            deposit_reguler.bonus_deposit = response.data.data.bonus_deposit
            deposit_reguler.sisa_deposit = response.data.data.sisa_deposit
            deposit_reguler.total_deposit = response.data.data.total_deposit
          }).catch(error => {
            console.log(error.response.data)
          })

          axios.get('http://localhost:8000/api/deposit_regulers/')
            .then(response => {
            //assign state posts with response data
            deposit_regulers.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })
      })

      function cetakStruk() {
            window.print()
        }

        
      //return
      return {
        deposit_reguler,
        cetakStruk,
        router,
        route
      }
  
     
    }
  }
  </script>
  <style>
  
  </style>