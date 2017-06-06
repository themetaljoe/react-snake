try{
import React from 'react';
import { Loop, Stage } from 'react-game-kit';

export default class Game extends React.Component {
    constructor(props){
    super(props)
    this.state ={};
    }
    
    render() {
  return (
      <Loop>
      <Stage>
       { /* Game specific components go here */}
      </Stage>
    </Loop>
  );
            }
}
} catch(err){
    console.log(err);
}