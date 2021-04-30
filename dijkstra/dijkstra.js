function findNextMinimum(sptSet, distanceMap) {
    let smallest = null;
    let smallestKey = null;

    for (var vertex in distanceMap) {
        if (sptSet[vertex] === undefined && distanceMap[vertex] != null) {
            if (smallest == null || distanceMap[vertex] < smallest) {
                smallest = distanceMap[vertex];
                smallestKey = vertex;
            }
        }
    }

    return smallestKey;
}

function updateShortest(graph, vertex, distanceMap) {
    const adjacencies = graph[vertex];
    const udistance = distanceMap[vertex];

    for (var adjacency in adjacencies) {
        let distance = distanceMap[vertex] + distanceMap[adjacency];

        if (distanceMap[vertex] === null || distance < distanceMap[distance]) {
            distanceMap[adjacency] = distance;
        }
    }
}

function Dijkstra(graph) {
    // We're using the algorithm found here:
    // https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
    this.shortestPath = function (a, b) {
        const sptSet = {};
        const distanceMap = {};

        Object.keys(graph).map(function (key) {
            distanceMap[key] = null;
        });

        // set starting node to 0 distance
        distanceMap[a] = 0;

        while (Object.keys(sptSet).length < Object.keys(graph).length) {
            let nextSmallest = findNextMinimum(sptSet, distanceMap);
            sptSet[nextSmallest] = distanceMap[nextSmallest];

            updateShortest(graph, nextSmallest, distanceMap);
        }

        return distanceMap;
    };
}

module.exports = Dijkstra;