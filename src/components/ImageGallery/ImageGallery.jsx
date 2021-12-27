import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import cardAPI from '../../api/imagesApi';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageGallery.module.css';

export default function ImageGallery({ searchQuery }) {
  // state = {
  //   cardImage: [],
  //   error: null,
  //   loading: false,
  //   status: 'idle',
  //   page: 1,
  // };

  const [cardImage, setCardImage] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [alt, setAlt] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchQuery !== this.props.searchQuery) {
  //     this.setState({ status: 'pending' });

  //     cardAPI(this.props.searchQuery, this.state.page)
  //       .then(cardImage => cardImage.hits)
  //       .then(cardImage =>
  //         this.setState({ cardImage: cardImage, status: 'resolved' }),
  //       );
  //   }

  //   if (prevState.page !== this.state.page && this.state.page !== 1) {
  //     this.setState({ status: 'pending' });

  //     cardAPI(this.props.searchQuery, this.state.page)
  //       .then(cardImage => cardImage.hits)
  //       .then(cardImage =>
  //         this.setState(prevState => ({
  //           cardImage: [...prevState.cardImage, ...cardImage],
  //           status: 'resolved',
  //         })),
  //       );
  //   }
  //   if (prevState.cardImage !== this.state.cardImage) {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // }

  useEffect(() => {
    //==== если пустая строка ====
    if (!searchQuery) {
      return;
    }

    setStatus('pending');

    if (page === 1) {
      cardAPI
        .fetchCard(searchQuery, page)
        .then(cardImageNew => {
          if (cardImageNew.total === 0) {
            setError(`Not found ${searchQuery}`);
            setStatus('rejected');
          } else {
            setCardImage(cardImageNew.hits);
            setStatus('resolved');
          }
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }

    if (page !== 1) {
      cardAPI
        .fetchCard(searchQuery, page)
        .then(cardImageNew => {
          setCardImage(prevState => [...prevState, ...cardImageNew.hits]);
          setStatus('resolved');
        })
        .then(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [searchQuery, page]);

  const loadMoreBtn = () => {
    setPage(prevState => prevState + 1);
  };

  const onOpenModal = (largeImageURL, alt) => {
    setLargeImageURL(largeImageURL);
    setAlt(alt);
    window.addEventListener('keydown', onEscClick);
  };

  const onEscClick = event => {
    const ESC_KEY_CODE = 'Escape';

    if (event.code === ESC_KEY_CODE) {
      onCloseModal();
    }
  };

  const onCloseModal = () => {
    setLargeImageURL('');
    setAlt('');
    window.removeEventListener('keydown', onEscClick);
  };

  return (
    <>
      {status === 'pending' && (
        <div>
          <Loader
            type="MutatingDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        </div>
      )}

      {status === 'rejected' && <h1>Oops! Try again.</h1>}

      {status === 'resolved' && (
        <ul className={s.ImageGallery}>
          {cardImage.map(img => {
            return (
              <ImageGalleryItem
                key={img.id}
                alt={img.tags}
                webformatURL={img.webformatURL}
                largeImageURL={img.largeImageURL}
                onOpenModal={onOpenModal}
              />
            );
          })}
          {cardImage.length > 0 && <Button onClick={loadMoreBtn} />}

          {largeImageURL && (
            <Modal
              largeImageURL={largeImageURL}
              alt={alt}
              onClose={onCloseModal}
            />
          )}
        </ul>
      )}
    </>
  );
}
