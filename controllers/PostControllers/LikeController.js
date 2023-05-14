const model = require("../../models/PostModels/Likes.js")

const generalLikeController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const userPostLikeController = {
  get:(req, res) => {
    console.log('success get')
  },
  post:(req, res) => {
    console.log('success post')
  },
  patch:(req, res) => {
    console.log('success put')
  },
  delete:(req, res) => {
    console.log('success delete')
  }
}

const postPostLikeController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const postUserLikeController = {
  get:(req, res) => {
    console.log('success get')
  }
}

module.exports = {generalLikeController, userPostLikeController, postPostLikeController, postUserLikeController};