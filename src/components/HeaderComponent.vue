<template>
  <div class="header-cfg">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.svg" alt="logo" class="logoImg" />
      </div>
      <div class="link">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/product" class="nav-link">Product</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </div>
    </div>
  </div>

  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style>
@import "../style/HeaderComponent.css";
</style>
