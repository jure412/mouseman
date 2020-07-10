import React, { useState, useEffect, useRef } from 'react'
import './MouseMan.scss'
import {generatedCells, wallIdentifier, foodArray, huntersCords} from '../extra/PacManHelpers'
import Field from '../components/Field'
import PacmanModal from '../components/PacmanModal'
import { Cell} from '../extra/types';
import { IHunter, ICharacterMove, IHunterCord } from '../extra/Interfaces';
import { AiFillHeart } from 'react-icons/ai';
import { GiBackstab } from 'react-icons/gi';


const MouseMan = (): JSX.Element => {
    const hunterInitial =  
        [
            {row: 7, col: 7, i: 0},
            {row: 5, col: 4, i: 1},
            {row: 5, col: 10, i: 2},
            {row: 9, col: 4, i: 3},
            {row: 9, col: 10, i: 4},
        ]
    const [pacmanCol, setPacmanCol] = useState<number | null>(null)
    const [pacmanRow, setPacmanRow] = useState<number | null>(null)
    const [pacmanOld, setPacmanOld] = useState<any | null>(null)
    const [foodCord, setFoodCord] = useState<number[][] | null>(null) 
    const [hunters, setHunters] = useState<any | null >(null)
    const [oldHunters, setOldHunters] = useState<any>(null)
    const [huntersMovingTransition, setHuntersMovingTransition] = useState<any>(null)
    const [points, setPoints] = useState<number | null>(null)
    const clickButton = useRef<HTMLInputElement>(null)
    const [start, setStart] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [newDirection, setNewDirection] = useState<string | null>(null)
    const [approvedDirection, setApprovedDirection] = useState<string | null>(null)
    const gCells = generatedCells(pacmanRow, pacmanCol, foodCord, hunters)
// console.log(hunters)
    const handleDirections = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 37) {
            // left
            setNewDirection('left')
        } else if(e.keyCode === 38) {
            // up
            setNewDirection('up')
        } else if(e.keyCode === 39) {
            // right
            setNewDirection('right')
        } else if(e.keyCode === 40) {
            //down
            setNewDirection('down')
        }
    } 

    const handleCords = () => {
        
        let cords: [{row: number, col: number}] | any;
        if(pacmanCol !== null && pacmanRow !== null) {
            if(newDirection === "left" && pacmanCol > 0 && !wallIdentifier(pacmanRow, pacmanCol-1)) {
                // left
                setApprovedDirection('left')
                // setPacmanCol((num: any) => num-1)
                cords = [{row: pacmanRow,col: pacmanCol-1}]
            } else if(newDirection === "up" && pacmanRow > 0 && !wallIdentifier(pacmanRow-1, pacmanCol)) {
                // up
                setApprovedDirection('up')
                // setPacmanRow((num: any) => num-1)
                cords = [{row: pacmanRow-1,col: pacmanCol}]
            } else if(newDirection === "right" && pacmanCol < 14 && !wallIdentifier(pacmanRow, pacmanCol+1)) {
                // right
                setApprovedDirection('right')
                // setPacmanCol((num: any) => num+1)
                cords = [{row: pacmanRow,col: pacmanCol+1}]
            } else if(newDirection === "down" && pacmanRow < 14 && !wallIdentifier(pacmanRow+1, pacmanCol)) {
                //down
                setApprovedDirection('down')
                
                cords = [{row: pacmanRow+1, col: pacmanCol}]
                // setPacmanRow((num: any) => num+1)
                // console.log('in', pacmanRow)
            }  else {
                cords = [{row: pacmanRow, col: pacmanCol}]
            }
        }  
       return cords 
    }
    // console.log('out', hunters)
    const filterFood = () => {
        const cordinates = [pacmanRow, pacmanCol]
        if(foodCord) {
            const index = foodCord.findIndex(cord => {
                return cord.toString() === cordinates.toString()
                }
            )
            if(index !== -1) {
                points !== null && setPoints(points + 1 )
                foodCord.splice(index, 1)
                setFoodCord(foodCord)
            }
        }
    }

    const cordMoving = (oldHuntersCord: IHunter[], newHuntersCord: IHunter[]) => {
        // console.log(oldHuntersCord, ' ', newHuntersCord)
        return oldHuntersCord?.map((hunter:IHunter, index:number) => {
            // console.log(hunter.i)
            const hunterIndex: number | undefined  = hunter.i 
            if(hunter?.col === newHuntersCord[index].col) {
                // console.log(hunter.row, '+', newHuntersCord[index].row, ' =', hunter.row - newHuntersCord[index].row)
                return {direction: 'row', value: hunter?.row - newHuntersCord[index].row, newRow: newHuntersCord[index].row, newCol: newHuntersCord[index].col, i: hunterIndex !== undefined && hunterIndex+1}
            }
            if(hunter?.row === newHuntersCord[index].row) {
                // console.log(hunter.col, '+', newHuntersCord[index].col, ' =', hunter.col - newHuntersCord[index].col)
                return hunter && {direction: 'col', value: hunter?.col - newHuntersCord[index].col, newRow: newHuntersCord[index].row, newCol: newHuntersCord[index].col, i: hunterIndex !== undefined && hunterIndex +1}
            }
        })
    }


    const historyFind = (rowIndex: number, colIndex:number) => {
        return huntersMovingTransition?.find((hunterMove: ICharacterMove ) => {
            // console.log(hunterMove.newRow === rowIndex && hunterMove.newCol === colIndex)
            if(hunterMove.newRow === rowIndex && hunterMove.newCol === colIndex) {
                // console.log(hunterMove)
                return hunterMove
            }
        })
    }

    useEffect(() => {
        setLoading(true)
        if (start === true) {
            setPoints(0)
            setPacmanCol(0)
            setPacmanRow(0)
            setHunters(hunterInitial)
            setFoodCord(foodArray())
            setPacmanOld([{row: 0, col: 0}])
            setLoading(false)
        } 
        setLoading(false)
    }, [start])

    useEffect(() => {
        setOldHunters(hunters)
        
        let interval = setInterval(() => {
            if(points !== null && points !== 0 && points % 147 === 0) {
                setFoodCord(foodArray())
                setHunters(hunterInitial)
            }
            hunters?.map((hunter: IHunter) => {
                if (hunter.row === pacmanRow && hunter.col === pacmanCol) {
                    setStart(false)
                }
            })
            
            const newPacmanCords: IHunterCord[] = handleCords() !== undefined ? handleCords() : [{row: 0, col: 0}]
            filterFood()
            const huntersCordsResult = huntersCords(hunters)
            setHunters(huntersCordsResult)
            const movingPacman:any  = cordMoving(pacmanOld, newPacmanCords)
            const movingHunters = cordMoving(oldHunters, huntersCordsResult)
            // console.log(pacmanOld, ' ', newPacmanCords)
            const moving = movingPacman !== undefined && movingHunters !== undefined && movingPacman.newRow !== null ? movingHunters.concat(movingPacman) : movingHunters;
            // console.log(moving)
            setHuntersMovingTransition(moving)
            setPacmanRow(newPacmanCords[0].row)
            setPacmanCol(newPacmanCords[0].col)
            setPacmanOld([{row: newPacmanCords[0].row, col: newPacmanCords[0].col}])
            
        }, 100);
        return () => clearInterval(interval);
    }, [pacmanCol, pacmanRow, newDirection, approvedDirection, hunters, oldHunters, pacmanOld])



   
    const renderCells = (): React.ReactNode => {
        return start === true && gCells?.map((row: Cell[], rowIndex: number) => 
            row.map((cell: Cell, colIndex:number) => {
                    // console.log(cell)
                  return <Field
                        key={`${rowIndex}-${colIndex}`}
                        state={cell.state}
                        history={historyFind(rowIndex, colIndex)}
                    />
                }
            )
            )
    } 

    return (
        <div className="pacman">
            <div className="pacman-container">
                <div className="pacman-container-head">
                    <div className="pacman-container-head-lives">
                        <AiFillHeart/>
                        <AiFillHeart/>
                        <AiFillHeart/>
                    </div>
                    <div className="pacman-container-head-points">
                    <GiBackstab/><span>{points}</span>
                    </div>
                </div>
                <div className="pacman-container-border"/>        
                <div className="pacman-container-body">
                    
                    {
                        !start ?  
                        <PacmanModal title={'helo'} desc={'Make money'} button={'start'} clickButton={clickButton} setStart={setStart}/> 
                        :  
                        renderCells()
                    }
                </div>  
                               
            </div>
            {clickButton && <input type="text" ref={clickButton} onKeyDown={handleDirections} />}
        </div>
    )
}

export default MouseMan
