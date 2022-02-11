<template>
  <div>
<!--    <vue-slick-carousel :arrows="true" :dots="true">-->
<!--      <div>1</div>-->
<!--      <div>2</div>-->
<!--      <div>3</div>-->
<!--      <div>4</div>-->
<!--    </vue-slick-carousel>-->
    <div class="p-8 ">
      <vue-slick-carousel class="hero-slide" :arrows="false" :dots="true">
        <!--slide 01 -->
      <div class="slide-bg rounded-2xl pt-8">
        <div class="container">
          <div class="flex items-center">
            <div class="w-1/2 mr-6 text-2xl">
              <p class="bs-dark-green-color text-3xl mb-4">Save up to 30% now</p>
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
                <p class="bs-dark-green-color bs-text-3xl mb-4">Save up to 30% now</p>
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
                <p class="bs-dark-green-color  text-3xl mb-4">Save up to 30% now</p>
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
      <div class="container pt-20">
        <h3 class="text-4xl mb-4">Search By Category</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32  bs-dark-green-bg"></div>
          <div style="height: 1px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel v-bind="categoryCarouselSettings" class="category-carousel mb-12">
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-2.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-3.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-4.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-5.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-6.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-5.png" alt="">
            </div>
            <div class="text-xl">Groceries</div>
          </div>


          <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>

        </vue-slick-carousel>

        <div class="flex -mx-6 mb-14">
          <!-- Image box 01-->
          <div class="w-1/2 px-6">
            <div class="promo-bg-1 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold text-5xl mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bs-white-btn">Order Now</nuxt-link>
              </div>
            </div>
          </div>
          <!-- Image box 02-->
          <div class="w-1/2 px-6">
            <div class="promo-bg-2 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold text-5xl mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bs-white-btn">Order Now</nuxt-link>
              </div>
            </div>
          </div>


        </div>

        <h3 class="text-4xl mb-6">Deals of the Week</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>


            <vue-slick-carousel v-if="dealsOfTheDayProducts.length" class="category-carousel mb-16 text-center" v-bind="categoryCarouselSettings">
              <div v-for="product in dealsOfTheDayProducts">
              <SingleProductBox :key="product.id" :product="product"/>
              </div>

              <template #prevArrow="arrowOption">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </template>

              <template #nextArrow="arrowOption">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </template>

            </vue-slick-carousel>



        <h3 class="text-4xl mb-6">Popular Brands</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel class="category-carousel mb-16 text-center" v-bind="categoryCarouselSettings">
          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-1.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-2.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-3.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-4.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-5.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-6.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-1.png" alt=""></div>
          </div>
          <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
        </vue-slick-carousel>

        <div class="flex -mx-6 mb-12">
          <div class="w-1/3 px-6">
            <div class="cta-1 flex p-6 rounded-xl">
              <div class="w/1-2">
                <h3 class="text-3xl leading-tight font-semibold mb-10">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img src="~/assets/img/fresh-fruit.png" alt="">
              </div>
            </div>
          </div>

          <div class="w-1/3 px-6">
            <div class="cta-2 flex p-6 rounded-xl">
              <div class="w/1-2">
                <h3 class="text-3xl leading-tight font-semibold mb-10">Vegetable Collection</h3>
                <nuxt-link to="/" class="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img src="~/assets/img/vegetable-collection.png" alt="">
              </div>
            </div>
          </div>

          <div class="w-1/3 px-6">
            <div class="cta-3 flex p-10 rounded-xl">
              <div class="w/1-2">
                <h3 class="text-3xl leading-tight font-semibold mb-10">Grocery Items Collection</h3>
                <nuxt-link to="/" class="h-12 w-12 flex justify-center items-center rounded-full bg-white inline-block"><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img  src="~/assets/img/grocery-items.png" alt="">
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>

import SingleProductBox from "../components/SingleProductBox";
import dealsOfTheDayProducts from 'assets/deals-of-the-day-products.json';

export default {
  name: 'IndexPage',
  components: {SingleProductBox},
  data() {
    return {
      categoryCarouselSettings: {
        "slidesToShow": 6
      },
      productCarouselSettings: {
        "slidesToShow": 6
      },
      dealsOfTheDayProducts: []
    }
  },
  mounted() {
    this.dealsOfTheDayProducts = dealsOfTheDayProducts;
  }
}
</script>
