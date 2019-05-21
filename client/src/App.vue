<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="logo">
        <img src="https://epmobile.app/images/phones.png" alt width="40">
        <span>EasyPay</span>
      </router-link>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view/>
    <footer>
      <div class="privacy">
        <span>&copy;2019 INFINYTEL</span>
        <div>
          <span style="margin-right: 15px;">
            <a href="#">Terms</a>
          </span>
          <span>
            <a href="#">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --base_color: rgb(27, 28, 31);
  --red_color: #ce2d25;
  --yellow_color: #fcd117;
  --green_color: #187a5e;
  --white: #ffffff;
  --orange_color: #ff6500;
}

#app {
  font-family: "Nanum Gothic", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

p {
  line-height: 1.6;
  text-align: justify;
}
#nav {
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--base_color);
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  a.logo {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  a {
    font-weight: bold;
    color: var(--white);
    margin-right: 10px;
    text-decoration: none;
    &.router-link-exact-active {
      color: var(--yellow_color);
    }
  }
}

/* Footer */
footer {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: var(--base_color);
  overflow: hidden;
  z-index: -4;
}

footer .privacy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  height: 50px;
  width: 100%;
  background-color: var(--base_color);
  padding: 0 200px;
}
</style>
