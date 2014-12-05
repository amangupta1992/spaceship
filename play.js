
var play_state = {


    // No more 'preload' function, since it is already done in the 'load' state

    create: function() { 
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this); 

        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');  
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);           

        this.bird = this.game.add.sprite(100, 245, 'space');
        this.bird.body.acceleration.y = 800; 
        this.bird.body.velocity.y=-10;

        this.bird.anchor.setTo(-0.2, 0.5);

        // No 'this.score', but just 'score'
        score = 0; 
        velo=-250;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style); 

        this.jump_sound = this.game.add.audio('jump');
        this.crash_sound = this.game.add.audio('crash');
    },

    update: function() {
        if (this.bird.inWorld == false)
            this.restart_game(); 


        this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this);      
    },

    jump: function() {
        if (this.bird.alive == false)
            return; 
        this.bird.body.velocity.y=0;

        this.bird.body.acceleration.y = -1*(this.bird.body.acceleration.y); 
        
        this.game.add.tween(this.bird).to({angle: 10 }, 100).start();
        
        this.jump_sound.play();
    },

    hit_pipe: function() {
        if (this.bird.alive == false)
            return;

        this.bird.alive = false;
        this.crash_sound.play();
        this.game.time.events.remove(this.timer);

        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
            p.body.acceleration.x = 0;
            
        }, this);
    },

    restart_game: function() {
        this.game.time.events.remove(this.timer);

        // This time we go back to the 'menu' state
        this.game.state.start('menu');
    },

    add_one_pipe: function(x, y) {
        var pipe = this.pipes.getFirstDead();
        pipe.reset(x, y);
        pipe.body.velocity.x = velo; 
        pipe.outOfBoundsKill = true;
    },

    add_row_of_pipes: function() {
        var hole = Math.floor(Math.random()*5)+1;

        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole +1) 
                this.add_one_pipe(600, i*80);   
                
        // No 'this.score', but just 'score'
        velo=velo-5;
        score += 1;
        this.label_score.content = score;  
    }
};