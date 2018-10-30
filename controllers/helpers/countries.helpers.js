const axios = require("axios");

module.exports.addCountries = connection => {
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

// check if countries table is filled already
module.exports.checkIfCountriesExists = (connection, cb) => {
  const countriesNumQry = "select count(*) from countries";

  connection.query(countriesNumQry, (err, res) => {
    if (err) throw err;

    const countriesNum = res[0]["count(*)"];

    let created = countriesNum > 0 ? true : false;
    cb(created);
  });
};
