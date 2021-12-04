

 const modelViewer = document.querySelector('#hotspot-demo');

 const zoomIn=() => {
   
    const orbitCycle = [
      '35deg 65deg 0.8m',
     
      modelViewer.cameraOrbit
    ];
  console.log(modelViewer.cameraOrbit)
    setTimeout(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 100);
  };
modelViewer.addEventListener("load",zoomIn)

