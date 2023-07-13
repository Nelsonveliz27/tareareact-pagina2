import "./Style.css"
import Titulo from "./Tituto"
import Precio from "./Precio"
import Descripcion from "./Descripcion"
import Categoria from "./Categoria"


export default function Contenido({prod}) {
    
    return(<>
    
    <div className="contenidoProductos">
        {/*<div className="columna1Prod">
            <a href="#img.zoom_1"><img src={prod.foto}/></a>
            <a href="#img.zoom_2"><img src={prod.foto}/></a>
    </div>*/}
        <div className="columna1Prod">
            <ul id="zoom">
                <li><img src={prod.foto} id="img.zoom_1" alt="imagenproductos" /></li>                
            </ul>   
        </div>
        <div className="columna2Prod">
            <h2 className="info_title"><Titulo Titulo={prod.Titulo}/></h2>
            <h4><Categoria Categoria={prod.Categoria}/></h4>
            <p className="propoleo"><Descripcion Descripcion={prod.Descripcion}/></p>
            <h2 className="info_precio"> <Precio Precio= {prod.Precio}/></h2>
            <br/>
            <br/>
            <a href="/carrito/index.html">
            <button className="agregarAlCarro">Agregar al carrito</button> </a>
        </div>
    </div>
</>)
}

