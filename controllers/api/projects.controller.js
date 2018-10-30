const mysql = require("mysql");
const axios = require("axios");
const dbConfig = require("../db.config");
const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) throw err;
  console.log("connected");
});

module.exports.getProjects = (req, res) => {
  connection.query("select * from projects", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

const getCountryIdByName = (countryName, cb) => {
  let qry = `select id from countries where name="${countryName}"`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    cb(result[0]["id"]);
  });
};

// helper function to check if the admin enered the field and return the proper query
const checkInputAndModifyQuery = (qry, input) => {
  if (input.organizationName) {
    qry += ` and p.organization_name like "%${input.organizationName}%"`;
  }

  if (input.projectName) {
    qry += ` and p.title like "%${input.projectName}%"`;
  }

  if (input.capacity) {
    qry += ` and p.capacity < ${input.capacity}`;
  }

  if (input.country) {
    getCountryIdByName(input.country, id => {
      qry += ` and l.country_id = ${id}`;
    });
  }

  if (input.type) {
    qry += ` and p.type = "${input.type}"`;
  }

  if (input.year) {
    qry += ` and YEAR(p.start_date) = ${input.year}`;
  }
  return qry;
};

module.exports.getLocations = (req, res) => {
  const filterOptions = req.query;

  let qry =
    "select p.id, l.lat, l.lng, p.type from projects p inner join locations l where p.location_id = l.id";

  qry = checkInputAndModifyQuery(qry, filterOptions);
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.getProjectCountry = (req, res) => {
  let qry = `select c.name from countries c inner join locations l where c.id = l.country_id and l.id=${
    req.params.id
  };`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.getProject = (req, res) => {
  let qry = `select * from projects where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

addProjInExistLoc = data => {
  let qry = `insert into projects(title, start_date, capacity, location_id, organization_name, img_url, type, project_description) values("${
    data.title
  }", '${data.start_date}', ${data.capacity}, ${data.location_id}, "${
    data.organization_name
  }", "${data.img_url}", "${data.type}", "${data.project_description}");`;
  connection.query(qry, (err, result1) => {
    if (err) throw err;
  });
};

addProjInNewLoc = data => {
  let qry = `insert into projects(title, start_date, capacity, location_id, organization_name, img_url, type, project_description) values("${
    data.title
  }", '${data.start_date}', ${data.capacity}, ${data.location_id}, "${
    data.organization_name
  }", "${data.img_url}", "${data.type}", "${data.project_description}");`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
  });
};

getNewLocId = req => {
  let getNewLocationIDQry = `select id from locations where lat like ${
    req.body.lat
  } AND lng like ${req.body.lng};`;
  let newID;
  connection.query(getNewLocationIDQry, (err, result) => {
    if (err) throw err;
    newID = result[0].id;
    let data = {
      title: req.body.title,
      start_date: req.body.start_date,
      capacity: req.body.capacity,
      location_id: newID,
      organization_name: req.body.organization_name,
      img_url: req.body.img_url,
      type: req.body.type,
      project_description: req.body.project_description
    };
    addProjInNewLoc(data);
  });
};

addNewLoc = (req, countryId) => {
  let locationData = {
    country_id: countryId,
    lng: req.body.lng,
    lat: req.body.lat
  };

  let addNewLocationQry = `insert into locations(country_id, lng, lat) values(${
    locationData.country_id
  }, ${locationData.lng}, ${locationData.lat});`;
  connection.query(addNewLocationQry, (err, result) => {
    if (err) throw err;
    getNewLocId(req);
  });
};

getCountryId = req => {
  let getCountryIDQry = `select id from countries where name="${
    req.body.countryName
  }"`;

  connection.query(getCountryIDQry, (err, result) => {
    if (err) throw err;

    let countryId = result[0].id;
    addNewLoc(req, countryId);
  });
};

