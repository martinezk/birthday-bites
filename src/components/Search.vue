<template>
  <div id="search" class="container">
    <div class="row date">
      <div class="col-md-6">
        <form class="form">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon" id="month-addon">Month: </span>
              <select name="control-month" class="form-control" aria-describedby="month-addon">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>Octomber</option>
                <option>November</option>
                <option>December</option>
              </select>
              <span class="input-group-addon" id="day-addon">Day: </span>
              <select name="control-day" class="form-control" aria-describedby="day-addon">
                <option selected="selected">1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <div class="btn btn-primary">Search</div>
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
    }
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