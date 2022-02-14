import React, { useState, useEffect } from 'react';

function Coffees () {
    const [coffeeList, setCoffeeList] = useState();
    useEffect(() => {
        fetch('https://api.sampleapis.com/coffee/hot')
        .then(response => response.json())
        .then(data => setCoffeeList(data)) //when we get list of 22 coffess were gna set it equal to setCoffeeList (so our coffee list will be that array)
        .catch(err => console.error(err))
    }, [])
    return (
        <>
        <h2>Coffee Recipes</h2>
        {!coffeeList
            ? <h3>Loading...</h3>
        
        : <ol>{coffeeList.map(coffee => {
            return <li key ={coffee.id}>{coffee.title}</li>
        })}</ol>
    }
        </>
        )
    }

export default Coffees;