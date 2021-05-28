<template>
    <div>
        <form @submit.prevent="add">
            <div>
                <label name="title">Title</label>
                <input type="text" name="title" placeholder="Title" v-model="newPost.title" required />
            </div>
            <div>
                <label>Text</label>
                <textarea rows="3" v-model="newPost.text"></textarea>
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Add Post</button>
            </div>
            <div> 
                <button @click="reset" class="btn btn-primary">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
    import PostsService from "../services/PostsService.js";
    export default {
        data() {
            return {
                newPost: {
                    title: "",
                    text: "",
                },
            }
        },
        methods: {
            add() {
                PostsService.add(this.newPost);
                this.$router.push({
                    name: "Posts"
                });
            },
            reset() {
                (this.newPost.title = ""), 
                (this.newPost.text = "");
            }
        },
    }
</script>