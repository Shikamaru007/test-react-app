import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB';


export const nameContext = createContext();


function ComponentA(){
    const [name, setName] = useState('Michael');
    return(
        <>
            <h1>This is ComponentA</h1>
            <nameContext.Provider value={name}>
                <ComponentB/>
            </nameContext.Provider>
        </>
    )
}

export default ComponentA;