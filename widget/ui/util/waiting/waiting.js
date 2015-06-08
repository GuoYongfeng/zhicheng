/* 
* @Author: gaofeng
* @Date:   2014-12-11 14:50:16
* @Last Modified time: 2014-12-11 15:02:25
*/
var mask =  require('common:widget/ui/util/singleton-mask/singleton-mask.js').getInstance();

var tpl = __inline('./waiting.tpl');

module.exports = {
    show : function(){
        if( mask.status.is_show ){
            return ;
        }
        if(!this.dom){
            this.dom = $(tpl);
        }
        
        mask.append(this.dom).style('ui-mask-grey').show();
    },
    hide : function(){
        mask.hide();
    }
}


