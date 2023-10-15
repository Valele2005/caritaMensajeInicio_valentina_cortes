// Utilizo la funcion new Date() para obtener la fecha actual y el getDay () para el dia de la semana //
const ahora=new Date().getDay();
   let mensaje;


// Utilizo una condicional donde comparo el dia de la fecha actual y el numero de la semana de cada dia //
   if (ahora ==7){
 // Aqui en todos los casos hago el llamado de la ruta de la imagen y la almaceno en la variable imagen//  
     //Tambien llamo la variable mensaje para insertarle el mensaje de cada dia dependiendo de la condicional//     
      mensaje = "Domingo, comienza tus metas antes que los demás.";
   	imagen="imagenes/carita0.jpeg";


   }


   else if (ahora ==1){
      mensaje = "Lunes, principio de semana: Sí voy a trabajar";
   	imagen="imagenes/carita1.jpeg";

   }

  else if (ahora ==2){
      mensaje = "Martes, a continuar lo que has comenzado.";
   	imagen="imagenes/carita2.jpeg";

   }


  else  if (ahora ==3){
      mensaje = "Miércoles, media semana, completa actitud";
   	imagen="imagenes/carita3.jpeg";

   }

  else  if (ahora ==4){
      mensaje = "Jueves, un paso más (pero más fuerte).";
   	imagen="imagenes/carita4.jpeg";

   }

  else if (ahora ==5){
       mensaje = "Viernes, un día que todos amamos.";
   	imagen="imagenes/carita5.jpeg";

   }

   else if (ahora ==6){
      mensaje ="Sábado, relajarte no te aleja de tus objetivos, te ayuda a aclararlos.";
      imagen="imagenes/carita6.jpeg";

   }
// Aqui hago la conexion con el HTML y el elemento img para insertar la ruta de la imagen //
 //Tambien llamo desde el HTML la etiqueta <p> para insertar el mensaje segun el dia//

   document.images["carita"].src=imagen;
   document.getElementById('output').innerHTML=mensaje;
m