const db = require("../../models/index");
const Op = db.Sequelize.Op;

module.exports.searchDashboard = (req, res) => {
  const input = req.query.input;
  resultArr = [];
  db.Project.findAll({
    attributes: ["id", "name"],
    where: {
      pending: false,
      [Op.or]: [
        { name: { [Op.like]: `%${input}%` } },
        { organization: { [Op.like]: `%${input}%` } },
        { investmentSize: { [Op.lte]: `${Number(input)}` } },
        {
          year: db.sequelize.where(
            db.sequelize.fn("YEAR", db.sequelize.col("year")),
            input
          )
        }
      ]
    }
  })
    .then(result => {
      result.forEach(elem => {
        elem["dataValues"].section = "projects";
        resultArr.push(elem["dataValues"]);
      });
      db.Story.findAll({
        attributes: ["id", "buisness"],
        where: {
          [Op.or]: [
            { buisness: { [Op.like]: `%${input}%` } },
            { buisnessDescription: { [Op.like]: `%${input}%` } }
          ]
        }
      })
        .then(result => {
          result.forEach(elem => {
            elem["dataValues"].section = "stories";
            resultArr.push(elem["dataValues"]);
          });
          db.Article.findAll({
            attributes: ["id", "title"],
            where: {
              [Op.or]: [
                { title: { [Op.like]: `%${input}%` } },
                { subtitle: { [Op.like]: `%${input}%` } }
              ]
            }
          })
            .then(result => {
              result.forEach(elem => {
                elem["dataValues"].section = "articles";
                resultArr.push(elem["dataValues"]);
              });
              db.Research.findAll({
                attributes: ["id", "title"],
                where: {
                  [Op.or]: [
                    { title: { [Op.like]: `%${input}%` } },
                    { subtitle: { [Op.like]: `%${input}%` } },
                    { publisher: { [Op.like]: `%${input}%` } },
                    {
                      year: db.sequelize.where(
                        db.sequelize.fn("YEAR", db.sequelize.col("year")),
                        input
                      )
                    }
                  ]
                }
              })
                .then(result => {
                  result.forEach(elem => {
                    elem["dataValues"].section = "researches";
                    resultArr.push(elem["dataValues"]);
                  });
                  db.Link.findAll({
                    attributes: ["id", "title"],
                    where: {
                      [Op.or]: [
                        { title: { [Op.like]: `%${input}%` } },
                        { subtitle: { [Op.like]: `%${input}%` } }
                      ]
                    }
                  })
                    .then(result => {
                      result.forEach(elem => {
                        elem["dataValues"].section = "links";
                        resultArr.push(elem["dataValues"]);
                      });
                      res.send(resultArr);
                    })
                    .catch(err => {
                      res.send(err);
                    });
                })
                .catch(err => {
                  res.send(err);
                });
            })
            .catch(err => {
              res.send(err);
            });
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
};
