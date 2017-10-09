<template>
  <div id="search" class="container">
    <div class="row date">
      <div class="col-md-6">
        <form class="form">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon" id="month-addon">Month: </span>
              <select name="month" class="form-control" aria-describedby="month-addon">
                <option v-for="month in 12" v-bind:key="month.index">{{ month }}</option>
              </select>
              <span class="input-group-addon" id="day-addon">Day: </span>
              <select name="day" class="form-control" aria-describedby="day-addon">
                <option v-for="day in 31" v-bind:key="day.index">{{ day }}</option>
              </select>
              <button v-on:click="searchButton" class="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4" v-bind:key="result.index" v-for="result in results">
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
const FDABaseUrl = "https://api.fda.gov/food/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=6";
function buildUrl(url) {
  return FDABaseUrl + url
}

export default {
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.getItems('home');
  },
  methods: {
    getItems(search) {
      let url = buildUrl(search);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch(error => { console.log(error); });
    },
    searchButton: function (event) {
      alert(this.month)
    },
    date: "recall_initiation_date"
  }
}
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

.card {
  height: 200px;
}

</style>