import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BaseLayout = props => {
   const { children } = props;

   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default BaseLayout;
