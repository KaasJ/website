<template>
  <div>
    <p>
      Welcome! I'm a full stack developer who can build apps from the ground up. I enjoy working in a dynamic and agile environments on products that have business and social impact. 
      My background in business administration helps me to better understand the business request. 
      I'm generally a flexible, social and responsible person that likes to learn and try new things. 
    </p>
    <p class="text-neutral-500 space-x-3 mt-3">
      <a href="https://github.com/KaasJ" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/jorritstein/" target="_blank">LinkedIn</a>

    </p>
    <br />
    <hr />

    <div class="flex" v-for="post of slizedPosts" :key="post.slug">
      <div class="relative mt-5 w-full">
        <i class="mt-5 lg:mt-0 lg:absolute lg:-left-40 text-sm"> {{ toDate(post.date)}}</i>

        <!-- <h1> {{ post.title }}</h1> -->
        <h1 class="mt-0"> {{ post.description }} </h1>
        <nuxt-content class="mt-5" :document="post" />
        <br>
      </div>
    </div>
    
    <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-5">
      <div class="lg:-mt-px lg:flex mx-auto">
        <a v-for="page of pages" 
          @click="pageNumber = page" 
          :key="page + 'index'" 
          :class="['inline-flex items-center border-t-2  px-4 pt-4 text-sm font-medium', pageNumber === page ? 
            'border-indigo-500 text-indigo-600' : 
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' ]">
          {{ page }}
        </a>
      </div>
    </nav>
  </div>
</template>


<script>

const limit = 5 

export default {
  name: 'blog',
  head() {
    return {
      title: 'Home - Jorrit Stein'
    }
  },
  data() {
    return {
      pageNumber: 1,
    }
  },
  computed: {
    pages() { 
      return this.range(Math.ceil(this.posts.length / limit))
    },
    slizedPosts() {
      return this.posts.slice(limit * (this.pageNumber - 1), limit * this.pageNumber)
    }
  },
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();
    return {
      posts,
    }
  },
  methods: {
    //to do use luxon 
    toDate(date) {
      return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
    },
    range(length) {
      return Array.from({ length }, (_, i) => i + 1)
    }
  },


}
</script>