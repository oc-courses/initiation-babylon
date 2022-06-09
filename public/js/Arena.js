Arena = function(game,props) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

    // Import de l'armurerie depuis Game
    this.Armory = game.armory;
    
    // CREATION DES LUMIERES
    var light = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    light.diffuse = new BABYLON.Color3(0.8,0.8,1);
    light.specular = new BABYLON.Color3(0,0,0);
    light.range = 150;

    var light4 = light.clone('light5');
    light4.position = new BABYLON.Vector3(35, 15, 120);
    light4.range = 100;

    var light10 = light.clone('light5');
    light10.position = new BABYLON.Vector3(-35, 15, 120);
    light10.range = 100;

    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(30, 13, 50), scene);
    light2.diffuse = new BABYLON.Color3(1,0.5,0.5);
    light2.specular = new BABYLON.Color3(0,0,0);
    // light4.position = new BABYLON.Vector3(30);
    light2.range = 60;
    light2.intensity = 0.5;

    var light5 = light2.clone('light5');
    light5.position = new BABYLON.Vector3(-30, 13, 50)
    light5.intensity = 0.5;

    var light3 = new BABYLON.PointLight("light3", new BABYLON.Vector3(-30, 13, -50), scene);
    light3.diffuse = new BABYLON.Color3(1,0.5,0.5);
    light3.specular = new BABYLON.Color3(0,0,0);
    light3.range = 60;

    var light6 = light3.clone('light6');
    light6.position = new BABYLON.Vector3(30, 13, -50);

    var light4 = light3.clone('light5');
    light4.position = new BABYLON.Vector3(30, 10, 165);

    var light7 = light3.clone('light5');
    light7.position = new BABYLON.Vector3(-30, 10, 165);

    var light8 = light3.clone('light5');
    light8.position = new BABYLON.Vector3(30, 10, 70);
    light8.intensity = 0.5;

    var light9 = light3.clone('light5');
    light9.position = new BABYLON.Vector3(-30, 10, 70);
    light9.intensity = 0.5;

    var light10 = light3.clone('light5');
    light10.position = new BABYLON.Vector3(0, 10, 80);
    light10.intensity = 0.8;
    light10.range = 20;


    // DEFINITION DES MATERIALS
    var materialGround = new BABYLON.StandardMaterial("wallTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/castleFloor.png", scene);
    materialGround.diffuseTexture.uScale = 16.0;
    materialGround.diffuseTexture.vScale = 42.0;
    materialGround.maxSimultaneousLights = 20;

    var materialWall1 = new BABYLON.StandardMaterial("materialWall", scene);
    materialWall1.diffuseTexture = new BABYLON.Texture("assets/images/stoneFloor.jpg", scene);
    materialWall1.diffuseTexture.uScale = 8.0;
    materialWall1.diffuseTexture.vScale = 2.0;
    materialWall1.maxSimultaneousLights = 20;

    var materialWall2 = new BABYLON.StandardMaterial("materialWall", scene);
    materialWall2.diffuseTexture = new BABYLON.Texture("assets/images/stoneFloor.jpg", scene);
    materialWall2.diffuseTexture.uScale = 2.0;
    materialWall2.diffuseTexture.vScale = 12.0;
    materialWall2.maxSimultaneousLights = 20;

    var materialWall3 = new BABYLON.StandardMaterial("materialWall", scene);
    materialWall3.diffuseTexture = new BABYLON.Texture("assets/images/stoneFloor.jpg", scene);
    materialWall3.diffuseTexture.uScale = 4.0;
    materialWall3.diffuseTexture.vScale = 4.0;
    materialWall3.maxSimultaneousLights = 20;

    var materialCeil = new BABYLON.StandardMaterial("materialWall", scene);
    materialCeil.diffuseTexture = new BABYLON.Texture("assets/images/stoneFloor.jpg", scene);
    materialCeil.diffuseTexture.uScale = 10.0;
    materialCeil.diffuseTexture.vScale = 12.0;
    materialCeil.maxSimultaneousLights = 100;

    var materialCrate = new BABYLON.StandardMaterial("materialCrate", scene);
    materialCrate.diffuseTexture = new BABYLON.Texture("assets/images/woodCrate.jpg", scene);
    materialCrate.maxSimultaneousLights = 20;

    var materialPoutre = new BABYLON.StandardMaterial("materialPoutre", scene);
    materialPoutre.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);
    materialPoutre.diffuseTexture.uScale = 0.2;
    materialPoutre.diffuseTexture.vScale = 0.2;
    materialPoutre.maxSimultaneousLights = 20;

    var wallPaper = new BABYLON.StandardMaterial("wallPaper", scene);
    wallPaper.diffuseTexture = new BABYLON.Texture("assets/images/wallpaper.jpg", scene);
    wallPaper.diffuseTexture.uScale = 2;
    wallPaper.diffuseTexture.vScale = 2;
    wallPaper.maxSimultaneousLights = 10;

    // DEFINITION DU SOL
    var ground = BABYLON.Mesh.CreateGround("ground1", 40, 120, 2, scene);
    ground.scaling = new BABYLON.Vector3(2,10,3);
    // ground.scaling.z = 2;
    ground.material = materialGround;
    ground.checkCollisions = true;

    ground.position.z = 120;

    // DEFINITION DES MURS
    var wall1 = BABYLON.Mesh.CreateBox("wall1", 1, scene);
    wall1.scaling.x = 80;
    wall1.scaling.y = 20;
    wall1.position.z = 180;
    wall1.position.y = 10;
    wall1.material = materialWall1;
    wall1.checkCollisions = true;

    var wall2 = wall1.clone('wall2')
    wall2.position.z = -60;

    var wallMid1 = wall1.clone('wallMid1')
    wallMid1.position.z = 60;
    wallMid1.position.x = 50;

    var wallMid2 = wall1.clone('wallMid2')
    wallMid2.position.z = 60;
    wallMid2.position.x = -50;

    var wall3 = BABYLON.Mesh.CreateBox("wall3", 1, scene);
    wall3.scaling.z = 120;
    wall3.scaling.y = 20;
    wall3.position.x = 40;
    wall3.position.y = 10;
    wall3.material = materialWall2;
    wall3.checkCollisions = true;
    
    var wall4 = wall3.clone('wall4')
    wall4.position.x = -40;

    var wall5 = wall3.clone('wall5')
    wall5.position.z = 120;

    var wall6 = wall3.clone('wall46')
    wall6.position.x = -40;
    wall6.position.z = 120;

    // CREATION DES POUTRES APPARENTES
    var poutreM = BABYLON.Mesh.CreateBox("poutre", 3, scene);
    poutreM.scaling.x = 30;  
    poutreM.position.y = 19.5;
    poutreM.material = materialPoutre;
    poutreM.position.z = -40

    var poutre2 = poutreM.clone("poutre");
    poutre2.position.z = -10;

    var poutre3 = poutreM.clone("poutre");
    poutre3.position.z = 20;

    var poutre4 = poutreM.clone("poutre");
    poutre4.position.z = 50;

    // DEFINITION DU PLAFOND
    this.plafond = BABYLON.Mesh.CreateBox("plafond", 1, scene);
    this.plafond.scaling.z = 240;
    this.plafond.scaling.x = 80;
    this.plafond.position.y = 20;
    this.plafond.position.z = 60;
    this.plafond.material = materialCeil;
    this.plafond.checkCollisions = true;

    var centerRoom2 = BABYLON.Mesh.CreateBox("centerRoom2", 30, scene);
    centerRoom2.scaling = new BABYLON.Vector3(2,1,2);
    centerRoom2.position = new BABYLON.Vector3(0,15,120);
    centerRoom2.material = materialWall3;
    centerRoom2.checkCollisions = true;

    // DEFINITION DES SPHERES
    var sphere = BABYLON.Mesh.CreateSphere("sphere", 8, 15, scene);
    sphere.material = wallPaper;
    sphere.position = new BABYLON.Vector3(40,20,60);// Version simplifiée
    sphere.checkCollisions = true;

    var sphere2 = sphere.clone("sphere");
    sphere2.position = new BABYLON.Vector3(-40,20,60);

    var sphere3 = sphere.clone("sphere");
    sphere3.position = new BABYLON.Vector3(40,20,-60);

    var sphere4 = sphere.clone("sphere");
    sphere4.position = new BABYLON.Vector3(-40,20,-60);


    // DEFINITION DES COLONNES
    var cylinder = BABYLON.Mesh.CreateCylinder('colonne', 20, 5, 5, 8, 5, scene);
    cylinder.position = new BABYLON.Vector3(0,10,20)
    cylinder.material = materialWall1
    cylinder.checkCollisions = true;

    cylinder2 = cylinder.clone('colonne');
    cylinder2.position = new BABYLON.Vector3(0,10,-10);

    cylinder3 = cylinder.clone('colonne');
    cylinder3.position = new BABYLON.Vector3(25,10,-10);

    cylinder4 = cylinder.clone('colonne');
    cylinder4.position = new BABYLON.Vector3(25,10,-40);

    cylinder5 = cylinder.clone('colonne');
    cylinder5.position = new BABYLON.Vector3(25,10,20);

    cylinder6 = cylinder.clone('colonne');
    cylinder6.position = new BABYLON.Vector3(25,10,50);

    cylinder7 = cylinder.clone('colonne');
    cylinder7.position = new BABYLON.Vector3(-25,10,-10);

    cylinder8 = cylinder.clone('colonne');
    cylinder8.position = new BABYLON.Vector3(-25,10,-40);

    cylinder9 = cylinder.clone('colonne');
    cylinder9.position = new BABYLON.Vector3(-25,10,20);

    cylinder10 = cylinder.clone('colonne');
    cylinder10.position = new BABYLON.Vector3(-25,10,50);

    cylinder11 = cylinder.clone('colonne');
    cylinder11.position = new BABYLON.Vector3(-25,10,90);

    cylinder12 = cylinder.clone('colonne');
    cylinder12.position = new BABYLON.Vector3(25,10,90);

    cylinder13 = cylinder.clone('colonne');
    cylinder13.position = new BABYLON.Vector3(-25,10,150);

    cylinder14 = cylinder.clone('colonne');
    cylinder14.position = new BABYLON.Vector3(25,10,150);

    // DEFINITION DES CAISSES
    var crate1 = BABYLON.Mesh.CreateBox("crate", 5, scene);
    crate1.position = new BABYLON.Vector3(3,2.5,173);
    crate1.rotation = new BABYLON.Vector3(0,(Math.PI*25)/180,0);
    crate1.material = materialCrate;
    crate1.checkCollisions = true;

    var crate2 = BABYLON.Mesh.CreateBox("crate", 3, scene);
    crate2.position = new BABYLON.Vector3(3.5,6.5,173);
    crate2.rotation = new BABYLON.Vector3(0,(-Math.PI*25)/180,0);
    crate2.material = materialCrate;
    crate2.checkCollisions = true;

    var crate3 = BABYLON.Mesh.CreateBox("crate", 6, scene);
    crate3.position = new BABYLON.Vector3(34,3,50);
    crate3.rotation = new BABYLON.Vector3(0,(-Math.PI*60)/180,0);
    crate3.material = materialCrate;
    crate3.checkCollisions = true;

    var crate4 = BABYLON.Mesh.CreateBox("crate", 7, scene);
    crate4.position = new BABYLON.Vector3(-7,3.5,-50);
    crate4.rotation = new BABYLON.Vector3(0,(-Math.PI*60)/180,0);
    crate4.material = materialCrate;
    crate4.checkCollisions = true;

    var crate5 = BABYLON.Mesh.CreateBox("crate", 3, scene);
    crate5.position = new BABYLON.Vector3(1,1.5,-50);
    crate5.rotation = new BABYLON.Vector3(0,(-Math.PI*10)/180,0);
    crate5.material = materialCrate;
    crate5.checkCollisions = true;

    var crate6 = BABYLON.Mesh.CreateBox("crate", 6, scene);
    crate6.position = new BABYLON.Vector3(-35,3,10);
    crate6.rotation = new BABYLON.Vector3(0,(-Math.PI*10)/180,0);
    crate6.material = materialCrate;
    crate6.checkCollisions = true;

    var crate7 = BABYLON.Mesh.CreateBox("crate", 4, scene);
    crate7.position = new BABYLON.Vector3(-35,2,-55);
    crate7.rotation = new BABYLON.Vector3(0,(-Math.PI*40)/180,0);
    crate7.material = materialCrate;
    crate7.checkCollisions = true;


    // DEFINITION DES PROPS ------------------------------------------------

    // Liste des objets stocké dans le jeu
    this.bonusBox=[];
    this.weaponBox=[];
    this.ammosBox=[];

    // Les props envoyé par le serveur
    this.bonusServer = props[0];
    this.weaponServer = props[1];
    this.ammosServer = props[2];

    for (var i = 0; i < this.bonusServer.length; i++) {
        // Si l'objet n'a pas été pris par un joueur
        if(this.bonusServer[i].v === 1){
            var newBonusBox = this.newBonuses(new BABYLON.Vector3(
                this.bonusServer[i].x,
                this.bonusServer[i].y,
                this.bonusServer[i].z),
            this.bonusServer[i].t);
            
            newBonusBox.idServer = i;
            this.bonusBox.push(newBonusBox);
        }
    }

    for (var i = 0; i < this.weaponServer.length; i++) {
        if(this.weaponServer[i].v === 1){
            var newWeaponBox = this.newWeaponSet(new BABYLON.Vector3(
                this.weaponServer[i].x,
                this.weaponServer[i].y,
                this.weaponServer[i].z),
            this.weaponServer[i].t);
            
            newWeaponBox.idServer = i;
            this.weaponBox.push(newWeaponBox);
        }
    }

    for (var i = 0; i < this.ammosServer.length; i++) {
        if(this.ammosServer[i].v === 1){
            var newAmmoBox = this.newAmmo(new BABYLON.Vector3(
                this.ammosServer[i].x,
                this.ammosServer[i].y,
                this.ammosServer[i].z),
            this.ammosServer[i].t);
            
            newAmmoBox.idServer = i;
            this.ammosBox.push(newAmmoBox);
        }
    }
};
Arena.prototype = {
    newBonuses : function(position,type) {
        var typeBonus = type;
        var positionBonus = position;
        
        // On crée un cube
        var newBonus = BABYLON.Mesh.CreateBox("bonusItem",  2, this.game.scene);
        newBonus.scaling = new BABYLON.Vector3(1,1,1);
        
        // On lui donne la couleur orange
        newBonus.material = new BABYLON.StandardMaterial("textureItem", this.game.scene);
        newBonus.material.diffuseColor = new BABYLON.Color3((255/255), (138/255), (51/255));

        // On positionne l'objet selon la position envoyé
        newBonus.position = positionBonus;
        
        // On le rend impossible a être séléctionné par les raycast
        newBonus.isPickable = false;
        
         // On affecte à l'objet son type
        newBonus.typeBonus = typeBonus;

        return newBonus;
    },
    newWeaponSet : function(position,type) {
        var typeWeapons = type;
        var positionWeapon = position;

        var newSetWeapon = BABYLON.Mesh.CreateBox(this.Armory.weapons[typeWeapons].name, 1, this.game.scene);
        newSetWeapon.scaling = new BABYLON.Vector3(1,0.7,2);


        newSetWeapon.material = new BABYLON.StandardMaterial("weaponMat", this.game.scene);
        newSetWeapon.material.diffuseColor = this.Armory.weapons[typeWeapons].setup.colorMesh;
        newSetWeapon.position = positionWeapon;
        newSetWeapon.isPickable = false;
        newSetWeapon.typeWeapon = type;

        return newSetWeapon;
    },
    newAmmo : function(position,type) {
        var typeAmmos = type;
        var positionAmmo = position;
        var newAmmo = BABYLON.Mesh.CreateBox(this.game.armory.weapons[typeAmmos].name, 1.0, this.game.scene);
        newAmmo.position = positionAmmo;
        newAmmo.isPickable = false;
        newAmmo.material = new BABYLON.StandardMaterial("ammoMat", this.game.scene);
        newAmmo.material.diffuseColor = this.game.armory.weapons[typeAmmos].setup.colorMesh;
        newAmmo.typeAmmo = type;

        return newAmmo;
    },
    _checkProps : function(){
        // Pour les bonus
        for (var i = 0; i < this.bonusBox.length; i++) {
            // On vérifie si la distance est inférieure à 6
            if(BABYLON.Vector3.Distance(
                this.game._PlayerData.camera.playerBox.position,
                this.bonusBox[i].position)<6){
                var paramsBonus = this.Armory.bonuses[this.bonusBox[i].typeBonus];

                this.game._PlayerData.givePlayerBonus(paramsBonus.type,paramsBonus.value);

                // Pour la boucle bonusBox
                this.displayNewPicks(paramsBonus.message);

                // Pour bonusBox
                this.pickableDestroyed(this.bonusBox[i].idServer,'bonus');

                // On supprime l'objet
                this.bonusBox[i].dispose();
                this.bonusBox.splice(i,1)
            }
            
        }
        for (var i = 0; i < this.weaponBox.length; i++) {
            // Pour les armes
            if(BABYLON.Vector3.Distance(
                this.game._PlayerData.camera.playerBox.position,
                this.weaponBox[i].position)<6){
                var Weapons = this.game._PlayerData.camera.weapons;
                var paramsWeapon = this.Armory.weapons[this.weaponBox[i].typeWeapon];
                var notPiked = true;
                for (var y = 0; y < Weapons.inventory.length; y++) {
                    if(Weapons.inventory[y].typeWeapon == this.weaponBox[i].typeWeapon){
                        notPiked = false;
                        break;
                    }
                }
                if(notPiked){

                    var actualInventoryWeapon = Weapons.inventory[Weapons.actualWeapon];
                    
                    var newWeapon = Weapons.newWeapon(paramsWeapon.name);
                    Weapons.inventory.push(newWeapon);

                    // On réinitialise la position de l'arme précédente animé
                    actualInventoryWeapon.position = actualInventoryWeapon.basePosition.clone();
                    actualInventoryWeapon.rotation = actualInventoryWeapon.baseRotation.clone();
                    Weapons._animationDelta = 0;

                    actualInventoryWeapon.isActive = false;

                    Weapons.actualWeapon = Weapons.inventory.length -1;
                    actualInventoryWeapon = Weapons.inventory[Weapons.actualWeapon];
                    
                    actualInventoryWeapon.isActive = true;

                    Weapons.fireRate = Weapons.Armory.weapons[actualInventoryWeapon.typeWeapon].setup.cadency;
                    Weapons._deltaFireRate = Weapons.fireRate;

                    Weapons.textAmmos.innerText = actualInventoryWeapon.ammos;

                    Weapons.totalTextAmmos.innerText = 
                    Weapons.Armory.weapons[actualInventoryWeapon.typeWeapon].setup.ammos.maximum;

                    Weapons.typeTextWeapon.innerText = 
                    Weapons.Armory.weapons[actualInventoryWeapon.typeWeapon].name;

                    // Pour la boucle weaponBox
                    this.displayNewPicks(paramsWeapon.name);

                    // Pour weaponBox
                    this.pickableDestroyed(this.weaponBox[i].idServer, 'weapon');

                    this.weaponBox[i].dispose();
                    this.weaponBox.splice(i,1);
                }
            }
        }
        for (var i = 0; i < this.ammosBox.length; i++) {
            // Pour les munitions
            if(BABYLON.Vector3.Distance(
                this.game._PlayerData.camera.playerBox.position,
                this.ammosBox[i].position)<6){
                
                var paramsAmmos = this.Armory.weapons[this.ammosBox[i].typeAmmo].setup.ammos;
                var Weapons = this.game._PlayerData.camera.weapons;

                Weapons.reloadWeapon(this.ammosBox[i].typeAmmo, paramsAmmos.refuel);
                
                // Pour la boucle ammosBox
                this.displayNewPicks(paramsAmmos.meshAmmosName);

                // Pour ammosBox
                this.pickableDestroyed(this.ammosBox[i].idServer, 'ammos');

                this.ammosBox[i].dispose();
                this.ammosBox.splice(i,1)
            }
            
        }
    },
    // Donner un bonus au joueur
    givePlayerBonus : function(what,howMany) {
        
        var typeBonus = what;
        var amountBonus = howMany;
        if(typeBonus === 'health'){
            if(this.camera.health + amountBonus>100){
                this.camera.health = 100;
            }else{
                this.camera.health += amountBonus;
            }
        }else if (typeBonus === 'armor'){
            if(this.camera.armor + amountBonus>100){
                this.camera.armor = 100;
            }else{
                this.camera.armor += amountBonus;
            }
        } 
        this.textHealth.innerText = this.camera.health;
        this.textArmor.innerText = this.camera.armor;
    },
    deletePropFromServer : function(deletedProp){
        // idServer est l'id de l'arme
        var idServer = deletedProp[0];
        
        // type nous permet de déterminer ce qu'est l'objet
        var type = deletedProp[1];
        switch (type){
            case 'ammos' :
                for (var i = 0; i < this.ammosBox.length; i++) {
                    if(this.ammosBox[i].idServer === idServer){
                        this.ammosBox[i].dispose();
                        this.ammosBox.splice(i,1);
                        break;
                    }
                }
                
            break;
            case 'bonus' :
                for (var i = 0; i < this.bonusBox.length; i++) {
                    if(this.bonusBox[i].idServer === idServer){
                        this.bonusBox[i].dispose();
                        this.bonusBox.splice(i,1);
                        break;
                    }
                }
            break;
            case 'weapon' :
                for (var i = 0; i < this.bonusBox.length; i++) {
                    if(this.weaponBox[i].idServer === idServer){
                        this.weaponBox[i].dispose();
                        this.weaponBox.splice(i,1);
                        break;
                    }
                }
            break;
        }
    },
    recreatePropFromServer : function(recreatedProp){
        var idServer = recreatedProp[0];
        var type = recreatedProp[1];
        switch (type){
            case 'ammos' :
                var newAmmoBox = this.newAmmo(new BABYLON.Vector3(
                    this.ammosServer[idServer].x,
                    this.ammosServer[idServer].y,
                    this.ammosServer[idServer].z),
                    this.ammosServer[idServer].t);
                
                newAmmoBox.idServer = idServer;
                this.ammosBox.push(newAmmoBox);
            break;
            case 'bonus' :
                var newBonusBox = this.newBonuses(new BABYLON.Vector3(
                    this.bonusServer[idServer].x,
                    this.bonusServer[idServer].y,
                    this.bonusServer[idServer].z),
                    this.bonusServer[idServer].t);
                    
                newBonusBox.idServer = idServer;
                this.bonusBox.push(newBonusBox);
            break;
            case 'weapon' :
                var newWeaponBox = this.newWeaponSet(new BABYLON.Vector3(
                    this.weaponServer[idServer].x,
                    this.weaponServer[idServer].y,
                    this.weaponServer[idServer].z),
                    this.weaponServer[idServer].t);
                    
                newWeaponBox.idServer = idServer;
                this.weaponBox.push(newWeaponBox);
            break;
        }
    },
    // Partie Server
    pickableDestroyed : function(idServer,type) {
        destroyPropsToServer(idServer,type)
    },
    displayNewPicks : function(typeBonus) {
        // Récupère les propriétés de la fênetre d'annonce
        var displayAnnouncement = document.getElementById('announcementKill');
        var textDisplayAnnouncement = document.getElementById('textAnouncement');
        
        // Si la fenêtre possède announcementClose (et qu'elle est donc fermé)
        if(displayAnnouncement.classList.contains("annoucementClose")){
            displayAnnouncement.classList.remove("annoucementClose");
        }
        // On vérifie que la police est à 1 (nous verrons plus tard pourquoi)
        textDisplayAnnouncement.style.fontSize = '1rem';
        
        // On donne a textDisplayAnnouncement la valeur envoyé à displayNewPicks
        textDisplayAnnouncement.innerText = typeBonus;
        
        // Au bout de 4 secondes, si la fenêtre est ouverte, on la fait disparaitre
        setTimeout(function(){ 
            if(!displayAnnouncement.classList.contains("annoucementClose")){
                displayAnnouncement.classList.add("annoucementClose");
            }
        }, 4000);
    },
}