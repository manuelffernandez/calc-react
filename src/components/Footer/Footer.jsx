const Footer = () => {
   return (
      <footer className='container-fluid d-flex align-items-center px-4 py-3 bg-dark'>
         <div className='col text-start text-light'>
            Calculator - Manuel Fernández 2022
         </div>
         <div className='col p-0 d-flex align-items-center justify-content-end'>
            <p className='mb-0 me-1 d-inline-block text-light'>
               Link to the repo
            </p>
            <a
               href='https://github.com/manuelffernandez/calc-react'
               target='_blank'
               rel='noreferrer'
               className='d-inline-block'>
               <i className='fa-brands fa-github fs-3 text-light'></i>
            </a>
         </div>
      </footer>
   );
};

export default Footer;
