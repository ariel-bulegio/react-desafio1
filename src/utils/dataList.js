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
     id : 2,
     title : "JUEGO DE OLLAS TRAMONTINA PARIS",
     description : "Set de ollas, sarten, hirvidora y cacerola con tapas. Enteflonadas antiadherente, calidad PREMIUN ",
     image : juegoParis,
    },

    {
     id : 3,
     title : "JUEGO DE OLLAS TRAMONTINA TURIM",
     description : "Set de ollas, sarten y cacerola con tapas de vidrio. Enteflonadas antiadherente, calidad PREMIUN ",
     image : juegoTurim,
    },

    {
     id : 4,
     title : "CUBIERTO TRAMONTINA IPANEMA",
     description : "Cubiertos tramontina linea IPANEMA acero inoxidable, mango plastico reforzado",
     image : juegoIpanema,
     material :"Material: Mango de plastico reforzado",
     color : "azul",
     stock : "Stock disponible: 10",
     
    },

    {
     id : 5,
     title : "JUEGO DE CUBIERTO TRAMONTINA CARMEL",
     description : "Cubiertos tramontina linea CARMEL acero inoxidable, mango plastico reforzado",
     image : juegoCarmel,
    },

    {
     id : 6,
     title : "FUENTE DE VIDRIO MARINEX OVAL",
     description : "Fuente de vidrio apta para horno, microondas, heladera y frezeer, MARINEX ovalada ",
     image : marinexOvalal,
    },

    {
     id : 7,
     title : "PLATO HONDO FLORIS",
     description : "Plato hondo floreado de porcelana ",
     image : platoHondo,
    },

    {
     id : 8,
     title : "PLATO PLAYO",
     description : "Plato playo floreado de porcelana ",
     image : platoPlayo,
    },

    {
     id : 9,
     title : "VASO GOURMET",
     description : "Vaso de vidrio GOURMET ovalado",
     image : vasoOval,
    },

    {
     id : 10,
     title : "JARRA DE VIDRIO",
     description : "Jarra de vidrio 2 Lts",
     image : jarraVidrio,
    },

    {
        id : 1,
        title : "JUEGO DE OLLA TRAMONTINA DE ACERO",
        description : "Set de ollas de acero inoxidable x3, reforzadas tapa de vidrio templado",
        image : juegoAcero,
        
       },
]

//  const list = ()=>{
//      return new Promise((resolve,reject)=>{
//          setTimeout(() => {
//              resolve(dataBase);
//         },2000);
//      })
//  }
export default dataBase; 