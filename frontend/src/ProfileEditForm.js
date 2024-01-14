const ProfileEditForm = ()=>{
    
    return(
        <form>
            <label htmlFor="username">Username:</label>
            <input
                type='text'
                id='username'
                name='username'
                placeholder="Username"
                // value={user.username}
                // onChange={handleChange}
            />
            <br/>
            <label htmlFor="firstName">First Name:</label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder="First Name"
                // value={user.firstName}
                // onChange={handleChange}
            />
            <br/>
            <label htmlFor="lastName">Last Name:</label>
            <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder="Last Name"
                // value={user.lastName}
                // onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Email:</label>
            <input
                type='text'
                id='email'
                name='email'
                placeholder="Email"
                // value={user.email}
                // onChange={handleChange}
            />
            <br/>
            <button>submit</button>
        </form>
    )
}
export default ProfileEditForm;