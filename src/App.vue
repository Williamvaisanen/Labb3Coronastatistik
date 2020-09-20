<template>
  <div id="app">
    <h1>{{$store.state.titel}}</h1>

    <ul>
      <li>
        <router-link to="/home">Världen</router-link>
      </li>

      <li>
        <router-link to="/Countries">Länder</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
