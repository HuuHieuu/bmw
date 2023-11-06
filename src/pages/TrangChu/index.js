import DefaultLayout from '~/layouts/DefaultLayout';
import Tabs from '../components/Tabs';
import Services from '../components/Services';
import Footer from '../components/Footer';
function TrangChu() {
  return (
    <>
      <DefaultLayout />
      {/* Tabs */}
      <Tabs />
      <Services />
      <Footer />
    </>
  );
}

export default TrangChu;
