<script setup>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <Header />
  <Banner />

  <main class="flex">
    <Sidebar />

    <div class="flex-1 p-10">
      <p class="text-3xl font-semibold">Data Perangkat Desa </p>
      <p class="text-lg font-semibold">Data Kepala desa</p>
      <p>
        “Terwujudnya Desa Setu Yang Sejahtera dan Mandiri, ditopang Kinerja
        Aparatur yang Profesional dalam Kerangka Budaya Bangsa didasari Keimanan
        dan Ketaqwaan”
      </p>
      <p class="text-lg font-semibold">Data Perangkat Desa</p>
      <table>
        <tr>
          <td>No</td><td>Nama</td><td>jenis Kelamin</td><td>Alamat</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
</style>
