var module = function(){
                var threeWin = new ThreeWindow(new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ));
            var geomet = new THREE.BoxGeometry(1,1,1);
            var gndGeo = new THREE.BoxGeometry(20,0.1,20);
            var gMat = new THREE.MeshLambertMaterial( {color: 0x000f0f });
            var mat = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh(geomet, mat);
            var ground = new THREE.Mesh(gndGeo, gMat);
            ground.position.y = -0.7;
            
            var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
            var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
            var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
 
            var pointLight = new THREE.PointLight(0xffffff);
            pointLight.position.set(0, 300, 200);
 
            threeWin.scene.add(pointLight);
            threeWin.scene.add(skybox);
 

            var view = new THREE.Vector3(0,0,0);
            threeWin.scene.add(cube);
            threeWin.scene.add(ground);
            
            threeWin.camera.position.z = 5;

            document.onmousemove = function(event){
                view.x = (event.pageX / window.innerWidth) - 0.5;
                view.y = -(event.pageY / window.innerHeight) + 0.5;

                threeWin.camera.lookAt(view);
            }
            
            var update = function()
            {
                cube.rotation.y += 0.01;                
            };
            
            var draw = function()
            {
                requestAnimationFrame( draw );
                update();
                threeWin.renderer.render(threeWin.scene, threeWin.camera);
            }
            return{update:update, draw:draw};
}();
module.draw();