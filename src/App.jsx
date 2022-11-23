import BaseLayout from './components/BaseLayout/BaseLayout';
import Calculator from './components/Calculator/Calculator';
import './App.css';

function App() {
   return (
      <div>
         <BaseLayout>
            <Calculator />
         </BaseLayout>
      </div>
   );
}

export default App;
