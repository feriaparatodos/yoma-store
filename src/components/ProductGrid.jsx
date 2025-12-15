import ProductCard from './ProductCard'

function ProductGrid({ productos, onAgregarAlCarrito }) {
  const bolsos = productos.filter(p => p.tipo === 'bolso')
  const manillas = productos.filter(p => p.tipo === 'manilla')

  return (
    <>
      {/* Sección de Bolsos */}
      <section id="productos" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center text-primary-custom">Nuestra Colección de Bolsos</h2>
          
          <div className="row g-4">
            {bolsos.map((producto, index) => (
              <div 
                key={producto.id} 
                className="col-12 col-sm-6 col-lg-4"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <ProductCard 
                  producto={producto} 
                  onAgregar={onAgregarAlCarrito}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Manillas */}
      <section className="py-5" style={{ backgroundColor: '#f0ede8' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-primary-custom">Accesorios en Cuero</h2>
            <p className="lead text-muted">Complementa tu estilo con nuestras manillas artesanales</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {manillas.map((producto, index) => (
              <div 
                key={producto.id} 
                className="col-12 col-sm-6 col-lg-5"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <ProductCard 
                  producto={producto} 
                  onAgregar={onAgregarAlCarrito}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductGrid