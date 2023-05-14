<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>KARTU MEMBER</h4>
                        <hr>
                        <form>
                            <div>
                                <p>GoFit</p>
                                <p>Jl. Centralpark No. 10 Yogyakarta</p>
                            </div>
                            <div>
                                <p>Member</p>
                                <p>Member ID : {{ member.id_member }}</p>
                                <p>Nama : {{ member.nama_member }}</p>
                                <p>Alamat : {{ member.alamat_member }}</p>
                                <p>Telpon : {{ member.telepon_member }}</p>
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
      let members = ref([])

    const member = reactive({
        id_member : '',
        nama_member : '',
        alamat_member : '',
        telepon_member : ''
    })

      const router = useRouter()
      const route = useRoute()
      //mounted
      onMounted(() => {
        //get API from Laravel Backend
        axios.get(`http://localhost:8000/api/members/${route.params.id}`)
          .then(response => {
            //assign state posts with response data
            member.id_member = response.data.data.id_member
            member.nama_member = response.data.data.nama_member
            member.alamat_member = response.data.data.alamat_member
            member.telepon_member = response.data.data.telepon_member
          }).catch(error => {
            console.log(error.response.data)
          })

          axios.get('http://localhost:8000/api/members/')
            .then(response => {
            //assign state posts with response data
            members.value = response.data.data
            }).catch(error => {
            console.log(error.response.data)
            })
      })


      //return
      return {
        member,
        router,
        route
      }
  
     
    }
  }
  </script>
  <style>
  
  </style>