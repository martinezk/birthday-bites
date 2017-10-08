<template>
  <div id="search" class="container">
    <div class="form-group row">
      <label for="search-input" class="col-2 col-form-label">Enter Birthdate</label>
      <div class="col-8">
        <input class="form-control" type="search" placeholder="MM/DD/YYYY" id="search-input">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4" v-bind:key="result.title" v-for="result in results">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title featured">{{ result.recalling_firm }}</h4>
            <p class="card-text">{{ result.product_description }}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link v-bind:to="'/'">Back to Home</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      results: []
    }
  },
      mounted() {
      axios.get("https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=6")
        .then(response => { this.results = response.data.results })
    }
  }
/*export default {
  data() {
    return {
      results: [
        { title: "the very first post", abstract: "lorem ipsum some test dimpsum" },
        { title: "and then there was the second", abstract: "lorem ipsum some test dimsum" },
        { title: "third time's a charm", abstract: "lorem ipsum some test dimsum" },
        { title: "four the last time", abstract: "lorem ipsum some test dimsum" }
      ]
    };
  }
};*/
</script>
<!-- styling for the component -->
<style>
#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>