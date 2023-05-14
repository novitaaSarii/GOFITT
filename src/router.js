//import vue router
import { createRouter, createWebHistory } from "vue-router";
//define a routes
const routes = [

  {
    path: "/login",
    name: "login",
    component: () => import("@/components/Login.vue"),
  },

  {
    path: "/",
    name: "beranda",
    component: () => import("@/components/DashboardLayout.vue"),
    children: [
      {
        path: "/member",
        name: "member.index",
        component: () => import("@/views/Member/indexPage.vue"),
      },
      {
        path: "/member/create",
        name: "member.create",
        component: () => import("@/views/Member/createPage.vue"),
      },
      {
        path: "/member/edit",
        name: "member.edit",
        component: () => import("@/views/Member/editPage.vue"),
      },
      {
        path: "/member/card",
        name: "member.card",
        component: () => import("@/views/Member/memberPage.vue"),
      },
    
      {
        path: "/pegawai",
        name: "pegawai.index",
        component: () => import("@/views/Pegawai/indexPage.vue"),
      },
      {
        path: "/pegawai/create",
        name: "pegawai.create",
        component: () => import("@/views/Pegawai/createPage.vue"),
      },
      {
        path: "/pegawai/edit",
        name: "pegawai.edit",
        component: () => import("@/views/Pegawai/editPage.vue"),
      },

      {
        path: "/instruktur",
        name: "instruktur.index",
        component: () => import("@/views/Instruktur/indexPage.vue"),
      },
      {
        path: "/instruktur/create",
        name: "instruktur.create",
        component: () => import("@/views/Instruktur/createPage.vue"),
      },
      {
        path: "/instruktur/edit",
        name: "instruktur.edit",
        component: () => import("@/views/Instruktur/editPage.vue"),
      },

      {
        path: "/jadwal_umum",
        name: "jadwal_umum.index",
        component: () => import("@/views/JadwalUmum/indexPage.vue"),
      },
      {
        path: "/jadwal_umum/create",
        name: "jadwal_umum.create",
        component: () => import("@/views/JadwalUmum/createPage.vue"),
      },
      {
        path: "/jadwal_umum/edit",
        name: "jadwal_umum.edit",
        component: () => import("@/views/JadwalUmum/editPage.vue"),
      },

      {
        path: "/deposit_reguler",
        name: "deposit_reguler.index",
        component: () => import("@/views/DepositReguler/indexPage.vue"),
      },
      {
        path: "/deposit_reguler/create",
        name: "deposit_reguler.create",
        component: () => import("@/views/DepositReguler/createPage.vue"),
      },
      {
        path: "/deposit_reguler/cetakStruk",
        name: "deposit_reguler.cetakStruk",
        component: () => import("@/views/DepositReguler/cetakStrukPage.vue"),
      },

      {
        path: "/deposit_kelas",
        name: "deposit_kelas.index",
        component: () => import("@/views/DepositKelas/indexPage.vue"),
      },
      {
        path: "/deposit_kelas/create",
        name: "deposit_kelas.create",
        component: () => import("@/views/DepositKelas/createPage.vue"),
      },

      {
        path: "/deposit_kelas/cetakStruk",
        name: "deposit_kelas.cetakStruk",
        component: () => import("@/views/DepositKelas/cetakStrukPage.vue"),
      },

      {
        path: "/aktivasi_tahunan",
        name: "aktivasi_tahunan.index",
        component: () => import("@/views/AktivasiTahunan/indexPage.vue"),
      },
      {
        path: "/aktivasi_tahunan/create",
        name: "aktivasi_tahunan.create",
        component: () => import("@/views/AktivasiTahunan/createPage.vue"),
      },

      {
        path: "/aktivasi_tahunan/cetakStruk",
        name: "aktivasi_tahunan.cetakStruk",
        component: () => import("@/views/AktivasiTahunan/cetakStrukPage.vue"),
      },

      {
        path: "/jadwal_harian",
        name: "jadwal_harian.index",
        component: () => import("@/views/JadwalHarian/indexPage.vue"),
      },
      {
        path: "/jadwal_harian/edit",
        name: "jadwal_harian.edit",
        component: () => import("@/views/JadwalHarian/editPage.vue"),
      },

      {
        path: "/izin_instruktur",
        name: "izin_instruktur.index",
        component: () => import("@/views/IzinInstruktur/indexPage.vue"),
      },

      {
        path: "/izin_instruktur/konfirmasiIzin",
        name: "izin_instruktur.konfirmasiIzin",
        component: () => import("@/views/IzinInstruktur/konfirmasiIzin.vue"),
      },
    ],
  },
];
//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});
export default router;
