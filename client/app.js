const Elm = require('./Trips/Main.elm');

const mountNode = document.querySelector('.js-trips');
const app = Elm.Trips.Main.embed(mountNode);