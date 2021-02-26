<template>
  <div class="hello">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <h5>
              <router-link to="/">Home</router-link>|
              <router-link to="/about">About</router-link>|
            </h5>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <br />

      <h1>Welcome to small coffee</h1>
      <br />

      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="950"
        img-height="500"
      >
        <b-carousel-slide
          caption
          img-src="https://www.buildernews.in.th/wp-content/uploads/2020/02/12.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption
          img-src="https://pbs.twimg.com/media/ELRnkY7UwAMznGd.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption
          img-src="https://www.buildernews.in.th/wp-content/uploads/2020/02/2-2.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <h1>{{ msg }}</h1>
    <h2>{{ gpa }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    gpa: Number,
  },
};
</script>

<style>
h4 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
</style>
