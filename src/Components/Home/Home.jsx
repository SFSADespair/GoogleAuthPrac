import React, {useState} from 'react'
import SignIn from '../Google/SignIn'
import Welcome from '../Welcome/Welcome'

const Home = () => {
    const [user, setUser] = useState()

	return (
		<>
			{user?.length
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