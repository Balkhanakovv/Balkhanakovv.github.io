/// <reference path="CubeArray.ts" />
let scene: THREE.Scene = new THREE.Scene();
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
let container: any = document.getElementById("container");

camera.position.set(10, 0, 15);
camera.lookAt(0, 0, 0);

renderer.setClearColor(0x8dcede, 1);
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

let light: THREE.PointLight = new THREE.PointLight(0xdc7cb4);
light.position.set(5, 5, 5);
scene.add(light);

let ambLight: THREE.AmbientLight = new THREE.AmbientLight(0xdc7cb4);
ambLight.intensity = 0.7;
scene.add(ambLight);

let geometry: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let material: THREE.MeshBasicMaterial = new THREE.MeshPhongMaterial(
     {
          color: 0xffffff,
          shininess: -10
     }
);
let cube: THREE.Mesh = new THREE.Mesh(geometry, material);

let CubeArray: ArrayObject.CubeArray = new ArrayObject.CubeArray(cube);
let cubeArray: Array<THREE.Mesh> = CubeArray.cubeArray;

cubeArray.forEach(cube => {
     cube.position.set(cube.position.x * 2, cube.position.y * 2, cube.position.z * 2);
     scene.add(cube);
});

animate();
window.addEventListener( 'resize', onWindowResize, false );

function animate() : void {
     requestAnimationFrame(animate);

     cubeArray.forEach(cube => {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
     });

     renderer.render(scene, camera);
}

function onWindowResize() : void {
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix(); 
     renderer.setSize( window.innerWidth, window.innerHeight );
}