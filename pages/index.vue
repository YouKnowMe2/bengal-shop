<template>
  <div>
<!--    <vue-slick-carousel :arrows="true" :dots="true">-->
<!--      <div>1</div>-->
<!--      <div>2</div>-->
<!--      <div>3</div>-->
<!--      <div>4</div>-->
<!--    </vue-slick-carousel>-->
    <div class="p-8 ">
      <vue-slick-carousel :arrows="false" :dots="true">
        <!--slide 01 -->
      <div class="slide-bg rounded-2xl pt-8">
        <div class="container">
          <div class="flex items-center">
            <div class="w-1/2 mr-6 text-2xl">
              <p class="bs-dark-green-bg text-3xl mb-4">Save up to 30% now</p>
              <h2 class="text-7xl font-bold mb-8 text-gray-800">Bengal Vegatables Farm Organic</h2>
              <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi iusto magnam minus nostrum quaerat rem sit sunt tempore voluptatum!
              </p>
              <nuxt-link to="/" class="bs-button">Shop Now</nuxt-link>
            </div>
            <div class="w-1/2 flex justify-end">
              <img width="500" src="~/assets/img/hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
        <!--slide 02 -->
        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 text-2xl">
                <p class="bs-dark-green-bg text-3xl mb-4">Save up to 30% now</p>
                <h2 class="text-7xl font-bold mb-8 text-gray-800">Bengal Vegatables Farm Organic</h2>
                <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi iusto magnam minus nostrum quaerat rem sit sunt tempore voluptatum!
                </p>
                <nuxt-link to="/" class="bs-button">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="500" src="~/assets/img/hero.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <!--slide 03 -->
        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 text-2xl">
                <p class="bs-dark-green-bg text-3xl mb-4">Save up to 30% now</p>
                <h2 class="text-7xl font-bold mb-8 text-gray-800">Bengal Vegatables Farm Organic</h2>
                <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi iusto magnam minus nostrum quaerat rem sit sunt tempore voluptatum!
                </p>
                <nuxt-link to="/" class="bs-button">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="500" src="~/assets/img/hero.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>
