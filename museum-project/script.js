// Importeer de functies uit je modules
import { createGarden } from './modules/garden.js';
import { createFacade } from './modules/facade.js';
import { createRooms } from './modules/rooms.js';

// Maak de Three.js scene, camera, en renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 10); // Camera iets lager voor een tuinperspectief

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Schaduwen inschakelen voor realisme
document.body.appendChild(renderer.domElement);

// Voeg verlichting toe
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Zachte algemene verlichting
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 0.8); // Zonlicht om schaduwen te creëren
sunLight.position.set(10, 20, 10);
sunLight.castShadow = true;
scene.add(sunLight);

// Roep de module-functies aan om onderdelen aan de scene toe te voegen
createGarden(scene);  // Voeg de tuin toe
createFacade(scene);   // Voeg de gevel van het museum toe
createRooms(scene);    // Voeg de binnenruimtes toe

// Animatie functie voor het renderen van de scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
