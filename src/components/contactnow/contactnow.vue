<template>
  <div class="contactnow">
    <div class="container contactnow__container">
      <div class="contactnow__question">
        <h3>Looking for a First-Class Business Plan Consultant?</h3>
      </div>
      <div class="contactnow__btn">
        <h3>contact now</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "contactnow"
};
</script>

<style lang="scss">
.contactnow {
  padding: 13px 0;
  width: 100%;
}
.contactnow__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.contactnow__question {
  font-family: $font-family;
  font-size: 1rem;
  color: $second-color;
}
.contactnow__btn {
  cursor: pointer;
  padding: 10px 10px 40px 10px;
  border-radius: 4px;
  background: $third-color;
  color: $first-color;
  font-family: $font-family;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;
  clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 50% 100%, 0% 60%, 0% 0%);
  &:hover {
    background: $second-color;
  }
}
</style>

