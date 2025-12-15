function About() {
  return (
    <section id="nosotros" className="py-5" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="/images/Manilla.png" 
              alt="Artesanía en cuero" 
              className="img-fluid rounded shadow"
              style={{ width: '100%', maxWidth: '450px', height: '600px' }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title text-primary-custom" style={{ textAlign: 'left' }}>
              Nuestra Historia
            </h2>
            <p className="lead mb-4">
              <strong>YOMALEATHER.COM</strong>nace desde la verdad de una mujer que lucha, que se reinventa y que entiende que el verdadero lujo no está en lo superficial, sino en la trascendencia. Nuestra filosofía se construye sobre la fuerza femenina, la autenticidad, la responsabilidad y la belleza sutil de lo que es real.
Creemos en un lujo que honra nuestras raíces, que respeta el entorno y que impulsa a las mujeres a cambiar su historia.
Cada diseño es un símbolo de resiliencia; cada bolso, una declaración de identidad; cada colección, un acto de reconocimiento a la mujer que lidera, que ama, que siente y que se levanta incluso en sus momentos más difíciles.  
Yoma Leather no es solo un lujo, es una marca que lidera con propósito y acompaña a la mujer en cada conquista.
 No solo crea accesorios: crea significado.
 No solo es una marca: es una fuerza que inspira, eleva y transforma.
            </p>
            <p className="mb-4">
              Trabajamos con cuero genuino de la más alta calidad, combinando técnicas 
              artesanales tradicionales con diseños contemporáneos. Cada producto es 
              cuidadosamente elaborado por manos expertas que han perfeccionado su arte 
              a través de generaciones.
            </p>
            <p className="mb-4">
              Nuestra misión es unir la tradición llanera de Casanare con la excelencia 
              artesanal de Santander, creando piezas únicas que cuentan historias y 
              perduran en el tiempo.
            </p>
            <div className="row g-4">
              <div className="col-6">
                <div className="text-center p-3 bg-light rounded">
                  <h3 className="text-accent display-6 fw-bold mb-2">100%</h3>
                  <p className="text-muted mb-0">Cuero Genuino</p>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center p-3 bg-light rounded">
                  <h3 className="text-accent display-6 fw-bold mb-2">2</h3>
                  <p className="text-muted mb-0">Departamentos Unidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About