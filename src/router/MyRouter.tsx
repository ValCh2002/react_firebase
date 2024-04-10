import { useRoutes } from "react-router-dom"
import { AddNewFood } from "../pages/AddNewFood"
import { AddNewSet } from "../pages/AddNewSet"
import { SeeSet } from "../pages/SeeSet"
import { ShowAllSet } from "../pages/ShowAllSet"

export const MyRouter=()=>{
      const MyRoutes=useRoutes([
          {path:'/',element:<ShowAllSet/>},
          {path:'/addNewFood',element:<AddNewFood/>},
          {path:'/addNewSet',element:<AddNewSet/>},
          {path:'/set/:id',element:<SeeSet/>}
      ])
      return MyRoutes
  }