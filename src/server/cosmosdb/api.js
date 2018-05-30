import Cat from "./models/cat.model";
import { ReadPreference } from "mongodb";
import connect from './db';

connect();

function getCats(req, res) {
  const docquery = Cat.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(r => {
      res.status(200).json(r);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function getCat(req, res) {
  const docquery = Cat.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(r => {
      res.status(200).json(r);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function req(req, res, next) {
  if (req.auth) {
    next();
  } else {
    res.status(401).json({message: 'Unauthorized!'});
    return;
  }
}

export default {
  getCats,
  getCat,
  req
};