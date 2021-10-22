import * as React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import AiOutlineArrowRight from "react-icons/ai"
export default function Button({ title, onClick, type }) {
    return (
       <a href="" className='mybtn'>{title}</a>
    );
}