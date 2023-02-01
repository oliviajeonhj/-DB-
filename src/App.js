import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './component/Navi';
import Process from './component/Process';
import Ptf from './component/Ptf';
import SlideBanner from './component/SlideBanner'
import './App.css';

function App() {
  return (
    <div>
      <Navi></Navi>
      <SlideBanner />

      <Process id="precss" title="개발자연혁" />
      <Ptf dbkey="react" />

      <section style={{ height: '100vh'}} id="contact" className='border-top'></section>
    </div>
  );
}

export default App;
