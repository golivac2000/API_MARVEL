
import {Routes, Route} from 'react-router-dom'

import { HomePagina } from '../paginas/HomePagina'
import { HeroesPagina } from '../paginas/HeroesPagina'
import { HeroePagina } from '../paginas/HeroePagina'
import { AcercaDePagina } from '../paginas/AcercaDePagina'
import { NotFoundPagina } from '../paginas/NotFoundPagina'
import { LayoutComponent } from '../componentes/LayoutComponent'



export const AppRouter = () => {
  return (
    <>   

        <LayoutComponent/>
        <Routes>
            <Route index path= '/' element={<HomePagina/>} />
            <Route  path= '/api/heroes' element={<HeroesPagina/>} />
            <Route  path= 'api/heroe/:id' element={<HeroePagina/>} />
            <Route  path= '/about' element={<AcercaDePagina/>} />
            <Route  path= '*' element={<NotFoundPagina/>} />
        </Routes>


    </>

  )
}

