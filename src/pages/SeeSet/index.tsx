import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyCollection, Set } from "../../firestore/type";
import { getDataById } from './../../firestore/firestore';
import './style.css'
export const SeeSet:React.FC=React.memo(():JSX.Element=>{
      const [set,setSet]=useState<Set>({} as Set)
      const {id}=useParams()
      useEffect(()=>{
            if (id) {
                  getDataById<Set>(MyCollection.SET,id)
                  .then(res=>{
                        setSet(res)
                  })
                  .catch(console.warn     )
            }
      },[])
      return (<div>
            <h2>{set.name}</h2>
            <div className="seeset">
                  {set.foods?.map(elm=>{
                        return <div key={elm.id} className='seediv'>
                              <h3>{elm.name}</h3>
                              <p>Price - {elm.price}</p>
                              <p>Description - {elm.description}</p>
                        </div>
                  })}
            </div>
      </div>)
})