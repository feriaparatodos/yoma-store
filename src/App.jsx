import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { productos } from './data/productos'

function App() {
  const [carrito, setCarrito] = useState([])
  const [mostrarCarrito, setMostrarCarrito] = useState(false)

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id)
    
    if (productoExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId))
  }

  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad === 0) {
      eliminarDelCarrito(productoId)
    } else {
      setCarrito(carrito.map(item =>
        item.id === productoId
          ? { ...item, cantidad: nuevaCantidad }
          : item
      ))
    }
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <div className="App">
      <Navbar 
        cantidadCarrito={cantidadTotal} 
        onMostrarCarrito={() => setMostrarCarrito(true)} 
      />
      <Hero />
      <ProductGrid 
        productos={productos} 
        onAgregarAlCarrito={agregarAlCarrito}
      />
      <About />
      <FAQ />
      <Footer />
      
      <Cart
        carrito={carrito}
        mostrar={mostrarCarrito}
        onCerrar={() => setMostrarCarrito(false)}
        onEliminar={eliminarDelCarrito}
        onActualizarCantidad={actualizarCantidad}
        onVaciar={vaciarCarrito}
      />
    </div>
  )
}

export default App