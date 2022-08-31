import {GoPrimitiveDot} from 'react-icons/go'
function MainContant(props){
    return(
        <div className={props.mode? "main" : "mainDark"}>
            <h1 className="mainText" id='mainText'>Fun Facts About React</h1>
            <ul>
                <li className='fact'> <GoPrimitiveDot/>Was first released in 2013</li>
                <li className='fact'> <GoPrimitiveDot/>Was originally created by Jordan Walke</li>
                <li className='fact'> <GoPrimitiveDot/>Has well over 100K stars on GitHub</li>
                <li className='fact'> <GoPrimitiveDot/>Is maintained by Facebook</li>
                <li className='fact'> <GoPrimitiveDot/>Powers thousands of enterprise apps, including <br/>mobile apps</li>
            </ul>
        </div>
    )
}
export default MainContant 