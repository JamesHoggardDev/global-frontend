fetch("http://localhost:3000/gifs?q=dogs")
  .then((r) => r.json())
  .then((gifs) => console.log(gifs)); 