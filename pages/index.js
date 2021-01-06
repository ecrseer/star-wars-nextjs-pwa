import Head from 'next/head';
import { useEffect, useState } from 'react';
import MovieList from '../src/components/MovieList/MovieList';



export default function index() {
    return(
    <div>        
        <MovieList/>
        
    </div>
    );
    
}
