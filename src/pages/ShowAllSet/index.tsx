import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getData } from "../../firestore/firestore";
import { MyCollection, Set } from "../../firestore/type";
import './style.css'
export const ShowAllSet:React.FC=React.memo(():JSX.Element=>{
      const [allSets,setAllSets]=useState<Set[]>([])
      useEffect(()=>{
            getData<Set>(MyCollection.SET)
            .then(res=>{
                  setAllSets(res)
            })
            .catch(console.warn)
      },[])
      return (<div>
            <h3>Show All Set</h3>
            <div className="setss">
                  {allSets.map(elm=>{
                        return <div key={elm.id}>
                              <h3>{elm.name}</h3>
                              <p>Toral price - {elm.foods.reduce((a,b)=>+a + +b.price,0)}</p>
                              <p><NavLink to={'/set/'+elm.id} className='see'>See Details</NavLink></p>
                        </div>
                  })}
            </div>
      </div>)
})