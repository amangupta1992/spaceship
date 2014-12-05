var menu_state = {  
    create: function() {
        // Call the 'start' function when pressing the spacebar
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.start, this); 

        // Defining variables
        var style = { font: "30px Arial", fill: "#ffffff" };
        var x = game.world.width/2, y = game.world.height/2;

        // Adding a text centered on the screen
        var text = this.game.add.text(x, y-50, "Press space to start", style);
        text.anchor.setTo(0.5, 0.5); 
        
         
        
        // If the user already played
        if (score > 0) {

            // Display its score
            var score_label = this.game.add.text(x, y+50, "your score: " + score, style);
            
            if (localStorage.high>=0)
            {}
            else
            {localStorage.high=0;
            }

            var high_score=localStorage.high;
            

            if(high_score<score)
            {high_score=score;
            localStorage.high=score;
        
            }
            else;

            var high_score_label = this.game.add.text(x, y+150, "high score: " + high_score, style);
            
            score_label.anchor.setTo(0.5, 0.5); 
            high_score_label.anchor.setTo(0.5, 0.5); 
        }
    },

    // Start the actual game
    start: function() {
        this.game.state.start('play');
    }
};