import React from 'react'
import styles from './CountryList.module.css'
import CountryItem from './CountryItem.jsx'
import Spinner from "./Spinner.jsx"
import Message from "./Message.jsx"


const CountryList = ({cities, isLoading}) => {
    console.log(cities);

   if(isLoading) return <Spinner /> 

   if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>
    
   const countries = cities.reduce((arr, city ) => {
    if (!arr.map((el)=> el.country).includes(city.country)) {
        return [...arr, {country: city.country, emoji: city.emoji}]
    }

    else return arr
   }, []) 

  return (
    <ul className={styles.countryList}> 

        {countries.map((country,i)=> {
            return <CountryItem country={country} key={i}/>
        })}
    
    </ul>
  )
}

export default CountryList;