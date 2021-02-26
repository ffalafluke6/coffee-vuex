<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Small cafe</b-navbar-brand>
    </b-navbar>
    <main class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product1.name }}</h4>
              </div>
              <div class="card-body">
                <img src="https://cdn.sogoodweb.com/Preview/106/images/te0106-004.png" />
                <ul class="list-unstyled text-small">1325 THB</ul>
                <div id="example-1">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-success"
                    v-on:click="$store.state.product1.amount += 1"
                  >+</button>
                  <p>จำนวน {{ $store.state.product1.amount }} ถุง</p>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-danger"
                    v-on:click="$store.state.product1.amount -= 1"
                  >-</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product2.name }}</h4>
              </div>
              <div class="card-body">
                <img src="https://cdn.sogoodweb.com/Preview/106/images/te0106-005.png" />
                <ul class="list-unstyled text-small">2479 THB</ul>
                <div id="example-2">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-success"
                    v-on:click="$store.state.product2.amount += 1"
                  >+</button>
                  <p>จำนวน {{ $store.state.product2.amount }} ถุง</p>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-danger"
                    v-on:click="$store.state.product2.amount -= 1"
                  >-</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product3.name }}</h4>
              </div>
              <div class="card-body">
                <img src="https://cdn.sogoodweb.com/Preview/106/images/te0106-006.png" />
                <ul class="list-unstyled text-small">1067 THB</ul>
                <div id="example-3">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-success"
                    v-on:click="$store.state.product3.amount += 1"
                  >+</button>
                  <p>จำนวน {{ $store.state.product3.amount }} ถุง</p>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-danger"
                    v-on:click="$store.state.product3.amount -= 1"
                  >-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product4.name }}</h4>
              </div>
              <div class="card-body">
                <img src="https://cdn.sogoodweb.com/Preview/106/images/te0106-007.png" />
                <ul class="list-unstyled text-small">1359 THB</ul>
                <div id="example-4">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-success"
                    v-on:click="$store.state.product4.amount += 1"
                  >+</button>
                  <p>จำนวน {{ $store.state.product4.amount }} ถุง</p>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-danger"
                    v-on:click="$store.state.product4.amount -= 1"
                  >-</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product5.name }}</h4>
              </div>
              <div class="card-body">
                <img src="https://cdn.sogoodweb.com/Preview/106/images/te0106-008.png" />
                <ul class="list-unstyled text-small">950 THB</ul>
                <div id="example-5">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-success"
                    v-on:click="$store.state.product5.amount += 1"
                  >+</button>
                  <p>จำนวน {{ $store.state.product5.amount }} ถุง</p>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-danger"
                    v-on:click="$store.state.product5.amount -= 1"
                  >-</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 fw-normal">{{ $store.state.product6.name }}</h4>
              </div>
              <div class="card-body">
                <img src="https://cdn.sogoodweb.com/Preview/106/images/te0106-009.png" />
                <ul class="list-unstyled text-small">1699 THB</ul>
                <div id="example-6">
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-success"
                    v-on:click="$store.state.product6.amount += 1"
                  >+</button>
                  <p>จำนวน {{ $store.state.product6.amount }} ถุง</p>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-danger"
                    v-on:click="$store.state.product6.amount -= 1"
                  >-</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <h3>รายการสินค้า</h3>
        <header
          class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm"
        >
          <div v-if="$store.state.product1.amount >= 1">
            <img
              src="https://cdn.sogoodweb.com/Preview/106/images/te0106-004.png"
              width="60"
              height="“60”"
            />&nbsp;
            <p1>x{{ $store.state.product1.amount }}</p1>
          </div>
          <div v-if="$store.state.product2.amount >= 1">
            <img
              src="https://cdn.sogoodweb.com/Preview/106/images/te0106-005.png"
              width="60"
              height="“60”"
            />&nbsp;
            <p1>x{{ $store.state.product2.amount }}</p1>
          </div>
          <div v-if="$store.state.product3.amount >= 1">
            <img
              src="https://cdn.sogoodweb.com/Preview/106/images/te0106-006.png"
              width="60"
              height="“60”"
            />&nbsp;
            <p1>x{{ $store.state.product3.amount }}</p1>
          </div>
          <div v-if="$store.state.product4.amount >= 1">
            <img
              src="https://cdn.sogoodweb.com/Preview/106/images/te0106-007.png"
              width="60"
              height="“60”"
            />&nbsp;
            <p1>x{{ $store.state.product4.amount }}</p1>
          </div>
          <div v-if="$store.state.product5.amount >= 1">
            <img
              src="https://cdn.sogoodweb.com/Preview/106/images/te0106-008.png"
              width="60"
              height="“60”"
            />&nbsp;
            <p1>x{{ $store.state.product5.amount }}</p1>
          </div>
          <div v-if="$store.state.product6.amount >= 1">
            <img
              src="https://cdn.sogoodweb.com/Preview/106/images/te0106-009.png"
              width="60"
              height="“60”"
            />&nbsp;
            <p1>x{{ $store.state.product6.amount }}</p1>
          </div>
        </header>

        
        <h4>ราคารวม {{ $store.state.sum + $store.state.product1.amount * $store.state.product1.price + $store.state.product2.amount * $store.state.product2.price + $store.state.product3.amount * $store.state.product3.price + $store.state.product4.amount * $store.state.product4.price + $store.state.product5.amount * $store.state.product5.price + $store.state.product6.amount * $store.state.product6.price }} บาท</h4>
        <button
          type="button"
          class="w-50 btn btn-lg btn-outline-primary"
          v-on:click="$store.state.say('ทำการสั่งซื้อเรียบร้อย')"
        >ยืนยันการสั่งซื้อ</button>
        <br />
        <br />
        <input
          variant="danger"
          type="button"
          class="w-50 btn btn-lg btn-outline-danger"
          value="ยกเลิการสั่งซื้อ"
          onclick="javascript:location.reload();"
        />
      </div>
    </main>
  </div>
</template>


<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#b-navbar {
  color: aliceblue;
}
#nav {
  padding: 50px;
  color: aliceblue;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.d-flex {
  background-color: #a1a1a1;
  color: aliceblue;
}
</style>
