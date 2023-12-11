<script>

export default {
  name: "MainNav"
}


</script>


<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link to="/" class="nav-link px-2 link-secondary">
              Home
            </router-link>
          </li>

          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Gallery</a> -->
            <router-link to="/images" class="nav-link px-2 link-secondary">
              Gallery
            </router-link>

          </li>

          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">About</a> -->
            <router-link to="/about" class="nav-link px-2 link-secondary">
              About
            </router-link>

          </li>

          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Contact</a> -->
            <router-link to="/contact" class="nav-link px-2 link-secondary">
              Contact
            </router-link>

          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>