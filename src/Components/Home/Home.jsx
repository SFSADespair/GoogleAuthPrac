import React, {useState, useEffect} from 'react'
import SignIn from '../Google/SignIn'
import Welcome from '../Welcome/Welcome'

const Home = () => {
    const [user, setUser] = useState()
    const email = localStorage.getItem('email')
	return (
		<>
			{email != null
                ? (
                    <Welcome user={user} />
                ) : (
                    <SignIn sUser={setUser} />
                )
            }
		</>
  	)
}

export default Home