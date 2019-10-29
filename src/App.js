import React, { Fragment, useState } from 'react';
import Title from './Title';
import Social from './Social';
import Navbar from './Navbar';
import Scroll from './Scroll'
import CardContainer from './CardContainer';
import selectedVideo from './videos';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('art');

  const displayNewCategory = (cat) => {
    setCategory(cat);
  };

  return(
    <Fragment>
      {console.log(selectedVideo)}
      <video autoPlay loop muted className="video">
        <source src={selectedVideo} type='video/mp4'/>
      </video>
      <Title />
      <Social />
      <Navbar displayNewCategory={displayNewCategory}/>
      <Scroll>
        <CardContainer category={category}/>
      </Scroll> 
    </Fragment>
  )
}



export default App;
