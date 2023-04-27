import React from 'react'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    return (
        <div className='container'>
            <div>Profile</div>
            <h1> {user.name}</h1>
            <img
                src={user.imageUrl}
                className= "avatar"
                alt={'Photo of ' + user.name}
                style={{ height: user.imageSize, width: user.imageSize }}
            />
        </div>
    )
}

export default Profile