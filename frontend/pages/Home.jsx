import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from "react-router-dom"
import { AiOutLineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutLineAddBox, MdOutLineDelete } from "react-icons/md"

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        axios
        .get("http://localhost:5555/books")
        .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })

    })
  return (
    <div className='p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-3xl my-8'>Books List</h1> 
            {/* 3xl sets the font size 3 rem, and my-8 sets tops and bottom
            margings to 2rem and 2rem = 32px*/}
            <Link to="/books/create">
                <MdOutLineAddBox className="text-sky-800 text-4x1"/>
            </Link>

        </div>
    </div>
  )
}

export default Home