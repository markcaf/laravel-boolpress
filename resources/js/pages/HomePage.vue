<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col mt-5">
            <h1>Recent posts:</h1>
            <div class="posts">
                <div class="row">
                    <PostCard v-for="post in posts" :key="post.id" :post="post" />
                </div>
            </div>

            <div class="d-flex align-items-center justify-content-around mb-5 mt-3">
                <a :class="currentPage != 1 ? '' : 'disabled'" class="btn btn-primary" @click="getPrevPage(), getPosts()">Prev Page</a>
                <div class="ms_current_page font-weight-bold">{{currentPage}}</div>
                <a :class="currentPage >= 9 ? 'disabled' : ''" class="btn btn-primary" @click="getNextPage(), getPosts()">Next Page</a>
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
        name: 'HomePage',
        components: {
          PostCard,
        },

        data: function(){
            return{
                posts: [],
                currentPage: 1,
                lastPage: null,
                loading: false,
            }
        },

        methods: {
          
            getNextPage() {
                this.currentPage++;   
            },
            getPrevPage() {
                this.currentPage--;
            },

            getPosts(){
                axios.get('/api/posts' , {
                    params: {
                        page: this.currentPage,
                    }
                }).then((response) => {
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                }).catch((error) => {
                    console.error(error);
                })
            }
         },

        created(){
            this.getPosts();
        }
    }
</script>

<style>

</style>