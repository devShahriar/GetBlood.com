import React from 'react';
import home from './public/home.png';


export default class Home extends React.Component {



     render()
     {
         return (
         <div style={{ backgroundImage:`url(${home})`}}></div>)
     }

}