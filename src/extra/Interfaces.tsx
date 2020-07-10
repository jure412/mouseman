import {CellState} from './types'

export interface IInput {label: string, name: string,  type: string, error: string | [] | undefined | null, value: string | number | string[] | undefined}
export interface IForm {msg?: string | null | undefined, form:IInput[], forgotPassword?: boolean,  title: string, setFormOnChange: React.Dispatch<React.SetStateAction<IAuthorization>>, handleSubmit?: ((e: React.FormEvent<HTMLFormElement>) => void)}
export interface ITextGroup { key: number; name: string; type: string; label: string; error: string | [] | null | undefined; value: string | number | string[] | undefined, setFormOnChange: React.Dispatch<React.SetStateAction<IAuthorization>>}
export interface ITitleTwo { title:string }
export interface IAuthorization { token?: string, name?: string | undefined, email?: string | undefined, password?: string | undefined, password_confirmation?: string | undefined }
export interface IErrors {name?: [] | null | undefined; email?: [] | null | undefined; password?: [] | null | undefined; }
export interface IFields {state: CellState, history: ICharacterMove|undefined}
export interface IHunters {hunters: IHunter[]}
export interface IHunter {row: number, col: number, i?: number}
export interface IHunterCord {row: number, col: number}
export interface IPacmanCord {row: number, col: number}
export interface ICharacterMove {direction: string, value: number, newRow: number, newCol: number, i?: number}


// export interface IGlobalProvider { state: {}, dispatch: {} }
