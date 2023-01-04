import './Display.css';

const Display = props => {
  const { displayValue } = props;
  return (
    <div className='container-fluid row col-12 mx-auto align-items-center rounded bg-light display'>
      <p className='m-0 text-end fs-4 text-dark'>{displayValue}</p>
    </div>
  );
};

export default Display;
