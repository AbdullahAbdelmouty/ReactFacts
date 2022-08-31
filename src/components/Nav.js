import logo from './/logo192.png'
import {FaToggleOn,FaToggleOff} from 'react-icons/fa';
function Nav(props){
    return(
        <div className= {props.mode? "navContanier": "navContanierDark"}>
        <div className='logo'>
        <img src={logo} alt='logo' className='img' />
        <h3 className='head'>ReactFacts</h3>
        </div>
        <div className='toggle'><span className={props.mode? "darkOff":"darkOn"}>Dark</span><button onClick={props.changeMode} className='btn'>{props.mode? <FaToggleOn size={'2em'} />:<FaToggleOff size={'2em'} color={"white"} />}</button><span className={props.mode? "lightOn":"lightOff"}>light</span></div>
        </div>
    )
}
export default Nav