const {ccclass, property} = cc._decorator;

@ccclass
export default class Trung extends cc.Component {
    onLoad() {
        // init logic
        
    }
    update(dt){
        cc.log(this.node.y);            ; 
        this.node.y -= 5;
    }
}
