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
     <table>
        <tr>
          <th>No</th><th>Photo</th><th>Nama</th><th>Jabatan</th><th>jenis Kelamin</th><th>Alamat</th>
        </tr>
        <tr>
          <td>1</td> <td><img src="../assets/jarkasih.jpeg" width="100"></td><td>Jarkasih</td><td>Kepala Desa </td><td>Laki-laki</td><td>Kp. Sukabakti RT. 03/02 Desa Sukawening Kec. Dramaga Bogor</td>
        </tr>
      </table>
      <p class="text-lg font-semibold">Data Perangkat Desa</p>
      <table>
        <tr>
          <th>No</th><th>Photo</th><th>Nama</th><th>Jabatan</th><th>jenis Kelamin</th><th>Alamat</th>
        </tr>
          <tr>
          <td>1</td> <td><img src="../assets/sabiludin.jpeg" width="100"></td><td>Sabiludin</td><td>Sekretaris Desa</td><td>Laki-laki</td><td>Kp. Sukabakti RT. 03/02 Desa Sukawening Kec. Dramaga Bogor</td>
        </tr>
        <tr>
          <td>2</td><td><img src="../assets/rina.jpeg" width="100"></td><td>Rina Adriyanti </td><td> Kaur Keuangan </td><td>Perempuan</td><td>Kp. Sukabakti RT. 03/02 Desa Sukawening Kec. Dramaga Bogor</td>
        </tr>
         <tr>
          <td>3</td><td><img src="../assets/ujang.jpeg" width="100"></td><td>Ujang Suhandi </td><td> Kaur Perencanaan </td><td>Laki-Laki</td><td>Kp. Cibeuruem Kalong RT. 01/05 Desa Sukawening Kec. Dramaga Bogor</td>
        </tr>
         <tr>
          <td>4</td><td><img src="../assets/omah.jpeg" width="100"></td<td>Omah Srihayatinah </td><td> Kasi pelayanan </td><td>Perempuan</td><td>Kp. Manggah Dua RT. 01/07 Desa Sukawening Kec. Dramaga Bogor</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
table, td{
  border : 1px solid black;
}
</style>
