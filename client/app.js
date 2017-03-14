const Elm = require('./Trips/Main.elm');

const mountNode = document.querySelector('.js-trips');

if (mountNode) {
  const app = Elm.Trips.Main.embed(mountNode);

  app.ports.addTrip.subscribe(id => {
    console.log("add trip-", id);
  });

  app.ports.openTrip.subscribe(id => {
    console.log("open trip-", id);
  });
};