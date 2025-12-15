function Footer() {
  return (
    <footer id="contacto" className="bg-primary-custom text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '2rem', letterSpacing: '2px' }}>
              YOMALEATHER
            </h3>
            <p className="mt-3" style={{ lineHeight: '1.8' }}>
              Elegancia y calidad en cada pieza de cuero. 
              Productos artesanales que perduran en el tiempo.
            </p>
          </div>
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3" style={{ fontFamily: 'var(--font-primary)' }}>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#inicio" className="text-white text-decoration-none hover-link">Inicio</a></li>
              <li className="mb-2"><a href="#productos" className="text-white text-decoration-none hover-link">Productos</a></li>
              <li className="mb-2"><a href="#nosotros" className="text-white text-decoration-none hover-link">Nosotros</a></li>
              <li className="mb-2"><a href="#contacto" className="text-white text-decoration-none hover-link">Contacto</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="mb-3" style={{ fontFamily: 'var(--font-primary)' }}>Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Bucaramanga, Colombia
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@yomaleather.com
              </li>
              <li className="mb-2">
                <i className="bi bi-phone me-2"></i>
                +57 324 471 1852
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://web.facebook.com/profile.php?id=61577973173258&mibextid=wwXIfr&rdid=q0YZ29JKxfyiExdc&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F17wBg6ewYQ%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href="https://tiktok.com/@yomaleather.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a 
                href="https://www.instagram.com/yoma_leather/?igsh=MXZ6eXByaXcwbnZiaw%3D%3D#" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon me-3"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://wa.me/573244711852" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-leather-btn"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <div className="text-center">
          <p className="mb-0">&copy; 2024 YOMA LEATHER. Todos los derechos reservados.</p>
        </div>
      </div>

      <style>{`
        .hover-link {
          transition: all 0.3s ease;
        }
        .hover-link:hover {
          color: var(--color-accent) !important;
          padding-left: 5px;
        }
        
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1.3rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background: var(--color-accent);
          color: var(--color-primary);
          transform: translateY(-3px);
        }
        
        .whatsapp-leather-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b6f47 0%, #d4a574 100%);
          color: white;
          font-size: 1.3rem;
          transition: all 0.4s ease;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(139, 111, 71, 0.4);
          position: relative;
          overflow: hidden;
        }
        
        .whatsapp-leather-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .whatsapp-leather-btn:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 25px rgba(139, 111, 71, 0.6);
          background: linear-gradient(135deg, #a58556 0%, #e6b886 100%);
        }
        
        .whatsapp-leather-btn:hover::before {
          left: 100%;
        }
        
        .whatsapp-leather-btn i {
          filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
        }
      `}</style>
    </footer>
  )
}

export default Footer