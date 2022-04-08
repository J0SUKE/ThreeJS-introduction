const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( (window.innerWidth/2), (window.innerHeight/2) );

document.querySelector(".animation").append( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const cube1 = new THREE.Mesh( geometry, material1 );

scene.add( cube1 );


camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
}
animate();
