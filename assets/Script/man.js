cc.Class({
    extends: cc.Component,

    properties: {
        
        jumpHeight: 0, // do cao toi da

        jumDuration: 0, // thoi gian ma dat duoc do cao nay

        maxMoveSpeed: 0, // toc do toi da

        accel: 0, // gia toc
    },


    setJumpAction: function()
    {
            var jumpUp =cc.moveBy(this.jumDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCircleActionInOut());
            var jumpDown=cc.moveBy(this.jumDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCircleActionInOut());

            return cc.repeatForever(cc.sequence(jumpUp,jumpDown));
    },
    
    setInputControl : function()
    {
        var self=this;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event){
            switch(event.keyCode)
            {
                case cc.KEY.a:
                    self.accLeft=true;
                    break;
                case cc.KEY.d:
                    self.accRight=true;
                    break;
            }
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(event){
            switch(event.keyCode)
            {
                case cc.KEY.a:
                    self.accLeft=false;
                    break;
                case cc.KEY.d:
                    self.accRight=false;
                    break;
            }
        });

        
    },
    // use this for initialization

    onLoad () {
        
        this.jumAction=this.setJumpAction();
        this.node.runAction(this.jumAction);

        this.accLeft=0;
        this.accRight=0;
        this.xSpeed=0;
        
        this.setInputControl();
    },

    // called every frame, uncomment this function to activate update callback
    update (dt) {
        
        if(this.accLeft)
        {
            this.xSpeed-=this.accel * dt;
        }else if(this.accRight){
            this.xSpeed+=this.accel*dt;
        }

        if(Math.abs(this.xSpeed)>this.maxMoveSpeed){
            this.xSpeed=this.maxMoveSpeed * this.xSpeed/Math.abs(this.xSpeed);
        }

        this.node.x+=this.xSpeed*dt;
    },
});
