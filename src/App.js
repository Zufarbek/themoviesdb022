import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MoviePage from './pages/movie/movie.page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movie/:title' element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
