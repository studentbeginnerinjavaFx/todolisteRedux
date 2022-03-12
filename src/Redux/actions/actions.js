import { ADD,EDIT,DONE } from "../constants/actions-type";

export const Add =(payload)=>{
    return {

        type:ADD,
        payload
    }}


    export const Edit =(payload)=>{
        console.log(payload)
        return {
    
            type:EDIT,
            payload
        }}

        export const Done =(payload)=>{
            return {
        
                type:DONE,
                payload
            }}
