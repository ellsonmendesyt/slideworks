// import Formulario from './components/formulario';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import Home from './components/home';




function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
