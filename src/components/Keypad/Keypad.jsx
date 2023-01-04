import Button from '../Button/Button';

const Keypad = props => {
  const { inputHandler, keysMap } = props;
  const leftPad = () => keysMap.filter(key => key.layoutSide === 'left');
  const rightPad = () => keysMap.filter(key => key.layoutSide === 'right');

  return (
    <div className='container-fluid row h-75 my-auto p-0 col-12 d-flex'>
      <div className='col-8 row ps-3'>
        <div className='row gx-0 gy-4 gx-sm-3 m-0'>
          {leftPad().map(key => {
            return (
              <Button
                key={key.id}
                handleClick={() => inputHandler(key)}
                container='numbers'>
                {key.char}
              </Button>
            );
          })}
        </div>
      </div>
      <div className='col-4 row ms-1 ms-sm-0 pe-3 flex-fill'>
        <div className='row gx-0 gx-sm-2 gy-4 m-0'>
          {rightPad().map(key => {
            return (
              <Button
                key={key.id}
                handleClick={() => inputHandler(key)}
                container='operators'>
                {key.char}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Keypad;
