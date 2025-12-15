import { useState } from 'react'

function Cart({ carrito, mostrar, onCerrar, onEliminar, onActualizarCantidad, onVaciar }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [mostrarTerminos, setMostrarTerminos] = useState(false)
  const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    direccion: '',
    tipoEnvio: 'bucaramanga',
    aceptaTerminos: false
  })
  const [errores, setErrores] = useState({})

  const COSTOS_ENVIO = {
    bucaramanga: 7000,
    nacional: 22000
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const calcularSubtotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  }

  const calcularTotal = () => {
    return calcularSubtotal() + COSTOS_ENVIO[datosCliente.tipoEnvio]
  }

  const validarFormulario = () => {
    const nuevosErrores = {}
    
    if (!datosCliente.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    }
    
    if (!datosCliente.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección es obligatoria'
    }

    if (!datosCliente.aceptaTerminos) {
      nuevosErrores.terminos = 'Debes aceptar los términos y condiciones'
    }
    
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleIniciarCompra = () => {
    setMostrarFormulario(true)
  }

  const handleCancelarFormulario = () => {
    setMostrarFormulario(false)
    setDatosCliente({ 
      nombre: '', 
      direccion: '', 
      tipoEnvio: 'bucaramanga',
      aceptaTerminos: false 
    })
    setErrores({})
  }

  const enviarPorWhatsApp = () => {
    if (!validarFormulario()) {
      return
    }

    const numeroWhatsApp = '573244711852'
    let mensaje = '🛍️ *NUEVO PEDIDO - YOMA LEATHER*%0A'
    mensaje += '━━━━━━━━━━━━━━━━━━━━━%0A%0A'
    
    mensaje += `👤 *Cliente:* ${datosCliente.nombre}%0A`
    mensaje += `📍 *Dirección de envío:*%0A${datosCliente.direccion}%0A`
    mensaje += `🚚 *Tipo de envío:* ${datosCliente.tipoEnvio === 'bucaramanga' ? 'Bucaramanga' : 'Nacional'}%0A%0A`
    
    mensaje += '🛒 *PRODUCTOS:*%0A'
    mensaje += '━━━━━━━━━━━━━━━━━━━━━%0A'
    
    carrito.forEach((item, index) => {
      mensaje += `%0A${index + 1}. *${item.nombre}*%0A`
      mensaje += `   📦 Cantidad: ${item.cantidad}%0A`
      mensaje += `   💵 Precio unitario: ${formatPrice(item.precio)}%0A`
      mensaje += `   💰 Subtotal: ${formatPrice(item.precio * item.cantidad)}%0A`
    })
    
    mensaje += '%0A━━━━━━━━━━━━━━━━━━━━━%0A'
    mensaje += `📦 *Subtotal productos:* ${formatPrice(calcularSubtotal())}%0A`
    mensaje += `🚚 *Costo de envío:* ${formatPrice(COSTOS_ENVIO[datosCliente.tipoEnvio])}%0A`
    mensaje += `💰 *TOTAL A PAGAR:* ${formatPrice(calcularTotal())}%0A`
    mensaje += '━━━━━━━━━━━━━━━━━━━━━%0A%0A'
    
    mensaje += '📱 *INFORMACIÓN DE PAGO:*%0A'
    mensaje += '• Medio: Nequi%0A'
    mensaje += '• Número: 324 471 1852%0A%0A'
    
    mensaje += '⚠️ *IMPORTANTE:*%0A'
    mensaje += '📸 Por favor envíanos la captura de pantalla de tu transferencia de Nequi para confirmar tu pedido.%0A%0A'
    
    mensaje += '⏱️ *Tiempos de entrega:*%0A'
    mensaje += '• Producción: 7 días hábiles%0A'
    mensaje += '• Envío: 2-5 días hábiles adicionales%0A%0A'
    
    mensaje += '✅ Una vez confirmemos tu pago, comenzaremos la producción de tu pedido.%0A%0A'
    mensaje += '¡Gracias por tu compra! 🙏'
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`
    window.open(urlWhatsApp, '_blank')
    
    handleCancelarFormulario()
    onVaciar()
    onCerrar()
  }

  if (!mostrar) return null

  return (
    <>
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
        style={{ 
          opacity: 0.5, 
          zIndex: 1049,
          cursor: 'pointer'
        }}
        onClick={() => {
          if (!mostrarFormulario && !mostrarTerminos) {
            onCerrar()
          }
        }}
      ></div>

      {/* Modal de Términos y Condiciones */}
      {mostrarTerminos && (
        <div 
          className="position-fixed top-50 start-50 translate-middle bg-white rounded shadow-lg p-4"
          style={{ 
            width: '90%',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflowY: 'auto',
            zIndex: 1052
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
            <h4 className="mb-0" style={{ fontFamily: 'var(--font-primary)' }}>
              Términos y Condiciones
            </h4>
            <button 
              className="btn btn-link text-dark p-0"
              onClick={() => setMostrarTerminos(false)}
              style={{ fontSize: '1.5rem', textDecoration: 'none' }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <div className="terms-content">
            <h5 className="text-primary-custom mb-3">
              <i className="bi bi-clock-history me-2"></i>
              Tiempos de Producción y Entrega
            </h5>
            <p>
              Nuestros productos se elaboran <strong>bajo pedido</strong> para garantizar la exclusividad 
              y la calidad artesanal. El tiempo de producción es de aproximadamente <strong>7 días hábiles 
              (una semana)</strong> a partir de la confirmación del pedido.
            </p>
            <p>
              Una vez terminado, el envío toma entre <strong>2 a 5 días hábiles</strong> adicionales, 
              dependiendo de la ciudad de destino.
            </p>

            <h5 className="text-primary-custom mb-3 mt-4">
              <i className="bi bi-arrow-repeat me-2"></i>
              Política de Devoluciones
            </h5>
            <p>
              Aceptamos devoluciones bajo las siguientes condiciones:
            </p>
            <ul>
              <li>El producto debe estar en su <strong>empaque original</strong></li>
              <li>Sin daños, rayones, manchas o señales de uso</li>
              <li>Con todas sus etiquetas y accesorios originales</li>
              <li>Dentro de los primeros <strong>15 días</strong> después de recibido</li>
            </ul>
            <p className="text-danger">
              <strong>Nota importante:</strong> Se cobrará una multa administrativa por procesamiento 
              de devolución y costos de domicilio. El monto será informado al momento de solicitar 
              la devolución.
            </p>

            <h5 className="text-primary-custom mb-3 mt-4">
              <i className="bi bi-truck me-2"></i>
              Costos de Envío
            </h5>
            <ul>
              <li><strong>Bucaramanga:</strong> $7,000 COP</li>
              <li><strong>Nacional (otras ciudades):</strong> $22,000 COP</li>
            </ul>

            <h5 className="text-primary-custom mb-3 mt-4">
              <i className="bi bi-credit-card me-2"></i>
              Forma de Pago
            </h5>
            <p>
              Los pagos se realizan mediante transferencia Nequi. Debes enviar la captura de pantalla 
              de la transferencia por WhatsApp para confirmar tu pedido.
            </p>

            <div className="mt-4 text-center">
              <button 
                className="btn btn-primary-custom px-5"
                onClick={() => setMostrarTerminos(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Panel del carrito */}
      <div 
        className="position-fixed top-0 end-0 h-100 bg-white shadow-lg"
        style={{ 
          width: '450px', 
          maxWidth: '90vw',
          zIndex: 1050,
          overflowY: 'auto',
          animation: 'slideInRight 0.3s ease-out'
        }}
      >
        <div className="p-4 border-bottom bg-primary-custom text-white">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0" style={{ fontFamily: 'var(--font-primary)' }}>
              <i className="bi bi-cart3 me-2"></i>
              {mostrarFormulario ? 'Datos de Envío' : 'Mi Carrito'}
            </h4>
            <button 
              className="btn btn-link text-white p-0"
              onClick={() => {
                if (mostrarFormulario) {
                  handleCancelarFormulario()
                } else {
                  onCerrar()
                }
              }}
              style={{ fontSize: '1.5rem', textDecoration: 'none' }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="p-4">
          {carrito.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-cart-x display-1 text-muted"></i>
              <p className="text-muted mt-3">Tu carrito está vacío</p>
              <button 
                className="btn btn-primary-custom mt-3"
                onClick={onCerrar}
              >
                Ir a comprar
              </button>
            </div>
          ) : !mostrarFormulario ? (
            <>
              <div className="mb-4">
                {carrito.map(item => (
                  <div key={item.id} className="card mb-3 border">
                    <div className="row g-0">
                      <div className="col-4">
                        <img 
                          src={item.imagen_url} 
                          className="img-fluid rounded-start h-100"
                          alt={item.nombre}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body p-3">
                          <h6 className="card-title text-primary-custom mb-1">
                            {item.nombre}
                          </h6>
                          <p className="card-text small text-muted mb-2">
                            {formatPrice(item.precio)}
                          </p>
                          
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group btn-group-sm" role="group">
                              <button 
                                className="btn btn-outline-secondary"
                                onClick={() => onActualizarCantidad(item.id, item.cantidad - 1)}
                              >
                                <i className="bi bi-dash"></i>
                              </button>
                              <button className="btn btn-outline-secondary" disabled>
                                {item.cantidad}
                              </button>
                              <button 
                                className="btn btn-outline-secondary"
                                onClick={() => onActualizarCantidad(item.id, item.cantidad + 1)}
                                disabled={item.cantidad >= item.stock}
                              >
                                <i className="bi bi-plus"></i>
                              </button>
                            </div>
                            
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => onEliminar(item.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                          
                          <div className="text-end mt-2">
                            <strong className="text-accent">
                              {formatPrice(item.precio * item.cantidad)}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="btn btn-outline-danger btn-sm w-100 mb-3"
                onClick={onVaciar}
              >
                <i className="bi bi-trash me-2"></i>
                Vaciar carrito
              </button>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Total:</h5>
                  <h4 className="mb-0 text-accent" style={{ fontWeight: '700' }}>
                    {formatPrice(calcularSubtotal())}
                  </h4>
                </div>
                
                <button 
                  className="btn btn-success w-100 py-3"
                  onClick={handleIniciarCompra}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Continuar con la compra
                </button>
              </div>
            </>
          ) : (
            <div className="formulario-compra">
              <div className="alert alert-info" role="alert">
                <i className="bi bi-info-circle me-2"></i>
                <strong>Completa tus datos para finalizar la compra</strong>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault()
                enviarPorWhatsApp()
              }}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    <i className="bi bi-person me-2"></i>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                    id="nombre"
                    placeholder="Ej: María García"
                    value={datosCliente.nombre}
                    onChange={(e) => setDatosCliente({...datosCliente, nombre: e.target.value})}
                  />
                  {errores.nombre && (
                    <div className="invalid-feedback">{errores.nombre}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    <i className="bi bi-geo-alt me-2"></i>
                    Dirección de envío *
                  </label>
                  <textarea
                    className={`form-control ${errores.direccion ? 'is-invalid' : ''}`}
                    id="direccion"
                    rows="3"
                    placeholder="Ej: Calle 45 #23-67, Barrio Cabecera, Bucaramanga"
                    value={datosCliente.direccion}
                    onChange={(e) => setDatosCliente({...datosCliente, direccion: e.target.value})}
                  ></textarea>
                  {errores.direccion && (
                    <div className="invalid-feedback">{errores.direccion}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    <i className="bi bi-truck me-2"></i>
                    Tipo de envío *
                  </label>
                  <div className="border rounded p-3">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoEnvio"
                        id="bucaramanga"
                        value="bucaramanga"
                        checked={datosCliente.tipoEnvio === 'bucaramanga'}
                        onChange={(e) => setDatosCliente({...datosCliente, tipoEnvio: e.target.value})}
                      />
                      <label className="form-check-label w-100" htmlFor="bucaramanga">
                        <div className="d-flex justify-content-between">
                          <span><strong>Bucaramanga</strong></span>
                          <span className="text-success fw-bold">+ {formatPrice(COSTOS_ENVIO.bucaramanga)}</span>
                        </div>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoEnvio"
                        id="nacional"
                        value="nacional"
                        checked={datosCliente.tipoEnvio === 'nacional'}
                        onChange={(e) => setDatosCliente({...datosCliente, tipoEnvio: e.target.value})}
                      />
                      <label className="form-check-label w-100" htmlFor="nacional">
                        <div className="d-flex justify-content-between">
                          <span><strong>Otras ciudades (Nacional)</strong></span>
                          <span className="text-success fw-bold">+ {formatPrice(COSTOS_ENVIO.nacional)}</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="alert alert-warning mb-3" role="alert">
                  <h6 className="alert-heading">
                    <i className="bi bi-credit-card me-2"></i>
                    Resumen del Pedido
                  </h6>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Subtotal productos:</span>
                    <strong>{formatPrice(calcularSubtotal())}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Costo de envío:</span>
                    <strong className="text-success">+ {formatPrice(COSTOS_ENVIO[datosCliente.tipoEnvio])}</strong>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span><strong>TOTAL A PAGAR:</strong></span>
                    <strong className="text-accent" style={{ fontSize: '1.2rem' }}>
                      {formatPrice(calcularTotal())}
                    </strong>
                  </div>
                  <small className="text-muted d-block mt-2">
                    <strong>Método de pago:</strong> Nequi - 324 471 1852
                  </small>
                </div>

                <div className={`mb-3 ${errores.terminos ? 'border border-danger rounded p-2' : ''}`}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terminos"
                      checked={datosCliente.aceptaTerminos}
                      onChange={(e) => setDatosCliente({...datosCliente, aceptaTerminos: e.target.checked})}
                    />
                    <label className="form-check-label" htmlFor="terminos">
                      Acepto los{' '}
                      <button
                        type="button"
                        className="btn btn-link p-0 text-decoration-underline"
                        onClick={() => setMostrarTerminos(true)}
                        style={{ verticalAlign: 'baseline' }}
                      >
                        términos y condiciones
                      </button>{' '}
                      *
                    </label>
                  </div>
                  {errores.terminos && (
                    <small className="text-danger">{errores.terminos}</small>
                  )}
                </div>

                <div className="alert alert-danger mb-4" role="alert">
                  <h6 className="alert-heading">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    ¡Importante!
                  </h6>
                  <p className="mb-0 small">
                    📸 <strong>Recuerda enviarnos la captura de pantalla de tu transferencia de Nequi</strong> por WhatsApp para confirmar tu pedido.
                  </p>
                </div>

                <div className="d-grid gap-2">
                  <button 
                    type="submit"
                    className="btn btn-success btn-lg"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Enviar pedido por WhatsApp
                  </button>
                  <button 
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleCancelarFormulario}
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Volver al carrito
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .terms-content {
          line-height: 1.8;
        }
        .terms-content h5 {
          margin-top: 1.5rem;
        }
        .terms-content ul {
          padding-left: 1.5rem;
        }
      `}</style>
    </>
  )
}

export default Cart