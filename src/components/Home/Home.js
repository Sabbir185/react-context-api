import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const count = useContext(CategoryContext);
    return (
        <div>
            <h1>This is home : {count}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;