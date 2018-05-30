import {App} from '../../app'
import appFoot from '../../components/foot.html'
export default App.directive('appFoot',[function(){
    return {
        restrict:'A',
        replace:true,
        template:appFoot,
        scope:{},
        link:function(){

        }
    }
}])