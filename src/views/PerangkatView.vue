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
      <p class="text-3xl font-semibold">Visi & Misi Desa</p>
      <p class="text-lg font-semibold">Data Kepala desa</p>
      <p>
        “Terwujudnya Desa Setu Yang Sejahtera dan Mandiri, ditopang Kinerja
        Aparatur yang Profesional dalam Kerangka Budaya Bangsa didasari Keimanan
        dan Ketaqwaan”
      </p>
      <p class="text-lg font-semibold">Data Perangkat Desa</p>
      <ul>
        <li>
          1. Sabiludin, S.Pd.I : Sekretaris Desa;
        </li>
        <li>
          2. Rina Adriyanti : Kaur Keuangan ;
        </li>
        <li>
          3. Ujang Suhandi : Kaur Perencanaan ;
        </li>
        <li>
          4. Deska Iskandar : Kaur Umum ;
        </li>
        <li>
          5. Ulfa Aulina : Kaur Kesejahtraan Rakyat ;
        </li>
        <li>
          6. Omah Srihayatinah : Kaur Pelayanan;
        </li>
        <li>
          7. Acip Suhendar : Kasi Pemerintahan ;
        </li>
        <li>
          8. Menjalin sinergitas dengan instansi atau Lembaga terkait dan pihak
          swasta guna optimalisasi suatu tujuan lebih baik dan lebih maksimal;
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
</style>
