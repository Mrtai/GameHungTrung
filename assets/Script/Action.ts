// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    trung_Prefab: cc.Prefab = null;
    @property({}) number = 0;
    time: number;
    // LIFE-CYCLE CALLBACKS:
    getNewStarPosition()
    {
        
        var RandY = 500;
        var maxX = this.node.width / 2;
        var RandX = cc.randomMinus1To1() * maxX;
        return cc.p(RandX,RandY);
        
    }

    spawNewStarPosition()
    {
        //cc.log("vaof spaw");
        var newStar = cc.instantiate(this.trung_Prefab);

        this.node.addChild(newStar);

        newStar.setPosition(this.getNewStarPosition());
        
        //newStar.getComponent('trung').game = this;

       
    }
    onLoad () {
        //cc.log("vaof");
        this.time = 0;
        this.spawNewStarPosition();
    }

    start () {
       
    }

     update (dt) {
         this.time += dt;
         if(Math.floor(this.time) == 2){
             this.spawNewStarPosition();
             this.time = 0;
         }
     }
}
