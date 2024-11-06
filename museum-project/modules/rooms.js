// modules/rooms.js

export function createRooms(scene) {
    const roomMaterial = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });
    const room = new THREE.Mesh(new THREE.BoxGeometry(15, 8, 15), roomMaterial);
    room.position.set(0, 4, -35); // Plaats de ruimte achter de gevel
    room.castShadow = true;
    scene.add(room);

    // Je kunt hier ook schilderijen, meubels of andere objecten toevoegen
}
