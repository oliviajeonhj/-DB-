import React, { useState } from 'react';
import Ptf2 from './Ptf2';

function Ptf(props) {
  const [ptfBtn, updatePtfBtn] = useState(['react', 'reactid']);

  const updateclick = (e) => {

    e = e || window.event;

    const newclick = e.target.getAttribute('datasrc').split(',');

    updatePtfBtn(newclick)
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button onClick={ updateclick } datasrc={['리액트','reactid']}>PWA 리액트</button>
        <button onClick={ updateclick } datasrc={['쇼핑몰','shopid']}>EC 쇼핑몰</button>
        <button onClick={ updateclick } datasrc={['그누보드','cmsid']}>CMS 그누보드</button>
        <button onClick={ updateclick } datasrc={['디자인','figmaid']}>DESIGN 피그마</button>
      </div>
      <Ptf2 objkey={ptfBtn[0]} ptfId={ptfBtn[1]} />
    </div>
  );
}

export default Ptf;