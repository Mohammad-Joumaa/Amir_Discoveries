import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Hero from './components/hero.css';

createRoot(document.getElementById("root")!).render(<App />);
