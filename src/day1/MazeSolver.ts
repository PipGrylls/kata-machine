function walk(maze: string[], wall: string, end: Point, current: Point, path: Point[], seen: Point[]): boolean{
    //Base Cases
    if(current.x === end.x && current.y == end.y){
        path.push(current)
        return true
    }
    if(maze[current.y][current.x] === undefined){
        return false
    }
    if(maze[current.y][current.x] === wall){
        return false
    }
    for(let i=0; i<seen.length; i++){
        if(current.x === seen[i].x && current.y === seen[i].y){
            return false
        }
    }

    //Pre
    seen.push(current)

    //Recurse
    if (walk(maze, wall, end, {x: current.x, y: current.y + 1} as Point, path, seen)){
        
    } else
    if (walk(maze, wall, end, {x: current.x+1, y: current.y} as Point, path, seen)){

    } else 
    if (walk(maze, wall, end, {x: current.x, y: current.y - 1} as Point, path, seen)){

    } else
    if (walk(maze, wall, end, {x: current.x-1, y: current.y} as Point, path, seen)){

    } else {
        return false
    }

    //Post
    path.push(current)
    return true

}



export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let seen: Point[] = []
    let path: Point[] = []
    if (walk(maze, wall, end, start, path, seen)){
        return path.reverse()
    } else {
        return path
    }
    

}