<template>
  <div class="home">
    <div class="heroConfig">
      <div class="hero heroTxt">
        <h1>
          New Type ‘A’ Tims compliant Etr machines, sales , services,
          programming and repairs
        </h1>
        <p>
          High quality, affordable er machines for sale with the best
          perfomance, efficiency and low voltage consumption, located at munyu
          road,
          <span> Floor 4, shop E18 </span>, Come grab some for yourself
        </p>
        <button class="heroBtn">
          <a
            href="https://wa.me/254721107590?text=Hi carol, iam intrested in buying Etr am from your website"
            >Learn more</a
          >
        </button>
      </div>
      <div class="hero heroImg"></div>
    </div>
    <div>
      <Kra />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Product />
    </div>
    <div>
      <Poster />
    </div>
    <div>
      <Contact />
    </div>
  </div>
</template>
<script setup>
import Poster from "../components/PosterPic.vue";
import Kra from "../components/KraApproved.vue";
import Product from "../views/ProductView.vue";
import Contact from "../views/ContactView.vue";
import About from "../views/AboutView.vue";
</script>
<style>
@import "../style/HomeView.css";
</style>
