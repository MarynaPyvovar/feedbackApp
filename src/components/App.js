import { Footer } from './index';
import { FeedbackPage } from '../pages';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <FeedbackPage />
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
