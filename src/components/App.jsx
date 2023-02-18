import { PostFeedbackPage, ReadFeedbackPage } from '../pages';
import { SharedLayout } from './index';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PostFeedbackPage />} />
        <Route path="read" element={<ReadFeedbackPage />} />
      </Route>
    </Routes>
    <Toaster />
  </>
  );
};

export default App;
