
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  // Props: {key:value}
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
