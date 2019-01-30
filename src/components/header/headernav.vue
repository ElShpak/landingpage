<template>
  <div class="navbar">
    <router-link class="navbar__item" to="#info" @click.native="scrollFix('#info')">About</router-link>
    <router-link class="navbar__item" to="#popular" @click.native="scrollFix('#popular')">Services</router-link>
    <router-link class="navbar__item" to="#best" @click.native="scrollFix('#best')">Why we best</router-link>
    <router-link class="navbar__item" to="#comment" @click.native="scrollFix('#comment')">Testimonials</router-link>
    <router-link class="navbar__item" to="#contact" @click.native="scrollFix('#contact')">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: "headernav",
  methods: {
    scrollFix: function(hashbang)
    {
      location.href = hashbang;
    }
  }
};
</script>

