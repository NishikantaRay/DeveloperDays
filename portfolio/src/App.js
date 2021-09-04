import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <h1>hello</h1>
    <Navbar></Navbar>
    <div className="row justify-content-center">
    <div className="col-12 col-md-10">
        <div className="alert alert-secondary shadow-soft" role="alert">
            <span className="alert-inner--text">This is a secondary alert with <a href="/" className="alert-link">an
                    example link</a>. Give it a click if you like.</span>
        </div>
        <div className="alert alert-success shadow-soft" role="alert">
            <span className="alert-inner--text">This is a success alert with <a href="/" className="alert-link">an
                    example link</a>. Give it a click if you like.</span>
        </div>
        <div className="alert alert-info shadow-soft" role="alert">
            <span className="alert-inner--text">This is a info alert with <a href="/" className="alert-link">an
                    example link</a>. Give it a click if you like.</span>
        </div>
        <div className="alert alert-danger shadow-soft" role="alert">
            <span className="alert-inner--text">This is a danger alert with <a href="/" className="alert-link">an
                    example link</a>. Give it a click if you like.</span>
        </div>
    </div>
</div>
    </>
  );
}

export default App;
