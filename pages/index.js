export default function Home() {
  return (
    <div>
      <h1>Registraion</h1>
      <form action="/api/register" method="post">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
      <h1>Login</h1>
      <form action="/api/login" method="post">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
