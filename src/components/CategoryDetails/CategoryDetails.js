import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h4>This is your Categories detail</h4>
            <h5>Selected category : {category}</h5>
        </div>
    );
};

export default CategoryDetails;