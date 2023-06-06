import logoImg from '../assets/logo.png'
const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="Top-Offers logo" data-testid='test-logo'/>
    </div>
  )
}

export default Logo
