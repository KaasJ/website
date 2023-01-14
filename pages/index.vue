<template>
  <div class="container w-1/2 mt-20">
    <header class="flex">
        <div class="mx-auto">
          <img src="~/assets/logo.svg" heigth="100" width="150" />

          <div>
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
              <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                  <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                </nav>
              </div>
            </div>
          </div>



        </div>



    </header>
    
    <article class="flex mt-10" v-for="post of posts" :key="post.slug">
      <div class="mx-auto">
        <!-- <h1> {{ post.title }}</h1> -->
        <h2 class="mt-5"> {{ post.description }} </h2>
        <nuxt-content class="mt-5" :document="post" />
        <p class="mt-5"> Posted on: {{ post.date }} </p>
      </div>
      <!-- <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink> -->
    </article>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();


    return {
      posts,
    };
  },
  setup() {
    const tabs = [
      { name: 'Home', href: '#', current: true },
      { name: 'Next', href: '#', current: false }
    ]

    return { 
      tabs
    }
  }
};




</script>