/// <reference path="./node_modules/@types/three/index.d.ts" />

namespace ArrayObject {
     export class CubeArray {
          private _cubeArray: Array<THREE.Mesh> = [];

          constructor(cube: THREE.Mesh) {
               for (var x = -2; x < 3; x++)
                    for (var y = -2; y < 3; y++)
                         for (var z = -2; z < 3; z++) {
                              let tmp = cube.clone();

                              tmp.position.set(x, y, z);
                              this._cubeArray.push(tmp);
                         }
          }

          public get cubeArray() : Array<THREE.Mesh> {
               return this._cubeArray;
          }
     }
}