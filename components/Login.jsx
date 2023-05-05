import React from 'react'

const Login = () => {
  return (
    <div class="login-signup-container">
  <div class="form-container login-form-container">
    <form class="form login-form">
      <h2>Login</h2>
      <div class="form-group">
        <input type="email" id="login-email" placeholder="Email" required/>
        <label for="login-email">Email</label>
      </div>
      <div class="form-group">
        <input type="password" id="login-password"  required/>
        <label for="login-password">Password</label>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
  )
}

export default Login