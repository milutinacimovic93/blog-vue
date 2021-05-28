<template>
    <div>
        <h1>{{singlePost.title}}</h1>
        <h2>{{singlePost.text}}</h2>
    </div>
</template>

<script>
    import PostsService from "../services/PostsService.js";
    export default {
        data() {
            return {
                singlePost: {}
            };
        },
        methods: {

        },

        async created() {
            this.singlePost = await PostsService.get(this.$route.params.id);
        },
    }
</script>

<style>

</style>