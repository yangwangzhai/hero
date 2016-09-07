/**
 * Created by kenkozheng on 2014/8/22.
 * 只用于html5
 */

var SoundButton = cc.MenuItemToggle.extend({

    ctor:function(){
        var sprite = new cc.Sprite("#soundOn0000.png");
        var animation = new cc.Animation();
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0000.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0001.png"));
        animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame("soundOn0002.png"));
        animation.setDelayPerUnit(1/3);
        var action = cc.animate(animation).repeatForever();
        sprite.runAction(action);

        this._super(new cc.MenuItemSprite(sprite, null, null), new cc.MenuItemImage("#soundOff.png"));
        this.setCallback(this._soundOnOff, this);
    },

    _soundOnOff:function() {
        Sound.toggleOnOff();
    }
});