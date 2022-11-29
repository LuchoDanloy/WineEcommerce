import Item from "../Item/Item";

//ENCARGADO DE HACER LOS CAMBIOS EN LOS OBJETOS

//key: es un identificador unico por cada objeto. Si o si

const ItemList = ({productList}) => {
    return (
        <>
           {productList.map(product => <Item key={product.id} producto={product}/>)}
        </>
    );
}

export default ItemList;
