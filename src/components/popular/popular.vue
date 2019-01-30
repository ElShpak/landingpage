<template>
  <div class="popular" id="popular">
    <div class="container popular__container">
      <div class="popular__title">
        <h2>Popular Services</h2>
        <p>Rapid solutions to the most complex business challenges with cooperative process-driven.</p>
      </div>
      <div class="popular__items--block">
        <div class="popular__items" v-for="(items, key) in items" :key="key">
          <div
            class="popular__img"
            v-bind:style="{ backgroundImage: 'url(' + items.img + ')' }"
            alt="img"
          ></div>
          <h2>{{items.title}}</h2>
          <p>{{items.subtitle}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "popular",
  computed: {
    ...mapState(["items"])
  }
};
</script>
<style lang="scss">
.popular {
  width: 100%;
  background: $second-color;
}
.popular__img {
   @include medium {
	   width: 280px;
	}
  background-size: cover;
  width: 100%;
  height: 150px;
  transition: all 0.4s ease;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 100% 0 100% 0;
  &:hover {
    border-radius: 5%;
  }
}
.popular__items {
  padding-bottom: 30px;
  width: 280px;
  margin-right: 10px;
  margin-top: 20px;
}
.popular__items--block {
 
    justify-content: center;
    align-items: center;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  h2 {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: $font-family;
    color: $first-color;
    padding: 20px 0 0 0;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    font-family: $font-family-second;
    color: #333333;
    padding: 20px 0 0 0;
    margin: 0;
  }
}
.popular__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.popular__title {
  text-transform: uppercase;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  h2 {
    padding: 20px 0 0 0;
    margin: 0;
    font-family: $font-family;
    font-size: 1.2rem;
    color: $first-color;
  }
  p {
    text-align: center;
    padding: 20px 0 0 0;
    margin: 0;
    font-family: $font-family;
    font-size: 1rem;
    color: #666666;
  }
}
</style>


