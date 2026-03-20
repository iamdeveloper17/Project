import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './features/auth/pages/login'
import Register from './features/auth/pages/Register'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes