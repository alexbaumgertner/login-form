import { Button } from '../../components'

const Form = (): JSX.Element => {
  return (
    <form method="post" action="/login">
      <input type="text" name="login" placeholder="login or email" />
      <input type="password" name="password" placeholder="password" />

      <Button type="submit">Log in</Button>
      <p>
        <a href="/login/restore">Forgot your password?</a>
      </p>
    </form>
  )
}

export default Form
