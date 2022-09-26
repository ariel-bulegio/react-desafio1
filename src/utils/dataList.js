import juegoTurim from "../img/juego-de-ollas-turim.jpg"
import juegoParis from "../img/juego-ollas-paris.webp"
import juegoAcero from "../img/juego-ollas-tramontina.webp"
import juegoCarmel from "../img/juego-tramontina-CARMEL.webp"
import juegoIpanema from "../img/juegox3-IPANEMA.webp"
import marinexOvalal from "../img/marinex-ovalada.webp"
import platoHondo from "../img/plato-hondo-floris.jpg"
import platoPlayo from "../img/plato-playo.jpg"
import vasoOval from "../img/vaso-oval.webp"
import jarraVidrio from "../img/jarra-vidrio.jpg"

const dataBase = [

    {
        id : 1,
        title : "JUEGO DE OLLA TRAMONTINA DE ACERO",
        description : "Set de ollas de acero inoxidable x3, reforzadas tapa de vidrio templado",
        image : juegoAcero,
        categoryId : 1,
        material :"Material: Acero ",
        color : "Color: Gris (Acero) ",
        stock : `Stock disponible: ${3}`,
       },
    

    {
     id : 2,
     title : "JUEGO DE OLLAS TRAMONTINA PARIS",
     description : "Set de ollas, sarten, hirvidora y cacerola con tapas. Enteflonadas antiadherente, calidad PREMIUN ",
     image : juegoParis,
     categoryId : 1,
     material :"Material: Cuerpo de aluminio con revestimiento starflon Mangos de baquelita antitermica  ",
     color : "Color: Rojo ",
     stock : `Stock disponible: ${4}`,
    },

    {
     id : 3,
     title : "JUEGO DE OLLAS TRAMONTINA TURIM",
     description : "Set de ollas, sarten y cacerola con tapas de vidrio. Enteflonadas antiadherente, calidad PREMIUN ",
     image : juegoTurim,
     categoryId : 1,
     material :"Material: Aluminio con revestimiento interno y externo en antiadherente Starflon T1 ",
     color : "Color: Negro ",
     stock : `Stock disponible: ${1}`,

    },

    {
     id : 4,
     title : "CUBIERTO TRAMONTINA IPANEMA",
     description : "Cubiertos tramontina linea IPANEMA acero inoxidable, mango plastico reforzado",
     image : juegoIpanema,
     categoryId : 2,
     material :"Material: Mango de plastico reforzado",
     color : "Color: azul",
     stock : `Stock disponible: ${10}`,
     
    },

    {
     id : 5,
     title : "JUEGO DE CUBIERTO TRAMONTINA CARMEL",
     description : "Cubiertos tramontina linea CARMEL acero inoxidable, mango plastico reforzado",
     image : juegoCarmel,
     categoryId : 2,
     material :"Material: Mango de plastico reforzado  ",
     color : "Color:Negro ",
     stock : `Stock disponible: ${45}`,
     
    },

    {
     id : 6,
     title : "FUENTE DE VIDRIO MARINEX OVAL",
     description : "Fuente de vidrio apta para horno, microondas, heladera y frezeer, MARINEX ovalada ",
     image : marinexOvalal,
     categoryId :3,
     material :"Material: Vidrio ",
     color : "Color: - ",
     stock : `Stock disponible: ${23}`,
    },

    {
     id : 7,
     title : "PLATO HONDO FLORIS",
     description : "Plato hondo floreado de porcelana ",
     image : platoHondo,
     categoryId : 4,
     material :"Material: Porcelana ",
     color : "Color: Blanco floreado",
     stock : `Stock disponible: ${34}`,
    },

    {
     id : 8,
     title : "PLATO PLAYO",
     description : "Plato playo floreado de porcelana ",
     image : platoPlayo,
     categoryId : 4,
     material :"Material: Porcelana ",
     color : "Color: Blanco floreado",
     stock : `Stock disponible: ${28}`,
    },

    {
     id : 9,
     title : "VASO GOURMET",
     description : "Vaso de vidrio GOURMET ovalado",
     image : vasoOval,
     categoryId : 3,
     material :"Material: Vidrio",
     color : "Color: - ",
     stock : `Stock disponible: ${15}`,
    },

    {
     id : 10,
     title : "JARRA DE VIDRIO",
     description : "Jarra de vidrio 2 Lts",
     image : jarraVidrio,
     categoryId : 3,
     material :"Material: Vidrio ",
     color : "Color: - ",
     stock : `Stock disponible: ${35}`,
    },

   
]


export default dataBase; 