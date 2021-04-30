const fs = require('fs');
const Dijkstra = require('./dijkstra');
const graph = JSON.parse(fs.readFileSync('graph.json', 'utf8'));

const dijkstra = new Dijkstra(graph);
console.log(JSON.stringify(dijkstra.shortestPath("8", "6")));