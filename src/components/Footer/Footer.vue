<template>
  <div class="footer">
    <div class="container footer__container">
      <div class="footer__title">
          <h2>Copyright &copy;</h2>
          <p> Symu.co</p>
      </div>
      <ul class="footer__socials">
        <li class="footer__socials--icons">
          <i class="fab fa-facebook-square"></i>
        </li>
        <li class="footer__socials--icons">
          <i class="fab fa-twitter-square"></i>
        </li>
        <li class="footer__socials--icons">
          <i class="fab fa-google-plus-square"></i>
        </li>
        <li class="footer__socials--icons">
          <i class="fab fa-instagram"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer{
    width: 100%;
}
.footer__container{
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.footer__socials{
display: flex;
flex-direction: row;
margin: 0;
padding: 0;
}
.footer__socials--icons{
  cursor: pointer;
  margin-left: 10px;
list-style-type: none;
 font-size: 1.5rem;
color:$second-color;
font-family:$font-family;
text-align: center;
transition: all 0.2s ease-in-out;
border-radius: 50%;

&:hover{
color: $third-color;
 box-shadow: 5px 0px 2px $third-color;
}
}
.footer__title{
   padding: 20px 0;
    h2{
        font-size: 1rem;
        color: $second-color;
        font-family: $font-family;
        text-align: center;
        display: inline;
    }
    p{
         font-size: 1rem;
        color: $third-color;
        font-family: $font-family;
        text-align: center;
        display: inline;
    }
}
</style>

