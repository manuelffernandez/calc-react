const Button = props => {
   const { children, container } = props;

   if (container === 'numbers') {
      return (
         <div className={`${children === 0 ? 'col-8' : 'col-4'}`}>
            <button className={'btn w-100 h-100 btn-outline-light fs-3'}>
               {children}
            </button>
         </div>
      );
   } else {
      return (
         <div className={'col-12 col-sm-6'}>
            <button className={`btn w-100 h-100 btn-outline-light fs-3 `}>
               {children}
            </button>
         </div>
      );
   }
};

export default Button;
