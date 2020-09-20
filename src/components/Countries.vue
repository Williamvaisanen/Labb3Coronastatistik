<template>
  <div id="app">
    <h2>Sverige:</h2>
    <h1>Antal invånare:</h1>
    <h3 id="populationSWE">****</h3>
    <h1>Antal smittade:</h1>
    <h3 id="confirmedSWE">****</h3>

    <h1>Antal döda:</h1>
    <h3 id="deathsSWE" class="dead">****</h3>

    <br />
    <h2>Finland:</h2>
    <h1>Antal invånare:</h1>
    <h3 id="populationFIN">****</h3>
    <h1>Antal smittade:</h1>
    <h3 id="confirmedFIN">****</h3>

    <h1>Antal döda:</h1>
    <h3 id="deathsFIN" class="dead">****</h3>
    <br />
    <h2>USA:</h2>
    <h1>Antal invånare:</h1>
    <h3 id="populationUS">****</h3>
    <h1>Antal smittade:</h1>
    <h3 id="confirmedUS">****</h3>

    <h1>Antal döda:</h1>
    <h3 id="deathsUS" class="dead">****</h3>
  </div>
</template>


<script>
export default {
  name: "Countries",
  components: {},
  mounted() {
    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/205") // länken för sverige (205)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        console.log(data); // skriver ut hela de hämtade paketet i consolen
        let population = data.location.country_population;
        let confirmedCases = data.location.latest.confirmed;
        let deaths = data.location.latest.deaths;

        document.getElementById("deathsSWE").innerHTML = deaths.toLocaleString(
          "en"
        );
        document.getElementById(
          "populationSWE"
        ).innerHTML = population.toLocaleString("en"); // gör så variabeln vissas som text/nummer (med ID)
        document.getElementById(
          "confirmedSWE"
        ).innerHTML = confirmedCases.toLocaleString("en");
      });

    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/106")
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        console.log(data);
        let population = data.location.country_population;
        let confirmedCases = data.location.latest.confirmed;
        let deaths = data.location.latest.deaths;

        document.getElementById("deathsFIN").innerHTML = deaths.toLocaleString(
          "en"
        );
        document.getElementById(
          "populationFIN"
        ).innerHTML = population.toLocaleString("en");
        document.getElementById(
          "confirmedFIN"
        ).innerHTML = confirmedCases.toLocaleString("en");
      });

    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/225")
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        console.log(data);
        let population = data.location.country_population;
        let confirmedCases = data.location.latest.confirmed;
        let deaths = data.location.latest.deaths;

        document.getElementById("deathsUS").innerHTML = deaths.toLocaleString(
          "en"
        );
        document.getElementById(
          "populationUS"
        ).innerHTML = population.toLocaleString("en");
        document.getElementById(
          "confirmedUS"
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

.dead {
  color: red;
}
</style>
