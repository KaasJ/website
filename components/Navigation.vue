<template>
  <div>
    <div>
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">

          <img class="lg:hidden mx-5 mt-4" src="~/assets/logo.svg" heigth="30" width="30" />
          <NuxtLink v-for="tab in tabs" 
            :key="tab.name" :to="tab.href" 
            :class="[tab.href === $route.path ? 
              'border-indigo-500 text-indigo-600' : 
              'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap mr-8 py-4 px-1 border-b-2 font-medium text-lg lg:text-base']" 
            :aria-current="tab.href === $route.path ? 'page' : undefined">{{ tab.name }} </NuxtLink>
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