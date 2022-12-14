import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { CheckingAuth } from '../auth/components/CheckingAuth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const AppRouter = () => {
  const {status} = useCheckAuth()
  if(status === 'checking') return <CheckingAuth/>
  return (
    <>          
      <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={<HeroesRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes/>}/>
        }
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
        
      </Routes> 
    </>
  )
}