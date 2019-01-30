<template>
  <div class="block--first">
    <div class="container">
      <div class="header">
        <headerlogo></headerlogo>
        <headernav></headernav>
      </div>
      <headermain></headermain>
    </div>
  </div>
</template>


<script>
import headermain from "@/components/header/headermain.vue";
import headernav from "@/components/header/headernav.vue";
import headerlogo from "@/components/header/headerlogo.vue";
export default {
  name: "Header",
  components: {
    headermain,
    headernav,
    headerlogo
  }
};
</script>
 <style lang="scss">
.block--first {
  width: 100%;
  min-height: 600px;
  position: relative;
  background: url(../../assets/Layer1.png);
  background-color: $first-color;
  background-blend-mode: hard-light;
  background-size: cover;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  padding: 5px 0;
  height: 230px;
  width: 100%;
  	@include small {
	  height: 130px;
	}
  background: rgba($color: $first-color, $alpha: 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @include small {
    padding: 5px 0;
    flex-direction: column;
    height: 130px;
  }
  @include medium {
    padding: 0px 0;
    flex-direction: row;
    height: 60px;
  }
  @include large {
    padding: 0px 0;
    flex-direction: row;
    height: 60px;
  }
  @include extra {
    padding: 0px 0;
    flex-direction: row;
    height: 60px;
  }
}
.header__block {
  position: relative;
  width: 100%;
  min-height: 450px;
  padding-top: 230px;
  	@include small {
	    padding-top: 130px;
	}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  	@include small {
 flex-direction: row;
  justify-content: space-between;
	}
}
.header__block__nav {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header__block__nav--item {
  cursor: pointer;
  font-size: 0.9rem;
  font-family: $font-family-second;
  color: $third-color;
  padding: 10px;
  word-spacing: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    transition: all 0.5s ease-in-out;
    
    &:hover{
       color: $second-color;
        font-size: 1rem;
        background: rgba($third-color,0.5);
        border-radius: 0 10px 0 10px;
    }
    &:active{
       background: rgba($third-color,1);
    }
}
.header__block__title--block {
  width: 200px;
  height: 250px;
  border: 10px solid $third-color;
  transition: all 0.5s ease-in-out;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% 82%,
    10% 82%,
    10% 72%,
    0% 72%,
    0% 66%,
    10% 66%,
    10% 14%,
    0% 14%
  );
}
.header__block__title {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
    transition: all 0.8s ease-in-out;
    cursor: pointer;
  &:hover {
    .header__block__title--block {
      border: 10px solid $second-color;
    }
    .header__block__title--title {
      color: $third-color;
    }
    .header__block__title--subtitle {
      color: $second-color;
    }
  }
  &:active{
     .header__block__title--block {
      border: 10px solid $third-color;
      border-radius:  100% ;
    }
  }
}
.header__block__title--title {
  transition: all 0.5s ease-in-out;
  position: absolute;
  width: 150px;

  		 top:57%;
  left: 10%;
  font-size: 2rem;
  font-family: $font-family;
  color: $second-color;
  	@include small {
		  top: 42%;
  left: 50%;
	}
}
.header__block__title--subtitle {
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 86%;
  left: 18%;
  font-size: 1.2rem;
  font-family: $font-family;
  text-align: right;
  color: $third-color;
  	@include small {
   top: 76%;
  left: 58%;
	}
}
.navbar {
  display: flex;
  flex-direction: column;
	@include small {
	 flex-direction: row;
	}
}
.navbar__item {
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0 0 4px;
  padding: 10px 5px;
  font-family: $font-family;
  color: $second-color;
  font-size: 0.6rem;
     	@include medium {
	 margin: 0 0 0 24px;

  font-size: 0.875rem;
	}
  border-bottom: 5px solid $third-color;
  transition: all 0.5s ease-in-out;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    90% 100%,
    90% 80%,
    20% 80%,
    20% 100%,
    0% 100%,
    0% 0%
  );
  &:hover {
    border-bottom: 5px solid $second-color;
    color: $third-color;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
  }
    &:active{
    border-radius: 0 0% 100% 0 ;
  }
}
.logo {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
transition: all 0.4s ease-in-out;
  &:hover {
    .logo__title {
      color: $second-color;
    }
    .logo__subtitle {
      color: $third-color;
    }
  }
  &:active{
      background: rgba($third-color,0.5);
  }

}
.logo__title {
  text-decoration: none;
  color: $third-color;
  font-family: $font-family;
  font-size: 1.8rem;
  transition: all 0.4s ease-in-out;
}
.logo__subtitle {
  font-family: $font-family;
  color: $second-color;
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: all 0.4s ease-in-out;
}
</style>
 
