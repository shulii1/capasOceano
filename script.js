    // Obtener los elementos del DOM 
    
    const container = document.querySelector(".container"); 
    const depthValue = document.querySelector("#depth-value"); 
    const layers = document.querySelectorAll(".layer");

   // Crear un objeto con los valores de profundidad de cada capa
    const depths = 
    {
     intro: "0 m",
     epipelagic: "-200 m",
     mesopelagic: "-1000 m",
     bathypelagic: "-4000 m",
     abyssopelagic: "-6000 m",
     hadalpelagic: "-11000 m"
    };

   // Crear una función para actualizar la barra de profundidad según el scroll
   function updateDepthBar() 
   {
     // Obtener la posición del scroll
     const scrollPosition = container.scrollTop;

     // Recorrer las capas del océano
     for (let layer of layers) 
    {
       // Obtener el id, la altura y la posición de cada capa
       const layerId = layer.id;
       const layerHeight = layer.offsetHeight;
       const layerTop = layer.offsetTop;
       const layerBottom = layerTop + layerHeight;

       // Comprobar si el scroll está dentro de la capa
       if (scrollPosition >= layerTop && scrollPosition <= layerBottom) 
       {
         // Actualizar el valor de profundidad según el id de la capa
         depthValue.textContent = depths[layerId];
       }
    }
   }

   // Añadir un evento de scroll al contenedor
   container.addEventListener("scroll", updateDepthBar);
    container.addEventListener("touchmove", updateDepthBar);
