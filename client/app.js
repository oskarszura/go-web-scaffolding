const Elm = require('./Trips.elm');

const mountNode = document.querySelector('.js-trips');
const app = Elm.Main.embed(mountNode);