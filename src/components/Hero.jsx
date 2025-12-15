function Hero() {
  return (
    <section id="inicio" className="hero-section position-relative" style={{
      background: 'linear-gradient(135deg, #2c1810 0%, #8b6f47 100%)',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      color: 'white'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 fade-in-up">
            <h1 className="display-3 fw-bold mb-4" style={{ fontFamily: 'var(--font-primary)' }}>
              Elegancia en Cuero
            </h1>
            <p className="lead mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              Descubre nuestra colección exclusiva de productos en cuero genuino. 
              Artesanía colombiana de la más alta calidad.
            </p>
            <a href="#productos" className="btn btn-light btn-lg px-5 py-3" style={{
              borderRadius: '50px',
              fontWeight: '600',
              letterSpacing: '1px'
            }}>
              EXPLORAR COLECCIÓN
            </a>
          </div>
          <div className="col-lg-7 text-center d-none d-lg-block">
            <div className="hero-image-container" style={{
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}>
              <img 
                src="/images/Principal.png" 
                alt="Productos de cuero" 
                className="img-fluid rounded shadow-lg"
                style={{ 
                  width: '100%',
                  maxHeight: '600px', 
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '100px', background: 'var(--color-light)', clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  )
}

export default Hero