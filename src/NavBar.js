import './App.css';


export default function NavBar(props){
    
  return (
    <div>
        <nav className='nav' style={{backgroundColor: props.md === 'dark'?'#353333': 'white', color: props.md === 'dark'?'white': 'black'}}>
            <a className="navbar-brand" href="#">
                <img src="../logo.png" alt="" width="30" height=""  className="d-inline-block align-text-top"/>
                {props.title}
            </a>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label">{props.bt}</label>
            </div>
        </nav>
    </div>
  )
}
