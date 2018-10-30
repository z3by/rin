module.exports.addCountries = () => {
  axios.get("https://restcountries.eu/rest/v2/all").then(result => {
    for (let i = 0; i < result.data.length; i++) {
      if (i === 33 || i === 79) {
        //this condition was set because record 33 has a problem, which causes a server error
        continue;
      }

      const data = result.data[i];
      let id = i + 1;
      let name = data.name;
      let capital = data.capital;
      let region = data.region;
      let population = data.population;
      let lat = data.latlng[0];
      let lng = data.latlng[1];

      const qry = `insert into countries values(${id}, "${name}", "${capital}", "${region}", ${population}, ${lat}, ${lng});`;

      connection.query(qry, err => {
        if (err) throw err;
        console.log("row inserted", i);
      });
    }
  });
};
