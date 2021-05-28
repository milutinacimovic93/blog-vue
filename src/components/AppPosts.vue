<template>
  <div>
    <ul v-for="post in posts" :key="post.id">
      <div>
        <b>Title:</b> {{post.title}}
        <router-link :to="`/post/${post.id}`" class="btn btn-primary">View Post</router-link>
      </div>
    </ul>
  </div>
</template>

<script>
  import PostsService from "../services/PostsService.js";

  export default {

    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.posts = await PostsService.getAll();

    },

    methods: {
      async getAllPosts() {
        this.posts = await PostsService.getAll();
      },
    },


  };
</script>

<style>
</style>