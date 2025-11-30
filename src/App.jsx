import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import './components/Global.scss';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <AllRoutes />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
