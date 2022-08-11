import React from 'react';

const Profile = (props) => {
  // console.log(props)
  const {name, lastname, children} = props
  return (
    <div>
      {/* <h3>Name - {props.name} {props.lastname} {props.children}</h3> */}
      <h3>Name - {name} {lastname} {children}</h3>
    </div>
  )
}

export default Profile;