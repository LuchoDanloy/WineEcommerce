import ItemCuont from "../ItemCount/ItemCount";
const ItemDetail = ({producto}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${producto.img}`} alt="" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8 my-1" >
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Codigo: {producto.codigo}</p>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(producto.precio)} </p>
                    <p className="card-text">Stock: {producto.stock}</p>
                    <ItemCuont stock={producto.stock}  />
                    <button className="btn btn-dark">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
