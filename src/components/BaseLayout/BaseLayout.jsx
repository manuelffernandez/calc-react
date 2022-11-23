import Header from '../Header/Header';

const BaseLayout = props => {
   const { children } = props;

   return (
      <>
         <Header />
         {children}
      </>
   );
};

export default BaseLayout;
