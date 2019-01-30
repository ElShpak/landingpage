<template>
  <div class="contact" id="contact">
    <div class="container contact__container">
      <div class="contact__block__title">
        <h2>Contact with us</h2>
        <h3>Rapid solutions to the most complex business challenges with cooperative process-driven.</h3>
      </div>
      <div class="contact__maps--container">
        <div class="contact__maps" v-for="(maps, key) in maps" :key="key">
          <div
            class="contact__img"
            v-bind:style="{ backgroundImage: 'url(' + maps.url + ')' }"
            alt="img"
          ></div>
          <h2>{{maps.title}}</h2>
          <p>
            <i class="material-icons">place</i>
            {{maps.address}}
          </p>
          <a :href="'tel:'+ maps.tel">
            <i class="material-icons">phone</i>
            {{maps.tel}}
          </a>
          <a :href="'tel:'+ maps.secondtel">
            <i class="material-icons">phone</i>
            {{maps.secondtel}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { async } from "q";
export default {
  name: "contact",

  computed: {
    ...mapState(["maps"])
  }
};
</script>

<style lang="scss">
.contact {
  background: $second-color;
  width: 100%;
}
.contact__container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.contact__block__title {
  h2 {
    margin: 70px 0 0 0;
    text-align: center;
    color: $first-color;
    font-size: 2.3rem;
    font-family: $font-family;
  }
  h3 {
    text-align: center;
    margin: 20px 0 0 0;
    font-family: $font-family-second;
    font-size: 1rem;
    color: #666666;
    font-weight: 100;
  }
}
.contact__maps {
 
  @include small {
    width: 70%;
  }
   @include medium {
    width: 250px;
  }
  width: 100%;
  margin-right: 10px;
  margin-top: 20px;
}
.contact__maps--container {
  padding-top: 20px;
  padding-bottom: 90px;
  display: flex;
  @include large {
    flex-direction: row;
  }
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  h2 {
    text-align: left;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-family: $font-family;
    color: $first-color;
    padding: 10px 0 0 0;
    margin: 0;
  }

  p {
    text-align: left;
    font-size: 0.9rem;
    font-family: $font-family-second;
    color: $first-color;
    padding: 5px 0 0 0;
    margin: 0;
  }
  a {
    text-align: left;
    display: block;
    text-decoration: none;
    font-size: 0.9rem;
    font-family: $font-family-second;
    color: $first-color;
    padding: 5px 0 0 0;
    margin: 0;
  }
}
.contact__img {
  @include medium {
    width: 280px;
  }
  background-size: cover;
  width: 100%;
  height: 150px;
  transition: all 0.4s ease;
  box-shadow: 0px 0px 35px $first-color;
  border: 3px solid $third-color;
  border-radius: 80% 0 80% 0;
  &:hover {
    border-radius: 5%;
  }
}
</style>

