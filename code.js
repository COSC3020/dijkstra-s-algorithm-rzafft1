// search through the distances and find the min distance 
// return the unmarked node with the min distance
// initialze the min distance to infinity and the unmarked node to infinity
// search through row 
// if the current node has not been visited
    // update the min distance to the currentnodes distance
    // set the current node as unmarked
// return the currentnode with the smallest min distance
function getUnmarkedNode(dist, visited, n)
{
    let minDist = Infinity
    let unmarked = Infinity
    for (let v = 0; v < n; v++)
    {
        if (visited[v] == false && dist[v] < minDist)
        {
            minDist = dist[v]
            unmarked = v
        }
    }
    return unmarked
}

// initalize sourceNode distance to zero
// initalize first unmarked node to source
// while there are unmarked vertices left 
    // get the unmarked distance/node 
    // check if unmarked is infinity
    // set unmarked to marked 
    // find min distance for every node 
// return distances 
function _dijkstra(graph, sourceNode, visited, dist) 
{
    dist[sourceNode] = 0;
    let unmarked = sourceNode;
    unmarkedNodes = true

    while (unmarkedNodes) 
    {
        unmarked = getUnmarkedNode(dist, visited, graph.length);

        if (unmarked != Infinity) 
        {
            visited[unmarked] = true;
                
            for (let node = 0; node < graph.length; node++) 
            {
                if (!visited[node] && graph[unmarked][node] > 0) 
                {
                    dist[node] = Math.min(dist[node], dist[unmarked] + graph[unmarked][node]);
                }
            }
        }
        else
        {
            unmarkedNodes = false
        }
        
    }
    return dist;
}

// initalize distances to infinity 
// intialize all visited entries to false
// call algorithm
function dijkstra(graph, sourceNode) 
{
    if (graph.length < 1 || graph[0].length < 1) return []
    var dist = Array(graph.length).fill(Infinity) 
    let visited = Array(graph.length).fill(false) 

    let shortestPaths = _dijkstra(graph, sourceNode, visited, dist)
    
    return shortestPaths
}

