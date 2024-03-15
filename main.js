import * as THREE from "./three.js/build/three.module.js";
import { OrbitControls } from "./three.js/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "./three.js/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "./three.js/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "./three.js/examples/jsm/geometries/TextGeometry.js";

const width = window.innerWidth;
const height = window.innerHeight;

// loader
const textureLoader = new THREE.TextureLoader();
const gltfLoader = new GLTFLoader();

// scene
const scene = new THREE.Scene();

// camera
const camera1 = new THREE.PerspectiveCamera(120, width/height);
camera1.position.set(0, 70, 70);
camera1.lookAt(0, 0, 0);

const camera2 = new THREE.PerspectiveCamera(45, width/height);
camera2.position.set(90, 10, 0);
camera2.lookAt(0, 0, 0);

let camera = camera1;

// renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
renderer.shadowMap.enabled = true;
document.body.append(renderer.domElement);

// orbit controls only camera1
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// ------------------------- ELEMENT ----------------------------

// sky box
const skyBoxTexture = [
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./public/skybox/front.png"),
        side: THREE.DoubleSide
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./public/skybox/back.png"),
        side: THREE.DoubleSide
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./public/skybox/up.png"),
        side: THREE.DoubleSide
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./public/skybox/down.png"),
        side: THREE.DoubleSide
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./public/skybox/left.png"),
        side: THREE.DoubleSide
    }),
    new THREE.MeshBasicMaterial({
        map: textureLoader.load("./public/skybox/right.png"),
        side: THREE.DoubleSide
    })
]
const skyBoxGeometry = new THREE.BoxGeometry(200, 200, 200);
const skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxTexture);
skyBox.position.set(0, 99, 0);
scene.add(skyBox);

// disco ball
const discoBallGeo = new THREE.SphereGeometry(7, 100, 100);
const discoBallMaterial = new THREE.MeshBasicMaterial({
    map: textureLoader.load("./public/texture/disco-ball-texture.jpg")
});
const discoBall = new THREE.Mesh(discoBallGeo, discoBallMaterial);
discoBall.position.set(0, 70, 0);
scene.add(discoBall);

const discoBallGeo2 = new THREE.SphereGeometry(7, 100, 100);
const discoBallMaterial2 = new THREE.MeshBasicMaterial({
    map: textureLoader.load("./public/texture/disco-texture-2.jpg")
});
const discoBall2 = new THREE.Mesh(discoBallGeo2, discoBallMaterial2);
discoBall2.position.set(30, 70, 0);
scene.add(discoBall2);

const discoBallGeo3 = new THREE.SphereGeometry(7, 100, 100);
const discoBallMaterial3 = new THREE.MeshBasicMaterial({
    map: textureLoader.load("./public/texture/disco-texture-3.jpg")
});
const discoBall3 = new THREE.Mesh(discoBallGeo3, discoBallMaterial3);
discoBall3.position.set(-30, 70, 0);
scene.add(discoBall3);

// spinning point
const vector2D = [
        new THREE.Vector2(0, 15),
        new THREE.Vector2(-15, 0),
        new THREE.Vector2(0, -15),
        new THREE.Vector2(15, 0),
        new THREE.Vector2(0, 15)
];

// 1
const pointGeometry = new THREE.BufferGeometry().setFromPoints(vector2D);
const pointMaterial = new THREE.PointsMaterial({
   color: "#FFFF00"
});
const point = new THREE.Points(pointGeometry, pointMaterial);
point.rotateX(1);
discoBall.add(point);    

const lineGeometry = new THREE.BufferGeometry().setFromPoints(vector2D);
const lineMaterial = new THREE.LineBasicMaterial({
    color: "#00FFFF"
});
const line = new THREE.Line(lineGeometry, lineMaterial);
line.rotateX(1);
discoBall.add(line);

// 2
const pointGeometry2 = new THREE.BufferGeometry().setFromPoints(vector2D);
const pointMaterial2 = new THREE.PointsMaterial({
   color: "#FFFF00"
});
const point2 = new THREE.Points(pointGeometry2, pointMaterial2);
point2.rotateX(-1);
discoBall.add(point2);     

