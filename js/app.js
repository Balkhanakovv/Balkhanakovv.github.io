/// <reference path="./node_modules/@types/three/index.d.ts" />
var ArrayObject;
(function (ArrayObject) {
    class CubeArray {
        constructor(cube) {
            this._cubeArray = [];
            for (var x = -2; x < 3; x++)
                for (var y = -2; y < 3; y++)
                    for (var z = -2; z < 3; z++) {
                        let tmp = cube.clone();
                        tmp.position.set(x, y, z);
                        this._cubeArray.push(tmp);
                    }
        }
        get cubeArray() {
            return this._cubeArray;
        }
    }
    ArrayObject.CubeArray = CubeArray;
})(ArrayObject || (ArrayObject = {}));
/// <reference path="CubeArray.ts" />
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let container = document.getElementById("container");
camera.position.set(10, 0, 15);
camera.lookAt(0, 0, 0);
renderer.setClearColor(0x8dcede, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
let light = new THREE.PointLight(0xdc7cb4);
light.position.set(5, 5, 5);
scene.add(light);
let ambLight = new THREE.AmbientLight(0xdc7cb4);
ambLight.intensity = 0.7;
scene.add(ambLight);
let geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: -10
});
let cube = new THREE.Mesh(geometry, material);
let CubeArray = new ArrayObject.CubeArray(cube);
let cubeArray = CubeArray.cubeArray;
cubeArray.forEach(cube => {
    cube.position.set(cube.position.x * 2, cube.position.y * 2, cube.position.z * 2);
    scene.add(cube);
});
animate();
window.addEventListener('resize', onWindowResize, false);
function animate() {
    requestAnimationFrame(animate);
    cubeArray.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
