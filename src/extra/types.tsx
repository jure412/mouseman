
export enum CellState {
    open,
    food,
    wall,
    pacman,
    hunters
}

export type Cell = {state: CellState;}; 