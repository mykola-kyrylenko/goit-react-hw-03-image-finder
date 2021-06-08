import { Component } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.css';
import Button from './components/Button/Button';
import fetchData from './services/api';
import Searchbar from './components/Searchbar/Searchbar';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    error: null,
    loading: false,
    largeImageURL: null,
    showModal: false,
  };
  
  handleFormSubmit = query => {
    this.setState({ query });
    // console.log({query})
  };

    componentDidUpdate(prevProps, prevState) {
        const { query} = this.state;
        
      if (prevState.query !== query) {
            this.fetchImages()
      };
    };
    
    fetchImages = () => {
        this.setState({ loading: true });
        fetchData
            .data(this.state.query, this.state.page)
            .then(({ hits, total }) => {
                if (total === 0) {
                    toast.error(`По запросу ничего не найдено! Введите другой запрос`)
                }

                this.setState(prevState => ({
                  images: [...prevState.images, ...hits],
                }));
              
              window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth',
              });
              
              this.setState(prevState => ({
                page: prevState.page + 1,
              }));
              
            })
            .then(console.log)
            .catch(error => this.setState({ error: error.message }))
            .finally(this.setState({ loading: false }));
    };
 

  
  onClickImage = largeImageURL => {
    this.toggleModal();
    this.setState({ largeImageURL: largeImageURL });
  };

    toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery images={this.state.images} onClick={this.onClickImage}/>
        
        {this.state.showModal && (
          <Modal imageURL={this.state.largeImageURL} toggleModal={this.toggleModal} />
        )}

        {this.state.images.length > 0 && (
          <Button onClick={this.fetchImages} />
        )}
      
        {this.state.loading && <Loader />}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}