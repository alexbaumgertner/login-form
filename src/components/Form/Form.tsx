const Form = () => {
  return (
    <form method="post" action="/login">
      <input type="text" name="login" placeholder="login or email" />
      <input type="password" name="password" placeholder="password" />

      <button type="submit">
        Log in
      </button>
      <p>
        <a href="/login/restore">Forgot your password?</a>
      </p>
    </form>
  )
}

export default Form
