<template>
  <div class="points">
    <div class="points__container container">
      <ul class="points__list">
        <div class="points__item">
          <h2>7890</h2>
          <p>Coffee cups</p>
        </div>
        <div class="points__item">
          <h2>1m</h2>
          <p>Subscribers</p>
        </div>
        <div class="points__item">
          <h2>1509</h2>
          <p>Customers</p>
        </div>
        <div class="points__item">
          <h2>5972</h2>
          <p>Purchases</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "points"
};
</script>
<style lang="scss">
.points__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.points {
  width: 100%;
}
.points__list {
  margin: 0;
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @include small {
	flex-direction: row;
	}
  
}
.points__item {
  list-style-type: none;
  margin: 0;
  padding:20px;
    @include small {
	  padding: 0 10px 0 0;
	}
    @include medium {
	   padding: 0 50px 0 0;
  }
   @include large {
	   padding: 0 70px 0 0;
	}
  &:last-child {
    padding: 0 0 0 0;
  }
  h2 {
    text-transform: uppercase;
    font-size: 1rem;
    font-family: $font-family;
    text-align: center;
    color: $second-color;
      @include medium {
	   font-size: 2.5rem;
	}
  }
  p {
     @include medium {
	   font-size:1rem;
	}
    text-transform: uppercase;
    text-align: center;
    font-size: 0.7em;
    font-family: $font-family-second;
    color: $second-color;
  }
}
</style>

