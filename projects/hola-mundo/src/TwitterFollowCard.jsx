//agregamos un valor al username por si el userName no tiene informacion

//esto es un hook
import { useState } from "react";

export function TwitterFollowCard({children, userName = 'unknown',initialIsFollowing}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClasName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button';
    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }
    return(
            <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt="avatar" 
                src={`https://unavatar.io/${userName}`}></img>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClasName} onClick={handleClick}>
                    <span className="tw-followCard-ButtonText">{text}</span>
                    <span className="tw-followCard-StopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}