import React from 'react';
import './CategoryItem.css';

function CategoryItem(props) {
  return (
    <div className="categoryItem">
      <div className="symbol" style={{background: props.color}}>
      
      </div>
      <p>
        {props.title}
      </p>
    </div>
  );
}

export default CategoryItem;
