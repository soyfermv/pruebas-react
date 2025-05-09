import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
const formatUserName = (userName) => `@${userName}`; 

const Users=[
    {
        userName:'SoyFermv',
        name:'Fernando Vadillo',
        isFollowing:true
    },
    {
        userName:'kikobeats',
        name:'Mario Martin',
        isFollowing:false
    },
    {
        userName:'x',
        name:'Alex Cabañas',
        isFollowing:false
    },
    {
        userName:'s',
        name:'Samuel de luque',
        isFollowing: false
    },
    {
        userName:'M',
        name:'Manuel Montejo',
        isFollowing:true
    }
]
    return (
        //el <> significa que es <React.Fragment> solo que simplificado
        <div className='App'>
        {
            Users.map(Users=>{
                const {userName,name,isFollowing} =Users;
                return(
                    <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >{name}</TwitterFollowCard>
                )
                
            })
        }
        </div>
    )
    //isFollowing es boleano
}