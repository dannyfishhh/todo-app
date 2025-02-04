import Container from './components/container/container'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
        <Container />
        </div>
      }/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
  );
}

export default App;
