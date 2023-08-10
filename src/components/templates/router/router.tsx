import { FC } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Test } from '../../pages/firstTest'
import Main from '../../pages/main/main'

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/>}></Route>
                <Route path='/test' element={ <Test/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}