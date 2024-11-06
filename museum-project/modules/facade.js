// modules/facade.js

export function createFacade(scene) {
    const buildingMaterial = new THREE.MeshLambertMaterial({ color: 0xa9a9a9 });
    const museumFront = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 1), buildingMaterial);
    museumFront.position.set(0, 5, -20);
    museumFront.castShadow = true;
    scene.add(museumFront);

    // Moderne glazen deuren
    const glassMaterial = new THREE.MeshPhongMaterial({ color: 0x87CEFA, opacity: 0.6, transparent: true });
    const glassDoor = new THREE.Mesh(new THREE.BoxGeometry(3, 6, 0.1), glassMaterial);
    glassDoor.position.set(0, 3, -19.9); // Plaats de deur vlak voor de gevel
    glassDoor.castShadow = true;
    scene.add(glassDoor);
}
