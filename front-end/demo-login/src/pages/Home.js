import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';

function Menu(props) {

    const cookies = new Cookies();

    const cerrarSesion=()=>{
        cookies.remove('id', {path: '/'});
        cookies.remove('userName', {path: '/'});
        cookies.remove('email', {path: '/'});
        cookies.remove('loginname', {path: '/'});
        cookies.remove('password', {path: '/'});
        cookies.remove('dob', {path: '/'});
        cookies.remove('photo', {path: '/'});
        cookies.remove('sex', {path: '/'});
        props.history.push('./');
    }

    useEffect(()=>{
        if(!cookies.get('id')){
            props.history.push('./');
        }
          },[]);

    return (
        <div className="containerMenu">
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Đăng xuất</button>
            <br />
            <h5>ID: {cookies.get('id')}</h5>
            <br />
            <h5>Tên: {cookies.get('userName')}</h5>
            <br />
            <h5>email: {cookies.get('email')}</h5>
            <br />
            <h5>Username: {cookies.get('dob')}</h5>
            <br />
            <h5>Password: {cookies.get('photo')}</h5>
            <br />
            <h5>Password: {cookies.get('sex')}</h5>
            <br />
        </div>
    );
}

export default Menu;