<template>
  <div>
    <div>
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <!-- todo: Make sure logo scales correctly -->
          <img class="lg:hidden mx-7 mt-4" src="~/assets/logo.svg" heigth="40" width="40" />      
          <NuxtLink v-for="tab in tabs" 
          :key="tab.name" :to="tab.href" 
          :class="[tab.href === $route.path ? 
            'border-indigo-500 text-indigo-600' : 
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap mr-8 py-4 px-1 border-b-2 text-4xl lg:text-2xl']" 
          :aria-current="tab.href === $route.path ? 'page' : undefined">{{ tab.name }}</NuxtLink>
 
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const tabs = [
      { name: 'Home', href: '/' },
      { name: 'Next', href: '/next'}
    ]

    return {
      tabs
    }
  }
}


</script>