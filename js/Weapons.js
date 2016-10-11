Weapons = function(Player) {
    // On permet d'accéder à Player n'importe ou dans Weapons
    this.Player = Player;

    // Import de l'armurerie depuis Game
	this.Armory = Player.game.armory;
    
    // Positions selon l'arme non utilisé
    this.bottomPosition = new BABYLON.Vector3(0.5,-2.5,1);

    // Changement de Y quand l'arme est séléctionné
    this.topPositionY = -0.5;

    // Ajout de l'inventaire
	this.inventory = [];

	// Créons notre lance roquette
	var ezekiel = this.newWeapon('Ezekiel')
	this.inventory[0] = ezekiel;

	// Notre arme actuelle est Ezekiel, qui se trouve en deuxième position
	// dans le tableau des armes dans Armory
	this.actualWeapon = this.inventory.length -1;

	// On dis que notre arme en main est l'arme active
	this.inventory[this.actualWeapon].isActive = true;

	// On dis que la cadence est celle de l'arme actuelle (grace à typeWeapon)
	this.fireRate = this.Armory.weapons[this.inventory[this.actualWeapon].typeWeapon].setup.cadency;

	this._deltaFireRate = this.fireRate;

	this.canFire = true;

	this.launchBullets = false;

	// _this va nous permettre d'acceder à l'objet depuis des fonctions que nous utiliserons plus tard
	var _this = this;

	// Engine va nous être utile pour la cadence de tir
	var engine = Player.game.scene.getEngine();

	Player.game.scene.registerBeforeRender(function() {
	    if (!_this.canFire) {
	        _this._deltaFireRate -= engine.getDeltaTime();
	        if (_this._deltaFireRate <= 0  && _this.Player.isAlive) {
	            _this.canFire = true;
	            _this._deltaFireRate = _this.fireRate;
	        }
	    }
	});

};

