var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#22457e';
        this.game.load.image('space', 'assets/space.png');  
        this.game.load.image('pipe', 'assets/pipe.png');  
        this.game.load.audio('jump', 'assets/jump.wav');
        this.game.load.audio('crash', 'assets/crash.wav');
       
         
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
}; 