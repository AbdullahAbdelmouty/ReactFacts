import logo from './/logo192.png'
function Nav(){
    return(
        <div className='navContanier'>
        <div className='logo'>
        <img src={logo} alt='logo' className='img' />
        <h3>ReactFacts</h3>
        </div>
        <h4>React Cours-project1</h4>
        </div>
    )
}
export default Nav