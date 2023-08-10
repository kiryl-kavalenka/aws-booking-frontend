import { FC } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Test } from '../../pages/firstTest'
import Main from '../../pages/main/main'
import { LoginPage } from '../../pages/login'

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/>}></Route>
                <Route path='/test' element={ <Test/>}></Route>
                <Route path='/login' element={ <LoginPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}