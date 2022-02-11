<template>
<div>
  <div class="container">
    <div class="flex -mx-4 mb-10" >
      <div class="w-1/4 px-4 flex items-center" >
        <div class="min-w-max mr-4">
          <img  src="~/assets/img/customer-support.png" alt="">
        </div>
        <div class="w-full">
            <h3 class="text-xl font-medium mb-3"> 24 Customer Support</h3>
              Contact us 24 Hours
        </div>
      </div>
      <div class="w-1/4 px-4 flex items-center" >
        <div class="min-w-max mr-4">
          <img  src="~/assets/img/authentic-products.png" alt="">
        </div>
        <div class="w-full">
          <h3 class="text-xl font-medium mb-3"> Authentic Product</h3>
          Contact us 24 Hours
        </div>
      </div>
      <div class="w-1/4 px-4 flex items-center" >
        <div class="min-w-max mr-4">
          <img  src="~/assets/img/secure-payment.png" alt="">
        </div>
        <div class="w-full">
          <h3 class="text-xl font-medium mb-3">Secure Payment</h3>
          Contact us 24 Hours
        </div>
      </div>
      <div class="w-1/4 px-4 flex items-center" >
        <div class="min-w-max mr-4">
          <img  src="~/assets/img/best-price.png" alt="">
        </div>
        <div class="w-full">
          <h3 class="text-xl font-medium mb-3">Best Price and Offers</h3>
          Contact us 24 Hours
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-200 py-12">
    <div class="container">
      <div class="flex">
        <div class="w-3/5 pr-6">
        <Logo/>
          <p class="my-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus dolore eaque eos iure nulla quas repellendus tempora vero voluptatibus!</p>
          <div class="flex">
            <a href="" target="_blank" class="mr-4"><img src="~/assets/img/playstore.png" alt=""></a>
            <a href="" target="_blank" class="mr-4"><img src="~/assets/img/appstore.png" alt=""></a>
          </div>
        </div>
        <div class="w-1/5 pl-6">
        <h3 class="text-2xl mb-6">About us</h3>
          <ul class="leading-loose">
          <li><nuxt-link to="/">About Karte</nuxt-link></li>
          <li><nuxt-link to="/">Contact</nuxt-link></li>
          <li><nuxt-link to="/">Career</nuxt-link></li>
          <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
          <li><nuxt-link to="/">Category</nuxt-link></li>
          </ul>
        </div>
        <div class="w-1/5 pl-6">
          <h3 class="text-2xl mb-6">About us</h3>
          <ul class="leading-loose">
            <li><nuxt-link to="/">About Karte</nuxt-link></li>
            <li><nuxt-link to="/">Contact</nuxt-link></li>
            <li><nuxt-link to="/">Career</nuxt-link></li>
            <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
            <li><nuxt-link to="/">Category</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="flex -mx-6 mt-20 items-center text-xs">

        <div class="w-1/3 flex">
          <img class="mr-3" width="30" src="~/assets/img/facebook.svg" alt="">
          <img class="mr-3" width="30" src="~/assets/img/instagram.svg" alt="">
          <img class="mr-3" width="30" src="~/assets/img/twitter.svg" alt="">
          <img class="mr-3" width="30" src="~/assets/img/linkedin.svg" alt="">

        </div>
        <div class="w-1/3">
          <p>Copyright is reserved by Sm20</p>
        </div>
        <div class="w-1/3 px-6">
          <img src="~/assets/img/payments.png" alt="">
        </div>
      </div>
    </div>
  </div>




</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
