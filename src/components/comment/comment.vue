<template>
  <div class="comment" id="comment">
    <div class="comment__container container">
      <h2>&quot;</h2>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
        Seddo eiusmod tempor incididunt ut labore Standard Dummy aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut Unknown Printer The Commodo consequat. Duis aute irure dolor.
        Voluptate velit esse cillum dolore eu fugiat nullapariatur.
      </h3>
      <h4>&mdash; SAM ISBISTER &mdash;</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "comment"
};
</script>
<style lang="scss">
.comment {
  width: 100%;
}
.comment__container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 60px 0 0 0;
    font-size: 3rem;
    color: $second-color;
    font-family: "Helvetica Rounded LT";
    font-weight: 800;
    text-align: center;
  }
  h3 {
    font-size: 1.5rem;
    color:rgba( $second-color,0.8);
    font-family: $font-family-second;
    text-align: center;
    margin: 20px 0 0 0;
    font-weight: 100;
  }
  h4 {
    margin: 35px 0 60px 0;
    font-size: 1rem;
    color: $second-color;
    font-family: $font-family;
    text-align: center;
  }
}
</style>


