import React from 'react'
import {IFields} from '../extra/Interfaces'
import {CellState} from '../extra/types'
import { IoLogoOctocat } from 'react-icons/io';
import { GiRat, GiDeathSkull } from 'react-icons/gi';
import './Field.scss'

const Field: React.FC<IFields> = ({state, history}) => {
    // console.log(state)
    // console.log(history && history)
    const animation = () => {
        if(history?.direction === 'col' && history.value === 1) {
            // top
            return 'move-left' 
        }
        if(history?.direction === 'col' && history.value === -1) {
            // bottom
            return 'move-right' 
        }
        if(history?.direction === 'row' && history.value === 1) {
            // left
            return 'move-top' 
        }
        if(history?.direction === 'row' && history.value === -1) {
            // top
            return 'move-bottom' 
        }
    }

    return (
        <div className={`field ${state === CellState.wall && 'field-wall'} ${state === CellState.pacman && 'field-pacman'} ${state === CellState.food && 'field-food'} ${state === CellState.hunters && 'field-hunters'} ${history !== undefined && animation()} ${history !== undefined &&  'hunter'+history.i }`}  >
            {state === CellState.pacman && <IoLogoOctocat/>}
            {state === CellState.food && <GiRat/>}
            { state === CellState.hunters && <GiDeathSkull/> } 
        </div>
    )
}

export default Field
