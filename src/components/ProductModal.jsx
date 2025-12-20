import { useState } from 'react'

function ProductModal({ producto, mostrar, onCerrar, onAgregarAlCarrito }) {
  const [imagenActual, setImagenActual] = useState(0)

  if (!mostrar || !producto) return null

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const siguienteImagen = () => {
    if (producto.galeria) {
      setImagenActual((prev) => (prev + 1) % producto.galeria.length)
    }
  }

  const anteriorImagen = () => {
    if (producto.galeria) {
      setImagenActual((prev) => (prev - 1 + producto.galeria.length) % producto.galeria.length)
    }
  }

  const tieneGaleria = producto.galeria && producto.galeria.length > 0

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
        style={{ 
          opacity: 0.8, 
          zIndex: 1049,
          cursor: 'pointer'
        }}
        onClick={onCerrar}
      ></div>

      {/* Modal */}
      <div 
        className="position-fixed top-50 start-50 translate-middle bg-white rounded shadow-lg"
        style={{ 
          width: '90%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          zIndex: 1050,
          animation: 'fadeIn 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
          <h3 className="mb-0 text-primary-custom" style={{ fontFamily: 'var(--font-primary)' }}>
            {producto.nombre}
          </h3>
          <button 
            className="btn btn-link text-dark p-0"
            onClick={onCerrar}
            style={{ fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Contenido */}
        <div className="p-4">
          <div className="row">
            {/* Galería de imágenes */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              {tieneGaleria ? (
                <div className="position-relative">
                  {/* Imagen principal */}
                  <img 
                    src={producto.galeria[imagenActual]} 
                    alt={`${producto.nombre} - Vista ${imagenActual + 1}`}
                    className="img-fluid rounded shadow"
                    style={{ 
                      width: '100%', 
                      height: '400px', 
                      objectFit: 'cover' 
                    }}
                  />

                  {/* Botones de navegación */}
                  {producto.galeria.length > 1 && (
                    <>
                      <button
                        className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2"
                        onClick={anteriorImagen}
                        style={{ 
                          borderRadius: '50%', 
                          width: '45px', 
                          height: '45px',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                        }}
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                      <button
                        className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2"
                        onClick={siguienteImagen}
                        style={{ 
                          borderRadius: '50%', 
                          width: '45px', 
                          height: '45px',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                        }}
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>

                      {/* Indicadores */}
                      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                        <div className="d-flex gap-2">
                          {producto.galeria.map((_, index) => (
                            <button
                              key={index}
                              className="btn btn-sm p-0"
                              onClick={() => setImagenActual(index)}
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: imagenActual === index ? 'white' : 'rgba(255,255,255,0.5)',
                                border: 'none'
                              }}
                            ></button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Contador de imágenes */}
                  <div 
                    className="position-absolute top-0 end-0 m-3 bg-dark text-white px-2 py-1 rounded"
                    style={{ fontSize: '0.85rem' }}
                  >
                    {imagenActual + 1} / {producto.galeria.length}
                  </div>

                  {/* Miniaturas */}
                  <div className="d-flex gap-2 mt-3 flex-wrap">
                    {producto.galeria.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className={`img-thumbnail ${imagenActual === index ? 'border-primary' : ''}`}
                        onClick={() => setImagenActual(index)}
                        style={{
                          width: '70px',
                          height: '70px',
                          objectFit: 'cover',
                          cursor: 'pointer',
                          border: imagenActual === index ? '3px solid var(--color-primary)' : '1px solid #ddd'
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img 
                  src={producto.imagen_url} 
                  alt={producto.nombre}
                  className="img-fluid rounded shadow"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              )}
            </div>

            {/* Información del producto */}
            <div className="col-lg-6">
              {/* Precio */}
              <div className="mb-4">
                <h2 className="text-accent mb-0" style={{ fontWeight: '700', fontSize: '2.5rem' }}>
                  {formatPrice(producto.precio)}
                </h2>
              </div>

              {/* Descripción */}
              <div className="mb-4">
                <h5 className="text-primary-custom mb-2">Descripción</h5>
                <p className="text-muted">{producto.descripcion}</p>
              </div>

              {/* Dimensiones */}
              {producto.dimensiones && (
                <div className="mb-4">
                  <h5 className="text-primary-custom mb-3">
                    <i className="bi bi-rulers me-2"></i>
                    Dimensiones
                  </h5>
                  <div className="row g-3">
                    {producto.dimensiones.ancho && (
                      <div className="col-4">
                        <div className="text-center p-3 bg-light rounded">
                          <div className="text-muted small mb-1">Ancho</div>
                          <div className="fw-bold">{producto.dimensiones.ancho}</div>
                        </div>
                      </div>
                    )}
                    {producto.dimensiones.alto && (
                      <div className="col-4">
                        <div className="text-center p-3 bg-light rounded">
                          <div className="text-muted small mb-1">Alto</div>
                          <div className="fw-bold">{producto.dimensiones.alto}</div>
                        </div>
                      </div>
                    )}
                    {producto.dimensiones.profundidad && (
                      <div className="col-4">
                        <div className="text-center p-3 bg-light rounded">
                          <div className="text-muted small mb-1">Fondo</div>
                          <div className="fw-bold">{producto.dimensiones.profundidad}</div>
                        </div>
                      </div>
                    )}
                    {producto.dimensiones.largo && (
                      <div className="col-6">
                        <div className="text-center p-3 bg-light rounded">
                          <div className="text-muted small mb-1">Largo</div>
                          <div className="fw-bold">{producto.dimensiones.largo}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Stock */}
              <div className="mb-4">
                {producto.stock > 0 ? (
                  <div className="alert alert-success mb-0">
                    <i className="bi bi-check-circle me-2"></i>
                    <strong>Disponible</strong> - {producto.stock} unidades en stock
                  </div>
                ) : (
                  <div className="alert alert-danger mb-0">
                    <i className="bi bi-x-circle me-2"></i>
                    <strong>Agotado</strong>
                  </div>
                )}
              </div>

              {/* Botón agregar al carrito */}
              <button
                className="btn btn-primary-custom btn-lg w-100"
                onClick={() => {
                  onAgregarAlCarrito(producto)
                  onCerrar()
                }}
                disabled={producto.stock === 0}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -45%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  )
}

export default ProductModal