module.exports.addProject = (req, res) => {
  let getLocationIDQry = `select id from locations where lat like ${
    req.body.lat
  } AND lng like ${req.body.lng};`;
  let id;
  connection.query(getLocationIDQry, (err, result) => {
    if (err) throw err;

    let data = {
      title: req.body.title,
      start_date: req.body.start_date,
      capacity: req.body.capacity,
      organization_name: req.body.organization_name,
      img_url: req.body.img_url,
      type: req.body.type,
      project_description: req.body.project_description
    };
    if (result[0]) {
      //location exists
      data.location_id = result[0].id;
      //call addProjInExistLoc function
      addProjInExistLoc(data);
      res.send("project row inserted successfully");
    } else {
      // location doesn't exist => add location
      //get country id from country name returned by map api by calling getCountryId
      getCountryId(req);
      //call addNewLoc
      //call getNewLocId
      //call addProjInNewLoc
      res.send(
        "project row inserted successfully and a new location row inserted"
      );
    }
  });
};

module.exports.updateProject = (req, res) => {
  let getLocationIDQry = `select id from locations where lat like ${
    req.body.lat
  } AND lng like ${req.body.lng};`;
  let id;
  connection.query(getLocationIDQry, (err, result) => {
    if (err) throw err;

    let data = {
      title: req.body.title,
      start_date: req.body.start_date,
      capacity: req.body.capacity,
      organization_name: req.body.organization_name,
      img_url: req.body.img_url,
      type: req.body.type,
      project_description: req.body.project_description
    };

    if (result[0]) {
      //location exists
      data.location_id = result[0].id;

      let qry = `UPDATE projects 
                  SET title="${data.title}", start_date='${
        data.start_date
      }', capacity=${data.capacity}, organization_name="${
        data.organization_name
      }", img_url="${data.img_url}", type="${
        data.type
      }", project_description="${data.project_description}"
                  WHERE id=${req.params.id};`;
      connection.query(qry, (err, result) => {
        if (err) throw err;
        res.send("project row updated successfully");
      });
    } else {
      // location doesn't exist => add location
      //get country id from country name returned by map api
      let getCountryIDQry = `select id from countries where name="${
        req.body.countryName
      }"`;
      let countryId;
      connection.query(getCountryIDQry, (err, result) => {
        if (err) throw err;
        //res.send("project row inserted successfully");
        //console.log(result);
        countryId = result[0].id;

        let locationData = {
          country_id: countryId,
          lng: req.body.lng,
          lat: req.body.lat
        };

        //add the new location
        let addNewLocationQry = `insert into locations(country_id, lng, lat) values(${
          locationData.country_id
        }, ${locationData.lng}, ${locationData.lat});`;
        connection.query(addNewLocationQry, (err, result) => {
          if (err) throw err;

          let getNewLocationIDQry = `select id from locations where lat like ${
            req.body.lat
          } AND lng like ${req.body.lng};`;
          let newID;
          connection.query(getNewLocationIDQry, (err, result) => {
            if (err) throw err;
            newID = result[0].id;
            let data = {
              title: req.body.title,
              start_date: req.body.start_date,
              capacity: req.body.capacity,
              location_id: newID,
              organization_name: req.body.organization_name,
              img_url: req.body.img_url,
              type: req.body.type,
              project_description: req.body.project_description
            };
            let qry = `UPDATE projects 
                  SET title="${data.title}", start_date='${
              data.start_date
            }', capacity=${data.capacity}, location_id=${
              data.location_id
            }, organization_name="${data.organization_name}", img_url="${
              data.img_url
            }", type="${data.type}", project_description="${
              data.project_description
            }"
                  WHERE id=${req.params.id};`;
            connection.query(qry, (err, result) => {
              if (err) throw err;
              res.send(
                "project row updated successfully and a new location row inserted"
              );
            });
          });
        });
      });
    }
  });
};

module.exports.deleteProject = (req, res) => {
  let qry = `delete from projects where id=${req.params.id}`;
  connection.query(qry, (err, result) => {
    if (err) throw err;
    res.send("project row has been deleted successfully");
  });
};

//addProject Algorithm
/*
         - user selects location
         - map api returns the country name, lat, lng
         - check locations table if it includes that location latlng which has been returned from map api
            - get location id from locations where lat="lat" and lng="lng"
         - if location id exists => add project immediately
         - else
           - get country id from country name returned from api
           - add location to locations tale 
           - get location id
           - add project
        */
