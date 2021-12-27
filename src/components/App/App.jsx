import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../SearchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Searchbar onSubmit={setSearchQuery} />

      <ImageGallery searchQuery={searchQuery} />

      <ToastContainer autoClose={3000} />
    </div>
  );
}
