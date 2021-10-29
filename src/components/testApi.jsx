import React , {useState,useEffect} from 'react';
import Axios from 'axios'

const TestApi = () => {
    const getAllUsers = async () =>{
        let result = await Axios.get('https://academy-visual.herokuapp.com/api/course')
        // console.log(result.data)
    }
    useEffect(()=> {
        getAllUsers()
    })
    return (
        <>
        </>
    );
};

export default TestApi;
