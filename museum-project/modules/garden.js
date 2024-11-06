// modules/garden.js

export function createGarden(scene) {
    const grassTexture = new THREE.TextureLoader().load('textures/grass_texture.jpg');
    const grassMaterial = new THREE.MeshLambertMaterial({ map: grassTexture });
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), grassMaterial);
    grass.rotation.x = -Math.PI / 2;
    grass.receiveShadow = true;
    scene.add(grass);

    // Voeg standbeelden en heggen toe
    const hedgeMaterial = new THREE.MeshLambertMaterial({ color: 0x006400 });
    for (let i = -20; i <= 20; i += 5) {
        const hedge = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), hedgeMaterial);
        hedge.position.set(i, 0.5, -10);
        hedge.castShadow = true;
        scene.add(hedge);
    }
}