const lineGeometry2 = new THREE.BufferGeometry().setFromPoints(vector2D);
const lineMaterial2 = new THREE.LineBasicMaterial({
    color: "#00FFFF"
});
const line2 = new THREE.Line(lineGeometry2, lineMaterial2);
line2.rotateX(-1);
discoBall.add(line2);

// 3
const pointGeometry3 = new THREE.BufferGeometry().setFromPoints(vector2D);
const pointMaterial3 = new THREE.PointsMaterial({
   color: "#FFFF00"
});
const point3 = new THREE.Points(pointGeometry3, pointMaterial3);
point3.rotateY(1.55);
discoBall.add(point3);     

const lineGeometry3 = new THREE.BufferGeometry().setFromPoints(vector2D);
const lineMaterial3 = new THREE.LineBasicMaterial({
    color: "#00FFFF"
});
const line3 = new THREE.Line(lineGeometry3, lineMaterial3);
line3.rotateY(1.55);
discoBall.add(line3);

// cylinder
const cylinderGeometry = new THREE.CylinderGeometry(10, 10, 45, 32);
const cylinderMaterial = new THREE.MeshLambertMaterial({
    color: "#FFFF00"
});
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(-30, 0, -60);
cylinder.castShadow = true;
cylinder.userData.changeable = true;
scene.add(cylinder);

const cylinderGeometry2 = new THREE.CylinderGeometry(10, 10, 20, 32);
const cylinderMaterial2 = new THREE.MeshLambertMaterial({
    color: "#FF0000"
});
const cylinder2 = new THREE.Mesh(cylinderGeometry2, cylinderMaterial2);
cylinder2.position.set(0, 0, -60);
cylinder2.castShadow = true;
cylinder2.userData.changeable = true;
scene.add(cylinder2);

const cylinderGeometry3 = new THREE.CylinderGeometry(10, 10, 45, 32);
const cylinderMaterial3 = new THREE.MeshLambertMaterial({
    color: "#00FFFF"
});
const cylinder3 = new THREE.Mesh(cylinderGeometry3, cylinderMaterial3);
cylinder3.position.set(30, 0, -60);
cylinder3.castShadow = true;
cylinder3.userData.changeable = true;
scene.add(cylinder3);

const cylinderGeometry4 = new THREE.CylinderGeometry(10, 10, 70, 32);
const cylinderMaterial4 = new THREE.MeshLambertMaterial({
    color: "#00FF00"
});
const cylinder4 = new THREE.Mesh(cylinderGeometry4, cylinderMaterial4);
cylinder4.position.set(-60, 0, -60);
cylinder4.castShadow = true;
cylinder4.userData.changeable = true;
scene.add(cylinder4);

const cylinderGeometry5 = new THREE.CylinderGeometry(10, 10, 70, 32);
const cylinderMaterial5 = new THREE.MeshLambertMaterial({
    color: "#FF00FF"
});
const cylinder5 = new THREE.Mesh(cylinderGeometry5, cylinderMaterial5);
cylinder5.position.set(60, 0, -60);
cylinder5.castShadow = true;
cylinder5.userData.changeable = true;
scene.add(cylinder5);

// lighting

const directionalLight = new THREE.DirectionalLight("#FFFFFF", 1);
directionalLight.position.set(0, 40, 60);
directionalLight.castShadow = true;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.top = 30;
directionalLight.shadow.camera.bottom = -30;
scene.add(directionalLight);

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(directionalLightHelper);

const spotLight = new THREE.SpotLight("#FFFF00", 5, 120, Math.PI / 4, 0);
spotLight.position.set(-90, 40, 0);
scene.add(spotLight);

// const spotLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(spotLightHelper);

const spotLight2 = new THREE.SpotLight("#FF00FF", 5, 120, Math.PI / 4, 0);
spotLight2.position.set(90, 40, 0);
scene.add(spotLight2);

// const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
// scene.add(spotLightHelper2);

// const directionalLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(directionalLightShadowHelper);

// Text
const fontLoader = new FontLoader();
fontLoader.load("./three.js/examples/fonts/helvetiker_bold.typeface.json", (font) => {
    let textGeometry = new TextGeometry("PARJY", {
        font: font, 
        size: 20,
        height: 5
    });
    let textMaterial = new THREE.MeshStandardMaterial();
    let text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.set(-45, 0, -50);
    text.userData.changeable = true;
    scene.add(text);
});

