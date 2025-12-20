import { useState } from 'react'

function ProductCard({ producto, onAgregar, onVerDetalles }) {
  const [agregado, setAgregado] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleAgregar = (e) => {
    e.stopPropagation() // Evita abrir el modal al agregar
    onAgregar(producto)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1000)
  }

  return (
    <div 
      className="card h-100 border-0 shadow-sm product-card" 
      style={{
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onClick={() => onVerDetalles(producto)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)'
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
        <img
          src={producto.imagen_url}
          className="card-img-top"
          alt={producto.nombre}
          style={{
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        {producto.stock <= 5 && producto.stock > 0 && (
          <span className="badge bg-warning position-absolute top-0 end-0 m-3">
            ¡Últimas {producto.stock} unidades!
          </span>
        )}
        {producto.stock === 0 && (
          <span className="badge bg-danger position-absolute top-0 end-0 m-3">
            Agotado
          </span>
        )}
        
        {/* Badge de "Ver más" */}
        <div 
          className="position-absolute bottom-0 start-0 w-100 p-3 text-center"
          style={{
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            color: 'white'
          }}
        >
          <i className="bi bi-eye me-2"></i>
          Click para ver más fotos
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary-custom mb-2" style={{ fontFamily: 'var(--font-primary)', fontSize: '1.3rem' }}>
          {producto.nombre}
        </h5>
        <p className="card-text text-muted small flex-grow-1">
          {producto.descripcion}
        </p>

        {/* Dimensiones compactas */}
        {producto.dimensiones && (
          <div className="mb-3">
            <div className="d-flex gap-2 text-muted small">
              <span>
                <i className="bi bi-rulers me-1"></i>
                {producto.dimensiones.ancho && `${producto.dimensiones.ancho}`}
                {producto.dimensiones.alto && ` × ${producto.dimensiones.alto}`}
                {producto.dimensiones.profundidad && ` × ${producto.dimensiones.profundidad}`}
                {producto.dimensiones.largo && `${producto.dimensiones.largo}`}
              </span>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="h5 mb-0 text-accent" style={{ fontWeight: '700' }}>
            {formatPrice(producto.precio)}
          </span>
          <button 
            className={`btn ${agregado ? 'btn-success' : 'btn-primary-custom'} btn-sm`}
            onClick={handleAgregar}
            disabled={producto.stock === 0}
          >
            {agregado ? (
              <>
                <i className="bi bi-check-lg me-1"></i>
                ¡Agregado!
              </>
            ) : producto.stock === 0 ? (
              'Agotado'
            ) : (
              <>
                <i className="bi bi-cart-plus me-1"></i>
                Agregar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard