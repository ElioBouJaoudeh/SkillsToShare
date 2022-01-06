import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import ViewNotes from '../components/ViewNotes'
import AddNotes from '../components/ViewNotes'



const StackNavigator = createStackNavigator({
ViewNotes: {
    screen: ViewNotes
},
AddNotes:{
    screen: AddNotes
}
},
{
    initialRouteName: 'ViewNotes',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)