// Initialize Phaser
var game = new Phaser.Game(600, 560, Phaser.AUTO, 'game_div');

// Our 'score' global variable
var score = 0;
var velo=-250;
// Define all the states
game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('play', play_state);  

// Start with the 'load' state
game.state.start('load');  