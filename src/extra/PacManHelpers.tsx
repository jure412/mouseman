
import {CellState} from './types'

export const wallArray = [
    [0, 4], [0, 10],
    [1, 1], [1, 2], [1, 4], [1, 6], [1, 8], [1, 10], [1, 12], [1, 13],
    [2, 1], [2, 2], [2, 4], [2, 10], [2, 12], [2, 13],
    [3, 6], [3, 7], [3, 8],
    [4, 1], [4, 3], [4, 4], [4, 10], [4, 11], [4, 13],
    [5, 3], [5, 6], [5, 8], [5, 11],
    [6, 1], [6, 5], [6, 6], [6, 8], [6, 9], [6, 13],
    [7, 1], [7, 3], [7,4], [7, 5], [7, 9], [7, 10], [7, 11], [7, 13],
    [8, 1], [8, 5], [8, 6], [8, 8], [8, 9], [8, 13],
    [9, 3], [9, 6], [9, 8], [9, 11],
    [10, 1], [10, 3], [10, 4], [10, 10], [10, 11], [10, 13],
    [11, 6], [11, 7], [11, 8],
    [12, 1], [12, 2], [12, 4], [12, 10], [12, 12], [12, 13],
    [13, 1], [13, 2], [13, 4], [13, 6], [13, 8], [13, 10], [13, 12], [13, 13],
    [14,4], [14, 10]
]

export const foodArray = () => [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 5],[0, 6], [0, 7], [0, 8], [0, 9],[0, 11], [0, 12], [0, 13], [0, 14],
    [1, 0], [1, 3], [1, 5], [1, 7], [1, 9], [1, 11], [1, 14],
    [2, 0], [2, 3], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 11], [2, 14],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 9], [3, 10], [3, 11], [3, 12], [3, 13], [3, 14],
    [4, 0], [4, 2], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 12], [4, 14], 
    [5, 0], [5, 1], [5, 2], [5, 4], [5, 5], [5, 7], [5, 9], [5, 10], [5, 12], [5, 13], [5, 14], 
    [6, 0], [6, 2], [6, 3], [6, 4], [6, 7], [6, 10], [6, 11], [6, 12], [6, 14], 
    [7, 0], [7, 2], [7, 6], [7, 7], [7, 8], [7, 12], [7, 14], 
    [8, 0], [8, 2], [8, 3], [8, 4], [8, 7], [8, 10], [8, 11], [8, 12], [8, 14], 
    [9, 0], [9, 1], [9, 2], [9, 4], [9, 5], [9, 7], [9, 9], [9, 10], [9, 12], [9, 13], [9, 14], 
    [10, 0], [10, 2], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 12], [10, 14], 
    [11, 0], [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, 9], [11, 10], [11, 11], [11, 12], [11, 13], [11, 14],
    [12, 0], [12, 3], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 11], [12, 14],
    [13, 0], [13, 3], [13, 5], [13, 7], [13, 9], [13, 11], [13, 14],
    [14, 0], [14, 1], [14, 2], [14, 3], [14, 5],[14, 6], [14, 7], [14, 8], [14, 9],[14, 11], [14, 12], [14, 13], [14, 14],
]



export const openFieldArray = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 5],[0, 6], [0, 7], [0, 8], [0, 9],[0, 11], [0, 12], [0, 13], [0, 14],
    [1, 0], [1, 3], [1, 5], [1, 7], [1, 9], [1, 11], [1, 14],
    [2, 0], [2, 3], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 11], [2, 14],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 9], [3, 10], [3, 11], [3, 12], [3, 13], [3, 14],
    [4, 0], [4, 2], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 12], [4, 14], 
    [5, 0], [5, 1], [5, 2], [5, 4], [5, 5], [5, 7], [5, 9], [5, 10], [5, 12], [5, 13], [5, 14], 
    [6, 0], [6, 2], [6, 3], [6, 4], [6, 7], [6, 10], [6, 11], [6, 12], [6, 14], 
    [7, 0], [7, 2], [7, 6], [7, 7], [7, 8], [7, 12], [7, 14], 
    [8, 0], [8, 2], [8, 3], [8, 4], [8, 7], [8, 10], [8, 11], [8, 12], [8, 14], 
    [9, 0], [9, 1], [9, 2], [9, 4], [9, 5], [9, 7], [9, 9], [9, 10], [9, 12], [9, 13], [9, 14], 
    [10, 0], [10, 2], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 12], [10, 14], 
    [11, 0], [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, 9], [11, 10], [11, 11], [11, 12], [11, 13], [11, 14],
    [12, 0], [12, 3], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 11], [12, 14],
    [13, 0], [13, 3], [13, 5], [13, 7], [13, 9], [13, 11], [13, 14],
    [14, 0], [14, 1], [14, 2], [14, 3], [14, 5],[14, 6], [14, 7], [14, 8], [14, 9],[14, 11], [14, 12], [14, 13], [14, 14],
]

