<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Boolpress</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">
            Contacts
          </router-link>
        </li>
      </ul>
      <a href="/admin" class="btn btn-outline-primary my-2 my-sm-0">Login</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'HeaderComponent',

}
</script>

<style>

</style>