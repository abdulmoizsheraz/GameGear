import React from 'react'

const LoginSignup = () => {
  return (
<div class="login-signup-container">
  <div class="form-container login-form-container">
    <form class="form signup-form">
      <h2>Sign up</h2>
      <div class="form-group">
        <input type="text" id="signup-name" placeholder="Name" required/>
        <label for="signup-name">Name</label>
      </div>
      <div class="form-group">
        <input type="email" id="signup-email" placeholder="Email" required/>
        <label for="signup-email">Email</label>
      </div>
      <div class="form-group">
        <input type="password" id="signup-password"  required/>
        <label for="signup-password">Password</label>
      </div>
      <button type="submit">Sign up</button>
    </form>
  </div>
</div>
  )
}

export default LoginSignup