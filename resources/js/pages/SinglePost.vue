<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col my-3">
            <div v-if="isLoading" class="loader">
                <MainLoader />
            </div>

            <div v-else class="post">
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
import MainLoader from '../components/MainLoader.vue';
import axios from 'axios';

export default {

    components: {
        PostCard,
        MainLoader,
    },

    data: function(){
        return{
            post: {
                user: '',
            },
            isLoading: true,
        }
    },

    methods: {

        getPosts(){
            const id = this.$route.params.id;

            axios.get(`/api/posts/${id}`).then((response) => {
                this.post = response.data.results.data;
                this.isLoading = false;
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