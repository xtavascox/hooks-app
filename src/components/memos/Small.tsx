import React,{memo} from 'react';

export const Small = memo(({value}) => {
    console.log('renderizando');
  return <small>{value}</small>;
})