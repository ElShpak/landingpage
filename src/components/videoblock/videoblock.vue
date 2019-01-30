<template>
  <div class="video" id="best">
    <div class="container video__container">
      <div class="video__item">
        <div class="video__item--yellow"></div>
        <div class="video__item--img">
          <div class="video-foreground">
            <iframe
              src="https://www.youtube.com/embed/T5Ryf--3hMc?autoplay=1&amp;loop=1&amp;&amp;playlist=T5Ryf--3hMc"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="video__item video__item--left">
        <h2>
          Why we best Consulting
          office in london ?
        </h2>
        <h3>Rapid solutions to the most complex business challenges with cooperative process-driven.</h3>
        <p>Integer blandit ultricies aliquam. Pellentesque quis dui varius, dapibus velit id, iaculis ipsum. Morbi ac eros feugiat, lacinia elit ut, elem turpis.Curabitur justo sapien, tempus sit amet rutrum eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendrerit eleifend tempor.</p>
        <a href="#">Our services</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "videoblock"
};
</script>

<style lang="scss">
.video {
  background: $second-color;
}
.video__container {
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
.video__item--yellow {
  width: 180px;
  height: 450px;
  background: #fde428;
}
.video__item--img {
    @include medium {
	   width: 20%;
	}
  width: 90%;
  height: 220px;
  background: url(https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/tower-bridge-exhibition/tower-bridge-homepage-image.jpg?mw=1920&hash=E19E0136A57855A8ED61B4E66EA72F1646CA8DAC)
    no-repeat;
  background-size: cover;
  position: absolute;
}
.video-foreground iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
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
.video__item--left {
  align-items: flex-start;
}
</style>
