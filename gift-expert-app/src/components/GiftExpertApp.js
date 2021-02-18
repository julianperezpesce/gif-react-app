import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Hi']);


    return ( 


        <> 
            <h2>Gift Expert App</h2>
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr/>            

            <ol>
                { categories.map( category => (
                   
                   <GifGrid 
                    key={ category }
                    category={ category }
                   />
                   
                ))}
                
            </ol>
        </>
     );
}
 
export default GiftExpertApp;