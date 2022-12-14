import { useContext } from 'react'
import { HeroesContext } from '../heroes/context/HeroesContext'

//hook for heroes
export const useHeroes = () => {
    const{
        state: {data, isLoading},
        actions: {getHeroById,getHeroByName,getHeroesByPublishers,getPublishers},
    } = useContext(HeroesContext)

  return {data, isLoading, getHeroById, getHeroByName, getHeroesByPublishers, getPublishers}
}