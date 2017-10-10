<template>
  <section id="login">
    <div class="container fluid">
      <div class="row">
        <div class="center col-md-6">
          <div class="form-wrap">
            <h4>Login</h4>
            <form role="form" id="login-form" autocomplete="off">
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" value="somebody@example.io">
              </div>
              <div class="form-group">
                <label for="key" class="sr-only">Password</label>
                <input type="password" name="key" id="key" class="form-control" value="Passw0rd">
              </div>
              <router-link v-bind:to="'/search'">
              <input type="submit" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Log in">
              </router-link>
            </form>
            <a href="javascript:;" class="forget">Forgot your password?</a>
            <hr>
          </div>
        </div>
        <!-- /.col-xs-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: 'login'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.center {
  margin-left: auto;
  margin-right: auto;
}

.form-wrap {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  padding: 10px 50px 30px 50px;
  margin-top: 100px;
}

body {
  height: 100%;
  background-image: url(https://source.unsplash.com/collection/202618);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
#btn-login {
  text-decoration: none;
}
</style>