Weapons.prototype = {
    newWeapon : function(typeWeapon) {
	    var newWeapon;
	    for (var i = 0; i < this.Armory.weapons.length; i++) {
	        if(this.Armory.weapons[i].name === typeWeapon){

	            newWeapon = BABYLON.Mesh.CreateBox('rocketLauncher', 0.5, this.Player.game.scene);

	            // Nous faisons en sorte d'avoir une arme d'apparence plus longue que large
	            newWeapon.scaling = new BABYLON.Vector3(1,0.7,2);

	            // On l'associe à la caméra pour qu'il bouge de la même facon
	            newWeapon.parent = this.Player.camera;

	            // On positionne le mesh APRES l'avoir attaché à la caméra
	            newWeapon.position = this.bottomPosition.clone();

	            newWeapon.isPickable = false;

	            // Ajoutons un material de l'arme pour le rendre plus visible
	            var materialWeapon = new BABYLON.StandardMaterial('rocketLauncherMat', this.Player.game.scene);
	            materialWeapon.diffuseColor=this.Armory.weapons[i].setup.colorMesh;

	            newWeapon.material = materialWeapon;
	            
	            newWeapon.typeWeapon = i;

	            newWeapon.isActive = false;
	            break;
	        }else if(i === this.Armory.weapons.length -1){
	            console.log('UNKNOWN WEAPON');
	        }
	    };

	    return newWeapon
	},
    fire : function(pickInfo) {
	    this.launchBullets = true;
	},
	stopFire : function(pickInfo) {
	    this.launchBullets = false;
	},
	launchFire : function() {
	    if (this.canFire) {
	        // Id de l'arme en main
			var idWeapon = this.inventory[this.actualWeapon].typeWeapon;

			// Détermine la taille de l'écran
			var renderWidth = this.Player.game.engine.getRenderWidth(true);
			var renderHeight = this.Player.game.engine.getRenderHeight(true);

			// Cast un rayon au centre de l'écran
			var direction = this.Player.game.scene.pick(renderWidth/2,renderHeight/2);
			var direction = this.Player.game.scene.pick(renderWidth/2,renderHeight/2,function (item) {
			    if (item.name == "playerBox" || item.name == "weapon" || item.id == "hitBoxPlayer")
			        return false;
			    else
			        return true;
			});
			console.log(direction)
			// Si l'arme est une arme de distance
			if(this.Armory.weapons[idWeapon].type === 'ranged'){
		        if(this.Armory.weapons[idWeapon].setup.ammos.type === 'rocket'){
		            // Nous devons tirer une roquette
		            direction = direction.pickedPoint.subtractInPlace(this.Player.camera.playerBox.position);
		            direction = direction.normalize();

		            // On crée la roquette
		            this.createRocket(this.Player.camera.playerBox,direction);
		        }else if(this.Armory.weapons[idWeapon].setup.ammos.type === 'bullet'){
		            // Nous devons tirer des balles simples
		            this.shootBullet(direction)
		        }else{
		           // Nous devons tirer au laser
		           this.createLaser()
		        }
			}else{
			    // Si ce n'est pas une arme a distance, il faut attaquer au corp a corp
			}
			this.canFire = false; 
	    } else {
	        // Nothing to do : cannot fire
	    }
	},
	createRocket : function(playerPosition, direction) {
	    var positionValue = playerPosition.position;
	    var rotationValue = playerPosition.rotation; 
	    var Player = this.Player;
	    var newRocket = BABYLON.Mesh.CreateBox("rocket", 1, Player.game.scene);

	    // Permet de connaitre l'id de l'arme dans Armory.js
		var idWeapon = this.inventory[this.actualWeapon].typeWeapon;

		// Les paramètres de l'arme
		var setupRocket = this.Armory.weapons[idWeapon].setup.ammos;
	    
	    newRocket.direction = direction;

	    newRocket.position = new BABYLON.Vector3(
	        positionValue.x + (newRocket.direction.x * 3) , 
	        positionValue.y + (newRocket.direction.y * 3) ,
	        positionValue.z + (newRocket.direction.z * 3));
	    newRocket.rotation = new BABYLON.Vector3(rotationValue.x,rotationValue.y,rotationValue.z);
	    newRocket.scaling = new BABYLON.Vector3(0.5,0.5,1);

	    newRocket.material = new BABYLON.StandardMaterial("textureWeapon", this.Player.game.scene);

	    // Paramètres récupéré depuis Armory
	    newRocket.material.diffuseColor = this.Armory.weapons[idWeapon].setup.colorMesh;
		newRocket.paramsRocket = this.Armory.weapons[idWeapon].setup;

	    // On donne accès à Player dans registerBeforeRender
	    var Player = this.Player;

	    this.Player.game._rockets.push(newRocket);
	},
	shootBullet : function(meshFound) {
	    if(meshFound.hit && meshFound.pickedMesh.isPlayer){
	        // On a touché un joueur
	    }else{
	        // L'arme ne touche pas de joueur
	        console.log('Not Hit Bullet')
	    }
	},
	createLaser : function() {
	    var setupLaser = this.Armory.weapons[this.actualWeapon].setup.ammos;

		var renderWidth = this.Player.game.engine.getRenderWidth(true);
		var renderHeight = this.Player.game.engine.getRenderHeight(true);

		var positionValue = this.inventory[this.actualWeapon].absolutePosition.clone();

		var directionPoint = this.Player.game.scene.pick(renderWidth/2,renderHeight/2,function (item) {
		    if (item.name == "playerBox" || item.name == "weapon" || item.id == "hitBoxPlayer")
		        return false;
		    else
		        return true;
		});
		if(directionPoint.hit){

		    var laserPosition = positionValue;
		    // On crée une ligne tracé entre le pickedPoint et le canon de l'arme
		    let line = BABYLON.Mesh.CreateLines("lines", [
		                laserPosition,
		                directionPoint.pickedPoint
		    ], this.Player.game.scene);
		    // On donne une couleur aléatoire
		    var colorLine = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
		    line.color = colorLine;
		    
		    // On élargis le trait pour le rendre visible
		    line.enableEdgesRendering();
		    line.isPickable = false;
		    line.edgesWidth = 40.0;
		    line.edgesColor = new BABYLON.Color4(colorLine.r, colorLine.g, colorLine.b, 1);
		    if(directionPoint.pickedMesh.isPlayer){
		        // On inflige des dégats au joueur
		    }
		    this.Player.game._lasers.push(line);
		}
	},
};