import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './Components/Home';
import CreatePost from './Components/CreatePost';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<CreatePost/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
