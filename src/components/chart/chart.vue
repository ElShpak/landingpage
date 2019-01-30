<template>
  <div class="chart--container">
    <div class="container chart">
      <div class="chart__graph">
        <div class="chart__graph--graph"></div>
      </div>
      <div class="chart__info">
        <h2>Constructingthe best in class global assets.</h2>
        <h3>Rapid solutions to the most complex business challenges with cooperative process-driven.</h3>
        <p>Integer blandit ultricies aliquam. Pellentesque quis dui varius, dapibus velit id, iaculis ipsum. Morbi ac eros feugiat, lacinia elit ut, elem turpis.Curabitur justo sapien, tempus sit amet rutrum eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendrerit eleifend tempor.</p>
        <a href="#">Take a Tour</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "chart"
};
</script>

<style lang="scss">
.chart--container {
  background-color: #f4f4f4;
}
.chart {

  width: 100%;
  min-height: 350px;
  display: flex;
  justify-content: center;
    align-items: center;
		flex-direction: column;
  @include medium {
	    flex-direction: row;
  justify-content: center;
  align-items: space-around;
	}
}
.chart__graph {
    padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   @include medium {
	 width: 50%;
	}
}
.chart__graph--graph {
  background: url(https://visme.co/blog/wp-content/uploads/2017/03/Dogs-vs-Cats-How-much-they-miss-you-relative-to-the-time-you-are-gone.png)
    no-repeat;
  background-size: cover;
  margin: 5px;
  width: 90%;
  min-height: 250px;
  max-height: 330px;
   transition: all 0.4s ease;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    border-radius: 50% 50% 0% 0;
  &:hover{
   border-radius: 0% 0% 10% 10%;
  }
}
.chart__info {
   @include medium {
	 width: 50%;
	}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  a {
    font-family: $font-family;
    font-size: 0.7rem;
    color: $first-color;
    padding: 5px;
    margin-bottom: 15px;
    transition: all 0.5s ease-in-out;
    &:hover{
      color: $second-color;
      background: rgba($first-color,0.5);
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
</style>

