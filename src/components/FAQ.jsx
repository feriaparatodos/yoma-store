import { useState } from 'react'

function FAQ() {
  const [abierto, setAbierto] = useState(null)

  const preguntas = [
    {
      id: 1,
      pregunta: "¿Cómo realizo mi pedido?",
      respuesta: "Es muy fácil: selecciona los productos que deseas, agrégalos al carrito, completa tus datos de envío y confirma tu pedido por WhatsApp. Te enviaremos la información de pago por Nequi."
    },
    {
      id: 2,
      pregunta: "¿Cuáles son los métodos de pago?",
      respuesta: "Aceptamos pagos por Nequi al número 324 471 1852. Una vez realices la transferencia, envíanos la captura de pantalla por WhatsApp para confirmar tu pedido."
    },
    {
      id: 3,
      pregunta: "¿Cuánto tiempo tarda el envío?",
      respuesta: "Nuestros productos se elaboran bajo pedido para garantizar la exclusividad y la calidad artesanal. El tiempo de producción es de aproximadamente 7 días hábiles (una semana) a partir de la confirmación del pedido, una vez terminado, el envio de 2 a 5 dias habiles"
    },
    {
      id: 4,
      pregunta: "¿Los productos son 100% cuero genuino?",
      respuesta: "Sí, todos nuestros productos están elaborados con cuero genuino de la más alta calidad. Cada pieza es trabajada artesanalmente por expertos artesanos colombianos."
    },
    {
      id: 5,
      pregunta: "¿Tienen garantía los productos?",
      respuesta: "Todos nuestros productos cuentan con garantía de 30 días contra defectos de fabricación. Si tienes algún problema, contáctanos por WhatsApp y lo resolveremos inmediatamente."
    },
    {
      id: 6,
      pregunta: "¿Puedo cambiar o devolver un producto?",
      respuesta: "Sí, aceptamos cambios y devoluciones dentro de los primeros 15 días, siempre que el producto esté en perfectas condiciones y con su empaque original."
    },
    {
      id: 7,
      pregunta: "¿Hacen envíos a toda Colombia?",
      respuesta: "Sí, realizamos envíos a todo el territorio nacional. Los costos de envío se calculan según la ciudad de destino y te los informaremos al momento de confirmar tu pedido."
    },
    {
      id: 8,
      pregunta: "¿Cómo puedo contactarlos?",
      respuesta: "Puedes contactarnos por WhatsApp al 324 471 1852, por correo a info@yomaleather.com, o a través de nuestras redes sociales. ¡Estamos para servirte!"
    }
  ]

  const togglePregunta = (id) => {
    setAbierto(abierto === id ? null : id)
  }

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f5f2' }}>
      <div className="container">
        <h2 className="section-title text-center text-primary-custom mb-5">
          Preguntas Frecuentes
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="accordionFAQ">
              {preguntas.map((item, index) => (
                <div key={item.id} className="accordion-item mb-3 border-0 shadow-sm" style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}>
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${abierto === item.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => togglePregunta(item.id)}
                      style={{
                        backgroundColor: abierto === item.id ? 'var(--color-primary)' : 'white',
                        color: abierto === item.id ? 'white' : 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                        fontWeight: '600',
                        fontSize: '1rem',
                        padding: '1.25rem 1.5rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className={`bi ${abierto === item.id ? 'bi-dash-circle' : 'bi-plus-circle'} me-3`} 
                         style={{ fontSize: '1.3rem' }}></i>
                      {item.pregunta}
                    </button>
                  </h3>
                  <div
                    className={`accordion-collapse collapse ${abierto === item.id ? 'show' : ''}`}
                  >
                    <div className="accordion-body" style={{
                      padding: '1.5rem',
                      backgroundColor: '#fafafa',
                      color: 'var(--color-dark)',
                      lineHeight: '1.8'
                    }}>
                      {item.respuesta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="lead mb-3">¿Tienes otra pregunta?</p>
          <a 
            href="https://wa.me/573244711852" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-success btn-lg px-5"
            style={{
              borderRadius: '50px',
              fontWeight: '600'
            }}
          >
            <i className="bi bi-whatsapp me-2"></i>
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