// 3D model
let lightStand;
gltfLoader.load("./public/model/light-stand/scene.gltf", (model) => {
    lightStand = model.scene;
    lightStand.scale.set(30, 30, 30);
    lightStand.position.z = 60;
    lightStand.rotateY(5.3);
    scene.add(lightStand);
});

let lightStand2;
gltfLoader.load("./public/model/light-stand/scene.gltf", (model) => {
    lightStand2 = model.scene;
    lightStand2.scale.set(30, 30, 30);
    lightStand2.position.x = 90;
    lightStand2.rotateY(0.5);
    scene.add(lightStand2);
});

let lightStand3;
gltfLoader.load("./public/model/light-stand/scene.gltf", (model) => {
    lightStand3 = model.scene;
    lightStand3.scale.set(30, 30, 30);
    lightStand3.position.x = -90;
    lightStand3.rotateY(4);
    scene.add(lightStand3);
});

let dancer1;
gltfLoader.load("./public/model/dance1/scene.gltf", (model) => {
    dancer1 = model.scene;
    dancer1.scale.set(10, 10, 10);
    dancer1.position.set(-20, 0, -10);
    dancer1.rotateY(90);
    dancer1.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer1);
});

let dancer2;
gltfLoader.load("./public/model/dance2/scene.gltf", (model) => {
    dancer2 = model.scene;
    dancer2.scale.set(10, 10, 10);
    dancer2.position.set(20, 0, -30);
    dancer2.rotateY(180);
    dancer2.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer2);
});

let dancer3;
gltfLoader.load("./public/model/dance3/scene.gltf", (model) => {
    dancer3 = model.scene;
    dancer3.scale.set(10, 10, 10);
    dancer3.rotateY(-90);
    dancer3.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer3);
});

let dancer4;
gltfLoader.load("./public/model/dance4/scene.gltf", (model) => {
    dancer4 = model.scene;
    dancer4.scale.set(10, 10, 10);
    dancer4.position.set(20, 0, 10);
    dancer4.rotateY(90);
    dancer4.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer4);
});

let dancer5;
gltfLoader.load("./public/model/dance5/scene.gltf", (model) => {
    dancer5 = model.scene;
    dancer5.scale.set(10, 10, 10);
    dancer5.position.set(0, 0, 30);
    dancer5.rotateY(-180);
    dancer5.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer5);
});

let dancer6;
gltfLoader.load("./public/model/dance1/scene.gltf", (model) => {
    dancer6 = model.scene;
    dancer6.scale.set(10, 10, 10);
    dancer6.position.set(20, 0, 30);
    dancer6.rotateY(-90);
    dancer6.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer6);
});

let dancer7;
gltfLoader.load("./public/model/dance2/scene.gltf", (model) => {
    dancer7 = model.scene;
    dancer7.scale.set(10, 10, 10);
    dancer7.position.set(-20, 0, 20);
    dancer7.rotateY(120);
    dancer7.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer7);
});

let dancer8;
gltfLoader.load("./public/model/dance3/scene.gltf", (model) => {
    dancer8 = model.scene;
    dancer8.scale.set(10, 10, 10);
    dancer8.position.set(10, 0, 20);
    dancer8.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer8);
});

let dancer9;
gltfLoader.load("./public/model/dance4/scene.gltf", (model) => {
    dancer9 = model.scene;
    dancer9.scale.set(10, 10, 10);
    dancer9.position.set(-30, 0, 0);
    dancer9.rotateY(90);
    dancer9.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer9);
});

let dancer10;
gltfLoader.load("./public/model/dance5/scene.gltf", (model) => {
    dancer10 = model.scene;
    dancer10.scale.set(10, 10, 10);
    dancer10.position.set(10, 0, -20);
    dancer10.rotateY(180);
    dancer10.traverse((child) => {
        child.castShadow = true;
    });
    scene.add(dancer10);
});

// floor
const floorGeo1 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo2 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo3 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo4 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo5 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo6 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo7 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo8 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo9 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo10 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo11 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo12 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo13 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo14 = new THREE.BoxGeometry(30, 1, 30);
const floorGeo15 = new THREE.BoxGeometry(30, 1, 30);

