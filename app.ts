/// <reference path="./node_modules/@types/three/index.d.ts" />

let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera( 
     75, 
     window.innerWidth / window.innerHeight, 
     0.1, 
     1000 
);
let renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
let container: any = document.getElementById("container");
container.appendChild( renderer.domElement );

let geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
let material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial(
     {
          color: 0x00ff00,
          wireframe: true
     }
);
let cube: THREE.Mesh = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

animate();
window.addEventListener( 'resize', onWindowResize, false );

function animate() : void {
     requestAnimationFrame(animate);

     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;

     renderer.render(scene, camera);
}

function onWindowResize() : void {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix(); 
     renderer.setSize( window.innerWidth, window.innerHeight );
}