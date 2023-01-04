import BaseLayout from './components/BaseLayout/BaseLayout';
import Calculator from './components/Calculator/Calculator';
import './App.css';

function App() {
  return (
    <div id='app' className='d-flex flex-column justify-content-between'>
      <BaseLayout>
        <Calculator />
      </BaseLayout>
    </div>
  );
}

export default App;
