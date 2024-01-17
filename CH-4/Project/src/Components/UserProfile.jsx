import React from 'react';

function UserProfile() {
    const [profile, setProfile] = React.useState({
        name: 'Shaktisingh Chundawat',
        email: 'webkit7093@gmail.com',
        notificationPreference: {
            email: false,
            pushEmail: false,
        },
        privasySettings: {
            showProfile: false,
        }
    });

    const handelNameChange = (newName) => {
        setProfile({
            ...profile,
            name: newName
        })
    };

    const handelEmailChange = (newEmail) => {
        setProfile({
            ...profile,
            email: newEmail
        })
    };

    const handelNotificationToggle = (type) => {
        setProfile({
            ...profile,
            notificationPreference: {
                ...profile.notificationPreference,
                [type]: !profile.notificationPreference[type]
            }
        })
    }

    const privacyToggle = () => {
        setProfile({
            ...profile,
            privasySettings: {
                ...profile.privasySettings,
                showProfile: !profile.privasySettings.showProfile
            }
        })
    }

  return (
    <>
        <h2>User Settings</h2>
        <label>Name: {profile.name}</label><br />
        <input type="text" value={profile.name} onChange={(e) => handelNameChange(e.target.value)} />
        <label>Email: {profile.email}</label><br />
        <input type="email" value={profile.email} onChange={(e) => handelEmailChange(e.target.value)} />
        <h2>Notification Settings</h2>
        <label>Email Notification: {profile.notificationPreference.email ? 'On' : 'Off'}</label><br />
        <input type="checkbox" value={profile.notificationPreference.email} onChange={() => handelNotificationToggle('email')}/> Email <br />
        <label>Push Email: {profile.notificationPreference.pushEmail ? 'On' : 'Off'}</label> <br />
        <input type="checkbox" value={profile.notificationPreference.pushEmail} onChange={() => handelNotificationToggle('pushEmail')} /> Push <br />
        <h2>Privacy Settings</h2>
        <label>ShowProfile: {profile.privasySettings.showProfile ? 'On' : 'Off'}</label><br />
        <input type="checkbox" value={profile.notificationPreference.pushEmail} onChange={() => privacyToggle('showProfile')} /> ShowProfile
    </>
  )
}

export default UserProfile