const floorMaterial1 = new THREE.MeshStandardMaterial({
    color: "#00FF00",
    side: THREE.DoubleSide
});
const floorMaterial2 = new THREE.MeshStandardMaterial({
    color: "#00FFFF",
    side: THREE.DoubleSide
});
const floorMaterial3 = new THREE.MeshStandardMaterial({
    color: "#FF00FF",
    side: THREE.DoubleSide
});
const floorMaterial4 = new THREE.MeshStandardMaterial({
    color: "#00FFFF",
    side: THREE.DoubleSide
});
const floorMaterial5 = new THREE.MeshStandardMaterial({
    color: "#FF00FF",
    side: THREE.DoubleSide
});
const floorMaterial6 = new THREE.MeshStandardMaterial({
    color: "#00FF00",
    side: THREE.DoubleSide
});
const floorMaterial7 = new THREE.MeshStandardMaterial({
    color: "#FF00FF",
    side: THREE.DoubleSide
});
const floorMaterial8 = new THREE.MeshStandardMaterial({
    color: "#00FF00",
    side: THREE.DoubleSide
});
const floorMaterial9 = new THREE.MeshStandardMaterial({
    color: "#00FFFF",
    side: THREE.DoubleSide
});
const floorMaterial10 = new THREE.MeshStandardMaterial({
    color: "#00FF00",
    side: THREE.DoubleSide
});
const floorMaterial11 = new THREE.MeshStandardMaterial({
    color: "#FFFF00",
    side: THREE.DoubleSide
});
const floorMaterial12 = new THREE.MeshStandardMaterial({
    color: "#FF0000",
    side: THREE.DoubleSide
});
const floorMaterial13 = new THREE.MeshStandardMaterial({
    color: "#FFFF00",
    side: THREE.DoubleSide
});
const floorMaterial14 = new THREE.MeshStandardMaterial({
    color: "#FF0000",
    side: THREE.DoubleSide
});
const floorMaterial15 = new THREE.MeshStandardMaterial({
    color: "#00FFFF",
    side: THREE.DoubleSide
});

const floor1 = new THREE.Mesh(floorGeo1, floorMaterial1);
floor1.position.x = -30;
floor1.position.z = -30;
const floor2 = new THREE.Mesh(floorGeo2, floorMaterial2);
floor2.position.z = -30;
const floor3 = new THREE.Mesh(floorGeo3, floorMaterial3);
floor3.position.x = 30;
floor3.position.z = -30;

const floor4 = new THREE.Mesh(floorGeo4, floorMaterial4);
floor4.position.x = -30;
const floor5 = new THREE.Mesh(floorGeo5, floorMaterial5);
const floor6 = new THREE.Mesh(floorGeo6, floorMaterial6);
floor6.position.x = 30;

const floor7 = new THREE.Mesh(floorGeo7, floorMaterial7);
floor7.position.x = -30;
floor7.position.z = 30;
const floor8 = new THREE.Mesh(floorGeo8, floorMaterial8);
floor8.position.z = 30;
const floor9 = new THREE.Mesh(floorGeo9, floorMaterial9);
floor9.position.x = 30;
floor9.position.z = 30;

const floor10 = new THREE.Mesh(floorGeo10, floorMaterial10);
floor10.position.x = -60;
floor10.position.z = 30;
const floor11 = new THREE.Mesh(floorGeo11, floorMaterial11);
floor11.position.x = -60;
const floor12 = new THREE.Mesh(floorGeo12, floorMaterial12);
floor12.position.x = -60;
floor12.position.z = -30;

const floor13 = new THREE.Mesh(floorGeo13, floorMaterial13);
floor13.position.x = 60;
floor13.position.z = 30;
const floor14 = new THREE.Mesh(floorGeo14, floorMaterial14);
floor14.position.x = 60;
const floor15 = new THREE.Mesh(floorGeo15, floorMaterial15);
floor15.position.x = 60;
floor15.position.z = -30;

