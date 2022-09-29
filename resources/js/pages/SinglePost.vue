<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col my-3">
            <div class="post">
                <div class="row justify-content-center">
                    <PostCard :key="post.id" :post="post" />
                </div>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostCard from '../components/PostCard.vue';
import axios from 'axios';

export default {

    components: {
        PostCard,
    },

    data: function(){
        return{
            post: {
                user: '',
            },
            loading: false,
        }
    },

    methods: {

        getPosts(){
            const id = this.$route.params.id;

            axios.get(`/api/posts/${id}`).then((response) => {
                this.post = response.data.results.data;
                this.loading = false;
            }).catch((error) => {
                console.error(error);
            })
        }
    },

    created(){
        this.getPosts();
    }
};
</script>

<style lang='scss' scoped>

</style>