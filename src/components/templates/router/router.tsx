import { FC } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Test } from '../../pages/firstTest'
import Main from '../../pages/main/main'
import { LoginPage } from '../../pages/login'
import { Terms } from '../../pages/terms'

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Main/>}></Route>
                <Route path='/test' element={ <Test/>}></Route>
                <Route path='/login' element={ <LoginPage/>}></Route>
                <Route path='/terms' element={ <Terms/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}