floor1.receiveShadow = true;
floor2.receiveShadow = true;
floor3.receiveShadow = true;
floor4.receiveShadow = true;
floor5.receiveShadow = true;
floor6.receiveShadow = true;
floor7.receiveShadow = true;
floor8.receiveShadow = true;
floor9.receiveShadow = true;
floor10.receiveShadow = true;
floor11.receiveShadow = true;
floor12.receiveShadow = true;
floor13.receiveShadow = true;
floor14.receiveShadow = true;
floor15.receiveShadow = true;

floor1.userData.changeable = true;
floor2.userData.changeable = true;
floor3.userData.changeable = true;
floor4.userData.changeable = true;
floor5.userData.changeable = true;
floor6.userData.changeable = true;
floor7.userData.changeable = true;
floor8.userData.changeable = true;
floor9.userData.changeable = true;
floor10.userData.changeable = true;
floor11.userData.changeable = true;
floor12.userData.changeable = true;
floor13.userData.changeable = true;
floor14.userData.changeable = true;
floor15.userData.changeable = true;

scene.add(floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10, floor11, floor12, floor13, floor14, floor15);

// ------------------------- END OF ELEMENT ----------------------------

// raycaster
const colors = ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF", "#FFFFFF"];

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let changeableObject;

function onPointMove(event) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0 && intersects[0].object.userData.changeable) {
        changeableObject = intersects[0].object;
        changeableObject.material.color.set(randomColor);
    }
}

window.addEventListener("mousemove", onPointMove);

// resize window
function onWindowResize(){
    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

window.addEventListener("resize", onWindowResize);

// camera movement
window.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key === "a") {
        camera.rotateY(0.05);
    }
    else if (e.key === "d") {
        camera.rotateY(-0.05);
    }
    else if (e.key === "w") {
        camera.rotateX(0.05);
    }
    else if (e.key === "s") {
        camera.rotateX(-0.05);
    }
    else if (e.key === "Enter") {
        if (camera === camera1)
            camera.position.set(0, 70, 70);
        else
            camera.position.set(90, 10, 0);

        camera.lookAt(0, 0, 0);
    }
    //switch camera
    else if (e.key === " ") {
        if (camera === camera1) 
            camera = camera2;
        else
            camera = camera1;
    }
});

window.addEventListener("wheel", () => {
    if (camera === camera1)
        camera.position.z -= 0.5;
    else
        camera.position.x -= 0.5;
});

let step = 0;
let speed = 0.05;

// render
function animate() {
    requestAnimationFrame(animate);

    discoBall.rotateY(0.01);
    discoBall2.rotateY(-0.01);
    discoBall3.rotateY(-0.01);

    point.rotateX(0.05);
    point2.rotateX(-0.05);
    point3.rotateX(0.05);

    line.rotateX(0.05);
    line2.rotateX(-0.05);
    line3.rotateX(0.05);

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    spotLight.color.set(randomColor);
    spotLight2.color.set(randomColor);

    step += speed;
    cylinder.position.y = Math.floor(Math.random() * 10) * Math.abs(Math.sin(step));
    cylinder2.position.y = Math.floor(Math.random() * 10)  * Math.abs(Math.sin(step));
    cylinder3.position.y = Math.floor(Math.random() * 10)  * Math.abs(Math.sin(step));
    cylinder4.position.y = Math.floor(Math.random() * 10)  * Math.abs(Math.sin(step));
    cylinder5.position.y = Math.floor(Math.random() * 10)  * Math.abs(Math.sin(step));

    dancer1.position.y = 2 * Math.abs(Math.sin(step));
    dancer2.position.y = 2 * Math.abs(Math.sin(step));
    dancer3.position.y = 2 * Math.abs(Math.sin(step));
    dancer4.position.y = 2 * Math.abs(Math.sin(step));
    dancer5.position.y = 2 * Math.abs(Math.sin(step));
    dancer6.position.y = 2 * Math.abs(Math.sin(step));
    dancer7.position.y = 2 * Math.abs(Math.sin(step));
    dancer8.position.y = 2 * Math.abs(Math.sin(step));
    dancer9.position.y = 2 * Math.abs(Math.sin(step));
    dancer10.position.y = 2 * Math.abs(Math.sin(step));

    renderer.render(scene, camera);
}

animate();