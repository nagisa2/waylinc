<template>
  <div class="heroConfig">
    <div class="hero heroTxt">
      <h1>
        New Type ‘A’ Tims comliant Etr machines, sales , services, programming
        and repairs
      </h1>
      <p>
        High quality, affordable er machines for sale with the best perfomance,
        efficiency and low voltage consumption, located at munyu road,
        <span> Floor 4, shop E18 </span>, Come grab some for yourself
      </p>
      <button class="heroBtn">Learn more</button>
    </div>
    <div class="hero heroImg"></div>
  </div>
  <div>
    <Kra />
  </div>
  <div class="aboutPage">
    <About />
  </div>
</template>
<script setup>
import Kra from "../components/KraApproved.vue";
import About from "../views/AboutView.vue";
</script>
<style>
@import "../style/HomeView.css";
</style>
