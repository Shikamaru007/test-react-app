import React, {useState, useContext} from 'react';
import {nameContext} from './ComponentA';
function ComponentC(){

    const name = useContext(nameContext);
    return(
        <>
            <h1>This is Component C</h1>
            <p>this is {name}</p>
        </>
    )
}

export default ComponentC;