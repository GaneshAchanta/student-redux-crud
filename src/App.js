import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Student from './components/Student';
import Students from './components/Students';

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
        <div className='row'>
          <div className='col'>
            <h3>React-Redux with Hooks</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
              <div className='container-fluid'>
                <Link to={'/'} className="navbar-brand">NavBar</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
                aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link to={'/students'} className='nav-link'>
                        Students
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to={"/add"} className='nav-link' aria-current='page'>
                        Add
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Routes>
              <Route path='/' element={<Students/>} />
              <Route path='/add' element={<AddStudent/>} />
              <Route path='/students' element={<Students/>} />
              <Route path='/students/:id' element={<Student/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
