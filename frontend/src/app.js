import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListagemClientes from './pages/ListagemClientes';
import FormularioNovoCliente from './pages/FormulariNovoCliente';
import FormularioEditarCliente from './pages/FormularioEditarCliente'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

function App() {
    return (
        <Router>
            <div className="container mt-5">
                <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50" height="50" viewBox="0 0 100 100" className="me-2">
                        <g>
                            <g>
                                <path d="M80,71.2V74c0,3.3-2.7,6-6,6H26c-3.3,0-6-2.7-6-6v-2.8c0-7.3,8.5-11.7,16.5-15.2c0.3-0.1,0.5-0.2,0.8-0.4 c0.6-0.3,1.3-0.3,1.9,0.1C42.4,57.8,46.1,59,50,59c3.9,0,7.6-1.2,10.8-3.2c0.6-0.4,1.3-0.4,1.9-0.1c0.3,0.1,0.5,0.2,0.8,0.4 C71.5,59.5,80,63.9,80,71.2z"/>
                            </g>
                            <g>
                                <ellipse cx="50" cy="36.5" rx="14.9" ry="16.5"/>
                            </g>
                        </g>
                    </svg>
                    <h3>Painel de Clientes</h3>
                </div>
                <Routes>
                    <Route path="/" element={<ListagemClientes />} />
                    <Route path="/novo" element={<FormularioNovoCliente />} />
                    <Route path="/editar/:id" element={<FormularioEditarCliente />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
