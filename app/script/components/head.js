
import {App} from '../../app'
import appHead from '../../components/head.html'
export default App.directive('appHead',[function(){
    return {
        restrict:'A',
        replace:true,
        template:appHead,
        scope:{},
        link:function(){

        }
    }
}])