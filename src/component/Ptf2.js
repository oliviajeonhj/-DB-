import React from 'react';
import ptf from '../json/ptf.json';

function Ptf2(props) {
  return (
    <div id={props.ptfId} className='py-5'>
      <h2 className='text-center'>{props.ptfId}</h2>
      <p className="text-center">
        {ptf[props.ptfId].title}
      </p>
      <ul className="row">
      {
        ptf[props.ptfId].list.map ( (v, i) => {
          return (
            <li key={'thumb'+i} className={props.ptfId + i}>
              <h3>{v.extext}</h3>
              {
                v.thumb.map( (val, index) => {
                  return <div className={'sub'+ index}>{val}</div>
                })
              }
            </li>
          )

          })
        }

      </ul>
    </div>
  )};

export default Ptf2;