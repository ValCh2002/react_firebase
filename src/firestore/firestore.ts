import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, where , query} from "firebase/firestore";
import { MyCollection, MyWhere } from "./type";
import { db } from "./config";

export const addData=async<T>(collName:MyCollection,data:T|any):Promise<string>=>{
    const coll =collection(db,collName)
    const obj=await addDoc(coll,data)
    return obj.id
}

export const getData=async<T>(collName:MyCollection):Promise<T[]>=>{
    const coll=collection(db,collName)
    const obj=await getDocs(coll)
    const arr=obj.docs.map(elm=>({...elm.data(),id:elm.id} as T))
    return arr
}

export const getDataById=async<T>(collName:MyCollection,id:string):Promise<T>=>{
    const coll=collection(db,collName)
    const obj=await getDoc(doc(coll,id))
    return {...obj.data(),id:obj.id} as T
}

export const deleteDataById=async(collName:MyCollection,id:string):Promise<string>=>{
    const coll=collection(db,collName)
    await deleteDoc(doc(coll,id))
    return 'Deleted' + id
}

export const updateDataById=async(collName:MyCollection,id:string,obj:any):Promise<string>=>{
    const coll=collection(db,collName)
    await updateDoc(doc(coll,id),obj)
    return 'Update' + id
}

export const searchData = async<T>(collName:MyCollection,key:string,myWhere:MyWhere,value:any):Promise<T[]>=>{
    const coll=collection(db,collName)
    const x= query(coll,where(key,myWhere,value))
    const obj=await getDocs(x)
    const arr=obj.docs.map(elm=>({...elm.data(),id:elm.id}as T))
    return arr
}