import { useState } from 'react'

function Navbar({ cantidadCarrito, onMostrarCarrito }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom sticky-top shadow">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#inicio">
          <img 
            src="/images/logo.png" 
            alt="YOMA Leather Logo" 
            style={{ 
              height: '50px', 
              marginRight: '15px',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <span style={{ fontFamily: 'var(--font-primary)', fontSize: '1.8rem', letterSpacing: '2px' }}>
            YOMA
          </span>
        </a>

        {/* Carrito SIEMPRE visible en móviles (al lado del hamburguesa) */}
        <div className="d-flex align-items-center">
          <button 
            className="btn btn-outline-light position-relative me-2 d-lg-none"
            onClick={onMostrarCarrito}
            style={{ 
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <i className="bi bi-cart3" style={{ fontSize: '1.2rem' }}></i>
            {cantidadCarrito > 0 && (
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                style={{
                  fontSize: '0.7rem',
                  padding: '0.3em 0.5em'
                }}
              >
                {cantidadCarrito}
              </span>
            )}
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

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
            
            {/* Carrito en desktop (dentro del menú) */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0 d-none d-lg-block">
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
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.35em 0.55em'
                    }}
                  >
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