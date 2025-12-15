import { useState } from 'react'

function Navbar({ cantidadCarrito, onMostrarCarrito }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom sticky-top shadow">
      <div className="container">
        <a className="navbar-brand" href="#inicio" style={{ fontFamily: 'var(--font-primary)', fontSize: '1.8rem', letterSpacing: '2px' }}>
          YOMALEATHER
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button 
                className="btn btn-outline-light position-relative px-4 py-2"
                onClick={onMostrarCarrito}
                style={{ 
                  borderRadius: '25px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = 'var(--color-primary)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'white'
                }}
              >
                <i className="bi bi-cart3 me-2"></i>
                Carrito
                {cantidadCarrito > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{
                    fontSize: '0.75rem',
                    padding: '0.35em 0.55em'
                  }}>
                    {cantidadCarrito}
                    <span className="visually-hidden">productos en carrito</span>
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar