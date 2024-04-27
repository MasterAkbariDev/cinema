import React, { useEffect } from 'react'
import MainLayout from '../Components/MainLayout'
import Banner from '../Components/Main/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { FindMovie } from '../store/reducer'
import Default_Movies from '../data/data'

const Home = () => {

  const dispatch = useDispatch()
  const Movies = useSelector(state => state.movies.content)

  useEffect(() => {
    if (Movies?.length < 1) {
      const randomNumber = Math.floor(Math.random() * Default_Movies.length)
      dispatch(FindMovie(Default_Movies[randomNumber]))
    }
  }, [Movies , dispatch])


  return (
    <MainLayout>
      <Banner Trailer={Movies.trailerLink && Movies.trailerLink} Released={Movies?.Released} imdbRating={Movies?.imdbRating} Title={Movies?.Title} image={Movies?.Poster} Year={Movies?.Year} Rated={Movies?.Rated} Runtime={Movies?.Runtime} Genre={Movies?.Genre} Plot={Movies?.Plot} />
    </MainLayout>
  )
}

export default Home