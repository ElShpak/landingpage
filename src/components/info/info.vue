<template>
  <div class="info" id="info">
    <div class="container info__container">
      <div class="info__item info__item--left">
        <h2>Take away the risk &amp; you can do anything.</h2>
        <h3>Rapid solutions to the most complex business challenges with cooperative process-driven.</h3>
        <p>Integer blandit ultricies aliquam. Pellentesque quis dui varius, dapibus velit id, iaculis ipsum. Morbi ac eros feugiat, lacinia elit ut, elem turpis.Curabitur justo sapien, tempus sit amet rutrum eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendrerit eleifend tempor.</p>
        <a href="#">Take a Tour</a>
      </div>
      <div class="info__item">
        <div class="info__item--yellow"></div>
        <div class="info__item--img"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "info"
};
</script>

<style lang="scss">
.info {
  background: $second-color;
}

.info__container {
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @include medium {
	    flex-direction: row;
  justify-content: center;
  align-items: space-around;
	}
}
.info__item--yellow {
  width: 180px;
  height: 450px;
  background: #fde428;
}
.info__item--img {
  width: 70%;
    @include medium {
	   width: 25%;
	}
  height: 220px;
  background: url(http://www.basmati.cloud/wp-content/uploads/2018/05/workshop-918x540.jpg)
    no-repeat;
  background-size: cover;
  position: absolute;
  transition: all 0.4s ease;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 70% 0 70% 0;
  &:hover {
    border-radius: 0% 70% 0% 70%;
  }
}
.info__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   @include medium {
	 width: 50%;
	}
  width: 100%;
  a {
    font-family: $font-family;
    font-size: 0.9rem;
    color: $first-color;
    padding: 5px;
    margin-bottom: 15px;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: $second-color;
      background: rgba($first-color, 0.5);
      border-radius: 0 10px 0 10px;
    }
     &:active {
      border-radius:  10px 0 10px 0;
    }
  }
  h2 {
    font-size: 1.5rem;
    font-family: $font-family;
    color: $first-color;
    padding-top: 60px;
    padding-bottom: 20px;
  }
  h3 {
    font-family: $font-family-second;
    font-size: 1rem;
    color: #666666;
    font-weight: 100;
    padding-bottom: 20px;
  }
  p {
    font-size: 0.7rem;
    font-family: $font-family-second;
    color: #333333;
    padding-bottom: 20px;
  }
}
.info__item--left {
  align-items: flex-start;
}
</style>
