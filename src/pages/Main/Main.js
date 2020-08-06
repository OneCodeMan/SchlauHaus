import React from 'react';
import '../styles.css';
import './Main.css';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

function Main() {
  return (
    <div className="Main">
        <h1 className="pageTitle">
          SchlauHaus
        </h1>
        <div className="Categories">
        
          <CategoryItem title="Cameras" color="black" />
          <CategoryItem title="Doors" color="brown" />
          <CategoryItem title="Irrigation" color="lightgreen" />
          <CategoryItem title="Lights" color="yellow" />
          <CategoryItem title="Temperature" color="red" />
        </div>
    </div>
  );
}

export default Main;
