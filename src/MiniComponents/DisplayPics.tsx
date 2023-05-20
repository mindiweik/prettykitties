import React from 'react';
import Cats from '../interface';

const DisplayPics = (props: any): JSX.Element => {
  let count = 0;

  return(
    <>
      {props.pics.map((cat: Cats): any => {
        count++
        return(
        <div key={count}>
            <img src={cat.url} alt="this cat"></img>
        </div>)
      })}
    </>
  )
}

export default DisplayPics