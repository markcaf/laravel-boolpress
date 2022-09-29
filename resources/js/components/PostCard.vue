<template>
  <div class="col-4 p-3">
    <div class="card">
      <img :src="isValidURL(post.post_image) ? post.post_image : 'storage/' + post.post_image" class="ms_post_image card-img-top" :alt="post.title">
      <div class="card-body bg-white">
        <p class="card-text text-center">
          Post title: <br /><strong>{{ post.title }}</strong>
        </p>
      </div>
    </div>

    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item ms_author">
          <strong>Author:</strong> {{ post.user.name }}
        </li>
        <li class="list-group-item ms_post_content">
          {{ post.post_content.substring(0, 150) }}...
        </li>
        <li class="list-group-item ms_post_id">
            <strong>Post ID:</strong> {{ post.id }}
        </li>
        <li class="list-group-item ms_post_date">
          <strong>Post Date:</strong> {{ post.post_date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],

  methods:{
    isValidURL(string) {
      var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if(!regex .test(string)) {
        return false;
      } else {
        return true;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: 300px;
    }

    .ms_post_image{
        object-fit: cover;
    }
</style>