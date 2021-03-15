import React from 'react';

const CategoryDetails = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>Category details : {count}</h4>
        </div>
    );
};

export default CategoryDetails;