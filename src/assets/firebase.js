
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, getDoc, getDocs, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "wine-ecommerce-96714.firebaseapp.com",
  projectId: "wine-ecommerce-96714",
  storageBucket: "wine-ecommerce-96714.appspot.com",
  messagingSenderId: "451467808141",
  appId: "1:451467808141:web:8a1a5a1d2aa08d3e43c1c4"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

/* 
C CREATE
R READ
U UPDATE
D DELETE
*/

//CRUD PRODUCTOS
const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            descripcion: prod.descripcion,
            codigo: prod.codigo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

//RETORNA TODOS LOS PRODUCTOS
const getProductos = async () => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
    return {...prod.data(), id : prod.id} //data() devuelve cada uno de mis objetos cons las propiedades
  })
  return items
}

//RETORNA UN PRODUCTO
const getProducto = async (id) =>{
  const producto = await getDoc(doc(db, "productos",id))
  const item = {...producto.data(), id: producto.id}
  return item
}

//ACTUALIZAR
const updateProducto = async (id, info) =>{
  const estado = await updateDoc(doc(db,"productos",id), info)
  return estado
}

const deleteProducto = async (id) =>{
  const estado = await deleteDoc(doc(db, "productos",id))
  return estado
}

/*********************************/
//CREATE Y READ DE ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha ) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
      nombreCompleto: cliente.nombre,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      celular: cliente.celular,
      fecha: fecha,
      precioTotal: preTotal
  })

  return ordenCompra
}

//RETORNA UNA ORDEN COMPRA
const getOrdenCompra = async (id) =>{
  const ordenCompra = await getDoc(doc(db, "ordenCompra",id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}



export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}