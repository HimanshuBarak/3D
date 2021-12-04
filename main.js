let camera ,scene,cube,renderer,material,geometry;

 function init(){
    scene = new THREE.Scene();  //intialising the scene
    //setting up the camera
  const fov = 75;
  const aspect = window.innerWidth/window.innerHeight;  // the canvas default
  const near = 0.1;
  const far = 1000;
   camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
   camera.position.set(0, 0, 6);
   renderer = new THREE.WebGLRenderer({antialias: true}); 
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  document.body.appendChild(renderer.domElement); //
  
  geometry = new THREE.BoxGeometry(2,2,2);
  

  const texture = new THREE.TextureLoader().load('textures/carbon/Carbon_Normal.png');
  material = new THREE.MeshBasicMaterial( { map: texture} );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  
  
  
 }
 const vec = new THREE.Vector3(0, 0, 3);
 init();
//draws the model everytime the screen is refreshed
function animate(){
      requestAnimationFrame(animate);
      renderer.render(scene,camera);
      camera.position.lerp(vec, 0.03);
      cube.rotation.x +=0.01;
      cube.rotation.y +=0.01;
}

function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize,false);

animate();

console.log(camera.position.z)

