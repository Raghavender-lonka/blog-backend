const articleData = require("../models/articlesData")

const data = (req, res) => {
  res.send(articleData)
}

const categoryControl = (req, res) => {
  let query = req.query.category
  let article = articleData.filter((item) => item.category === query)
  res.send(article)
}

const idControl = (req, res) => {
  let param = req.params.id
  let article = articleData.filter((item) => item.id === +param)
  res.send(article)
}

module.exports = { data, idControl, categoryControl }