export const wallIdentifier = (row:number, col:number) => {
    const cordinates = [row, col]

    return wallArray.some((arr) => {
        return arr.every((prop, index) => {
            return cordinates[index] === prop
        })
        }
    ); 
}




export const generatedCells = (rowField: number | null, colField: number | null, foodCord: number[][]| null, hunters: [{row: number, col:number}]) => {

    const cells:any = []
    for (let row = 0; row < 15; row++) {
        cells.push([])
        for (let col = 0; col < 15; col++) {       
            cells[row].push({
                state: CellState.open,
            })  
            
        }
    }


    
    if(foodCord) {
        foodCord?.map(food => {
            // console.log(food)
            cells[food[0]][food[1]].state = CellState.food
        })
    }
    if (rowField !== null  && colField !== null) {
        // console.log(rowField, ' ', colField)
        cells[rowField][colField].state = CellState.pacman
    } 

    if(hunters) {
        hunters?.map((hunter: {row: number, col: number}) => {
            cells[hunter.row][hunter.col].state = CellState.hunters
        })
    }
    wallArray.map((wall) => {
        cells[wall[0]][wall[1]].state = CellState.wall
    })

    return cells
}

export const randomPicker = (array: number[] | string[]) => {
    const values = array,
    valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse
}
export const getCords = (huntersProps: any) => {
    const result = huntersProps?.map((hunter: any , index: number) => {
        const hunterDirection = randomPicker(['row', 'col'])
        const directionOptions = [1, -1]
        
        if('col' === hunterDirection) {
            const hunterDirectionTurn = randomPicker(directionOptions)
            hunter = {row: hunter.row+hunterDirectionTurn, col: hunter.col, i: index}
        }
        if('row' === hunterDirection) {
            const hunterDirectionTurn = randomPicker(directionOptions)
            hunter = {row: hunter.row, col: hunter.col+hunterDirectionTurn, i: index}
        }
        const isValid = openFieldArray.some((arr) => {
            return hunter.row === arr[0] && hunter.col === arr[1]
        })
        return isValid && hunter
    })
    // console.log()
    return result
}



export const huntersCords = (initialState: any): any => {
        if(initialState !== null && initialState !== undefined) {
            let results: any;
            while (true) {
                results = getCords(initialState)    
                // console.log(results)    

                let resultBool = results?.every( (val: any, i:number, arr:any) => val !== false )  
                // console.log(resultBool)
                if(resultBool) {
                    break
                }
            }
            // console.log(results)
            return results
        } 

}


// export const useHunters = (initialState: any): any => {
    
//     const [hunters, setHunters] = useState<any>(initialState)
//     // console.log(hunters)
//     useEffect(() => {

//         // if(hunters !== null) {
//             let results: any;
//             // console.log('object')
//             while (true) {
//                 results = getCords(hunters)   
//                 // console.log(results)       
//                 let resultBool = results?.every( (val: any, i:number, arr:any) => val !== false )  
//                 console.log(resultBool) 
//                 if(resultBool) {
//                     break
//                 }
//             }
//             // console.log(results)
//             setHunters(results)
//             console.log(hunters)
//             // } 
//         }, [hunters]);

//     console.log(hunters)
//     // console.log(hunters)
//     return [
//         hunters,
//         setHunters
//     ]
// }