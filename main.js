var player = { x: 900, y: 100, size: 40, xSpeed: 5, ySpeed: 0, iFrames: 0, health: 5 };

let bullet = []; // Array to store bullets

let cooldown = 0;

let score = 0;

let bulletCooldown = 0;

let zombies = []; // Array to store zombies

let playerImage = "./images/player-right.png";

function gun() {
    if (mouse.left && bulletCooldown === 0) { // Check if left mouse button is pressed and bullet cooldown is 0
        bullet.push(
            { x: player.x, y: player.y, size: 5, xSpeed: 7 * (mouse.x - player.x) / distance(player, mouse), ySpeed: 7 * (mouse.y - player.y) / distance(player, mouse) }
        ); // Add a bullet object to the bullet array
        bulletCooldown = 10; // Set bullet cooldown
    }
    if (bulletCooldown > 0) {
        bulletCooldown--; // Decrease bullet cooldown
    }
}

var themesong = new Audio("./music/themesong.mp3"); // Create a new audio element for the theme song

function update() {
    gun(); // Call the gun function to handle shooting
    clearScreen(); // Clear the screen
    if (zombies.length < 10) { // Check if the number of zombies is less than 10
        zombies.push({ x: random(600), y: random(600), health: 10, iFrames: 0 }); // Add a new zombie object to the zombies array
    }
    themesong.play()
    for (i = 0; i < zombies.length; i++) {
        if (zombies[i].iFrames > 0) { zombies[i].iFrames--; } // Decrease the zombie's invincibility frames
        for (j = 0; j < bullet.length; j++) {
            if (distance(zombies[i].x, zombies[i].y, bullet[j].x, bullet[j].y) < 50 && zombies[i].iFrames == 0) { // Check if a bullet hits a zombie
                zombies[i].iFrames = 20; // Set invincibility frames for the zombie
                zombies[i].health--; // Decrease zombie's health
            }
        }
        if (distance(zombies[i].x, zombies[i].y, player.x, player.y) < 40 && player.iFrames == 0) { // Check if a zombie collides with the player
            player.iFrames = 90; // Set invincibility frames for the player
            player.health--; // Decrease player's health
        }
        if (zombies[i].x < player.x) { zombies[i].x++; } else { zombies[i].x--; } // Move zombies towards the player on the x-axis
        if (zombies[i].y < player.y) { zombies[i].y++; } else { zombies[i].y--; } // Move zombies towards the player on the y-axis
        picture(zombies[i].x - 50, zombies[i].y - 50, "./images/zombie.png"); // Display the zombie's image
        rectangle(zombies[i].x - 25, zombies[i].y - 50, zombies[i].health * 10, 6, "green"); // Display the zombie's health bar
    }

    for (i = 0; i < zombies.length; i++) {
        if (zombies[i].health == 0) {
            var zombiedeathsound = new Audio("./music/zombiedeathsound.mp3"); // Create a new audio element for the zombie death sound
            zombiedeathsound.play(); // Play the zombie death sound
            score++; // Increase the score when a zombie is defeated
            zombies.splice(i, 1, { x: random(600), y: random(600), health: 6, iFrames: 0 }); // Replace the defeated zombie with a new one
        }
    }
    
    picture(player.x - 50, player.y - 50, playerImage); // Display the player's image
    rectangle(player.x - 25, player.y - 50, player.health * 10, 5, "green"); // Display the player's health bar
    
    player.xSpeed = 0;
    player.ySpeed = 0;
    
    if (keyboard.w) {
        player.ySpeed -= 5; // Move the player up
    }
    
    if (keyboard.s) {
        player.ySpeed += 5; // Move the player down
    }
    
    if (keyboard.a) {
        player.xSpeed -= 5; // Move the player left
        playerImage = "./images/player-left.png"; // Set the player's image to face left
    }
    
    if (keyboard.d) {
        player.xSpeed += 5; // Move the player right
        playerImage = "./images/player-right.png"; // Set the player's image to face right
    }
    
    if (keyboard.space && cooldown === 0 && distance(mouse.x, mouse.y, player.x, player.y) < 300) {
        player.x = mouse.x; // Set player's x-coordinate to the mouse's x-coordinate
        player.y = mouse.y; // Set player's y-coordinate to the mouse's y-coordinate
        cooldown = 150; // Set cooldown for the spacebar
    }
    
    if (cooldown > 0) {
        cooldown--; // Decrease cooldown
    }
    
    if (player.x + player.size / 2 >= innerWidth) {
        player.x = innerWidth - player.size / 2; // Keep the player within the right boundary of the screen
        player.xSpeed = -1; // Reverse the player's xSpeed to create a bouncing effect
    }
    
    if (player.x - player.size / 2 <= 0) {
        player.x = player.size / 2; // Keep the player within the left boundary of the screen
        player.xSpeed = 1; // Reverse the player's xSpeed to create a bouncing effect
    }
    
    if (player.y + player.size / 2 >= innerHeight) {
        player.y = innerHeight - player.size / 2; // Keep the player within the bottom boundary of the screen
        player.ySpeed = -1; // Reverse the player's ySpeed to create a bouncing effect
    }
    
    if (player.y - player.size / 2 <= 0) {
        player.y = player.size / 2; // Keep the player within the top boundary of the screen
        player.ySpeed = 1; // Reverse the player's ySpeed to create a bouncing effect
    }    

    for (var i = 0; i < bullet.length; i++) {
        circle(bullet[i].x, bullet[i].y, bullet[i].size, "yellow"); // Display the bullet as a yellow circle
        bullet[i].x += bullet[i].xSpeed; // Move the bullet along the x-axis
        bullet[i].y += bullet[i].ySpeed; // Move the bullet along the y-axis
    }
    
    if (player.iFrames > 0) {
        player.iFrames--; // Decrease the player's invincibility frames
    }
    
    if (player.health == 0) {
        themesong.pause(); // Pause the theme song
        var playerdeathsound = new Audio("./music/playerdeathsound.mp3"); // Create a new audio element for the player death sound
        playerdeathsound.play(); // Play the player death sound
        text(200, 100, 100, "GAME OVER!", "white"); // Display the text "GAME OVER!" in white color at coordinates (200, 100)

        stopUpdate(); // Stop the game update loop
    }
    
    player.x += player.xSpeed; // Move the player along the x-axis
    player.y += player.ySpeed; // Move the player along the y-axis
    
    text(10, 50, 14, `dash cooldown: ${Math.round(cooldown / 30)}s`, "white"); // Display the remaining cooldown for the dash ability
    text(10, 20, 14, `score: ${score}`); // Display the current score    
}