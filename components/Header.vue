<template>
<div>
  <div class="container" >
   <div class="py-6 flex justify-between">
    <Logo/>
     <div class="w-98">
       <div class="border-grey-100 p-1 flex rounded-full items-center">
         <div class="min-w-max px-3">
           <img src="~/assets/img/search.png" alt="">
         </div>
         <input class="w-full p-3 focus:outline-none" type="search" placeholder="Search Here...."></input>
         <button class="bg-gray-400 p-2 px-6 py-2 text-white" type="submit">Search</button>
       </div>
     </div>
     <div class="min-w-max flex">
       <nuxt-link to="/"><span class="bs-icon-box rounded-full hover:bg-gray-200 flex items-center justify-center inline-block "><img src="~/assets/img/heart.png" alt=""></span></nuxt-link>
       <nuxt-link to="/" class="relative mx-4"><span class="bs-icon-box rounded-full hover:bg-gray-200 flex items-center justify-center inline-block "><img src="~/assets/img/u_shopping-bag.png" alt="">
      </span> <span class="absolute bg-red-600 w-4 h-4 top-0 right-0 rounded-full text-xs flex justify-center  items-center">0</span></nuxt-link>
       <nuxt-link to="/" class="flex items-center"><span class="bs-icon-box rounded-full hover:bg-gray-200  flex items-center justify-center inline-block "><img src="~/assets/img/user.png" alt="">
      </span><span>Account</span></nuxt-link>
     </div>
   </div>

  <div class="flex items-center">
    <div class="w-96">
      <div class="bs-dark-green-bg flex rounded-full px-4 py-2 curson-pointer">

        <div class="min-w-max">
          <img src="~/assets/img/menu-right.png" alt="">
        </div>
        <div class="w-full text-center px-6 text-white">
          All Categories
        </div>
        <div class="min-w-max">
          <img src="~/assets/img/chevron-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="w-full">
      <ul class="flex justify-center">
        <li>
          <nuxt-link to="/" class="p-4">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4">Categories</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4">Contact</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4">FAQs</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" class="p-4">Offers</nuxt-link>
        </li>


      </ul>

    </div>
    <nuxt-link to="/" class="min-w-max bs-dark-orange-color flex">
      <img src="~/assets/img/u_percentage.png" class="mr-3" alt="">Special Offers!
    </nuxt-link>
  </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
