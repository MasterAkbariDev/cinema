import React, { Fragment, useEffect, useState } from 'react'
import './Banner.css'
import { useSelector } from 'react-redux'
import Modal from '../Modal/Modal'
import { PlayFill } from 'react-bootstrap-icons'

const Banner = ({ Trailer, Title, image, Year, Rated, Runtime, Genre, Plot, Released, imdbRating }) => {

    const [state, setState] = useState(false)
    const [error, setError] = useState()
    const [showModal, setModal] = useState(false)
    const Loading = useSelector((state) => state.movies.loading)
    const Error = useSelector(state => state.movies.error)

    useEffect(() => {
        if (Loading) {
            setState(false)
        }
        else if (!Loading) {
            const timer = setTimeout(() => {
                setState(true)
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [Loading]);

    useEffect(() => {
        if (Error) {
            setState(false)
            setError(Error)
        }
    }, [Error])

    return (
        <div className={`banner relative w-full min-h-screen py-[100px] overflow-hidden transition-all duration-[0.5s] ${error && 'flex items-center'}`}>
            {error ? (
                <div className='bg-white py-6 w-full'>
                    <h1 className='text-center text-4xl'>Error!</h1>
                    <h3 className='text-center'>{error}</h3>
                    <h3 className='text-center'>Try Again</h3>
                </div>
            ) : (
                <Fragment>
                    <div className='py-[100px] absolute top-0 left-0 w-full h-screen flex flex-col lg:flex-row lg:justify-around items-center overflow-hidden pb-[100px]'>
                        <img key={image} src={image} alt="Background" className={`${state ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute left-0 top-0 h-full w-full object-cover object-center transition-all duration-[0.5s]`} />
                        {Title && (
                            <Fragment>
                                <div className={`flex flex-col md:flex-row justify-center items-center md:justify-around z-[2] lg:w-1/3 w-full transition duration-[0.5s] ${state ? 'scale-100' : 'scale-0'}`}>
                                    <div className='mx-10'>
                                        <div>
                                            <div className='flex'>
                                                <h2 className='mb-4 text-white text-xl'>{Title}</h2>
                                                <span className='bg-primary text-white font-bold p-1 rounded-md ml-5 h-max'>{imdbRating}</span>
                                            </div>
                                            <h4 className='text-[rgba(255,255,2555,0.6)]'>
                                                <span className='px-[10px] pl-0'>{Year}</span>
                                                <span className='px-[10px]'><i className='bg-primary text-white px-[8px] inline-block rounded-[2px]'>{Rated}</i></span>
                                                <span className='px-[10px]'>{Runtime}</span>
                                                <span className='px-[10px] py-0'>{Genre}</span>
                                            </h4>
                                            <p className='text-white text-[1em] font-normal leading-[1.5em] mt-[20px] mr-0 mb-[30px]'>{Plot}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`z-[2] w-full md:w-1/3 flex flex-col items-center transition duration-[0.5s] ${state ? 'scale-100' : 'scale-0'}`}>
                                    <h2 className='text-4xl text-white'>{Released}</h2>
                                    {Trailer && <button onClick={() => setModal(true)} className='justify-center mt-4 text-2xl text-center w-full flex items-center text-primary'><PlayFill size={35} />Watch Trailer</button>}
                                </div>
                            </Fragment>
                        )}
                    </div>
                    {showModal && <Modal movieSrc={Trailer} movieTitle={Title} state={showModal} setState={setModal} />}
                </Fragment>
            )}
        </div>
    )
}

export default Banner