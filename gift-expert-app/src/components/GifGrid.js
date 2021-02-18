import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );


 
    return ( 
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading ? <p className="animate__animated animate__lightSpeedInRight">"Cargando..."</p> : null }

            <div className="card-grid">
                
                    {/* Sin destructuracion */}
                    {/* { images.map( img => (
                        <li
                            key= {img.id}
                            value= {img.title}
                        ><img src={ img.url } alt={img.title}/></li>
                    ))} */}

                    {/* Con destructuracion */}
                   { images.map( img => (
                        <GifGridItem 
                            key= { img.id }
                            { ...img }
                        />
                    ))}
            </div>
        </>
     );
}
 
export default GifGrid;