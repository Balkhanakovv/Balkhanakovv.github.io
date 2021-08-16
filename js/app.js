/// <reference path="./node_modules/@types/three/index.d.ts" />
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
let container = document.getElementById("container");
container.appendChild(renderer.domElement);
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
animate();
window.addEventListener('resize', onWindowResize, false);
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
