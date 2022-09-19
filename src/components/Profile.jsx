import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
        <div> <img src='https://i.pinimg.com/originals/91/76/e5/9176e5a8d480de6bdcff5a98e2a7bc67.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className='posts'>
            <div className='item'>
              post 1
            </div>
            <div className='item'>
              post 2
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;