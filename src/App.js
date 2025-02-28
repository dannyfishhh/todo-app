import Container from './components/container/container'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={
        <Container />
      }/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
    </div>
  );
}

export default App;
