import React from 'react';

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Name - {props.name} {props.lastname} {props.children}</h3>
    </div>
  )
}

export default Profile;