import React from 'react'

const LoginSignup = () => {
  return (
<div class="login-signup-container">
  <div class="form-container login-form-container">
    {/* <form class="form login-form">
      <h2>Login</h2>
      <div class="form-group">
        <input type="email" id="login-email" placeholder="Email" required/>
        <label for="login-email">Email</label>
      </div>
      <div class="form-group">
        <input type="password" id="login-password" placeholder="Password" required/>
        <label for="login-password">Password</label>
      </div>
      <button type="submit">Login</button>
      <p class="form-link">Don't have an account? <a href="#" class="signup-link">Sign up</a></p>
    </form> */}
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
        <input type="password" id="signup-password" placeholder="Password" required/>
        <label for="signup-password">Password</label>
      </div>
      <button type="submit">Sign up</button>
      <p class="form-link">Already have an account? <a href="#" class="login-link">Login</a></p>
    </form>
  </div>
</div>


  )
}

export default LoginSignup