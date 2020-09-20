<template>
  <div id="app">
    <h2>Antal smittade:</h2>
    <h3 id="confirmedALL">****</h3>

    <h2>Antal döda:</h2>
    <h3 id="deathsALL">****</h3>
    <div class="Field">
      <input type="checkbox" v-model="randomBoolean" />
      {{ randomBoolean }}
    </div>
    <div class="button">
      <input type="text" v-on:keyup.enter="pressed" value="Tryck Enter" />
    </div>
    <br />
    <br />
    <br />
    <own-button name="Creator" :handleClick="Me"></own-button>
  </div>
</template>


<script>
import Button from "@/components/Button";
export default {
  components: {
    "own-button": Button
  },
  name: "home",
  button: "text",
  props: ["randName", "handleClick"],
  data() {
    return {
      randomBoolean: false,
      pressed() {
        alert("Du tryckte enter");
      },
      Me() {
        return alert("Skapad av William.V");
      }
    };
  },
  mounted() {
    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/latest")
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        console.log(data);

        let confirmedCases = data.latest.confirmed;
        let deaths = data.latest.deaths;

        document.getElementById("deathsALL").innerHTML = deaths.toLocaleString(
          "en"
        );
        document.getElementById(
          "confirmedALL"
        ).innerHTML = confirmedCases.toLocaleString("en");
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#deathsALL {
  color: red;
}
</style>
