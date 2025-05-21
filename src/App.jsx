import Lists from './Lists.jsx'

function App() {

   const fruits = [{id: '1', name: 'apple', cal: '20'},     
                   {id: '2', name: 'banana', cal: '10'}, 
                   {id: '3', name: 'orange',  cal: '90'}];

   const foods = [{id: '4', name: 'eba', cal: '80'},     
                   {id: '5', name: 'amala', cal: '18'}, 
                   {id: '6', name: 'SPag',  cal: '2'}];

    return(
      <>
       <Lists item={fruits} category = "Eso"/>
       <Lists item={foods} category = "Ounje"/>
      </>
    )
}

export default App
