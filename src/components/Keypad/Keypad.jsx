import Button from '../Button/Button';
import keysMap from '../../utils/keysMap.js';

const Keypad = () => {
   return (
      <div className='container-fluid row h-75 my-auto p-0 col-12 d-flex keypad'>
         <div className='col-8 row ps-3 numbers'>
            <div className='row gx-0 gy-4 gx-sm-3 m-0'>
               {keysMap.numbers.map(key => {
                  return (
                     <Button key={key.id} container='numbers'>
                        {key.no}
                     </Button>
                  );
               })}
            </div>
         </div>
         <div className='col-4 row ms-1 ms-sm-0 pe-3 flex-fill operators'>
            <div className='row gx-0 gx-sm-2 gy-4 m-0'>
               {keysMap.operators.map(key => {
                  return (
                     <Button key={key.id} container='operators'>
                        {key.op}
                     </Button>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Keypad;
