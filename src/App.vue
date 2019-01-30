<template>
 <transition name="animation">
  <div class="app">
    <Header></Header>
    <info></info>
    <chart></chart>
    <contactnow></contactnow>
    <popular></popular>
    <points></points>
    <videoblock></videoblock>
    <comment></comment>
    <contact></contact>
    <Footer></Footer>
  </div>
 </transition>
</template>

<script>
import Header from "@/components/header/header.vue";
import info from "@/components/info/info.vue";
import chart from "@/components/chart/chart.vue";
import contactnow from "@/components/contactnow/contactnow.vue";
import popular from "@/components/popular/popular.vue";
import points from "@/components/points/points.vue";
import videoblock from "@/components/videoblock/videoblock.vue";
import comment from "@/components/comment/comment.vue";
import contact from "@/components/contact/contact.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    info,
    chart,
    contactnow,
    popular,
    points,
    videoblock,
    comment,
    contact,
    Footer
  }
};
</script>


<style lang="scss">
.app {
  background: url(assets/Layer1.png);
  background-color: $first-color;
  background-blend-mode: hard-light;
}
.animation-leave-active {
  transition: all 0.6s ease-in-out;
}
.animation-leave {
  opacity: 1;
}
.animation-leave-to {
  opacity: 0;
}
</style>
