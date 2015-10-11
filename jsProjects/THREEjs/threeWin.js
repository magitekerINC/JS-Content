function ThreeWindow(camera) {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.camera = camera;
    
    if(!this.renderer || !this.scene || !this.camera)
        return;
    
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    
    var draw = function(update){
        requestAnimationFrame( this.draw );

        this.renderer.render(this.scene, this.camera);
    }
}