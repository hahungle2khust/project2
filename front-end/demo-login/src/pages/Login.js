import React, {useState, useEffect} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';

function Login(props) {

const baseUrl="https://localhost:5001/swagger/";
const cookies = new Cookies();

const [form, setForm]=useState({
  username:'',
  password: ''
});
  const handleChange=e=>{
 const {name, value} = e.target;
 setForm({
   ...form,
   [name]: value
 });
  }

  const submit=async()=>{
    await axios.get(baseUrl+`/${form.username}/${md5(form.password)}`)
    .then(response=>{
      return response.data;
    }).then(response=>{
      if(response.length>0){
        var answer=response[0];
        cookies.set('id', answer.id, {path: '/'});
        cookies.set('userName', answer.userName, {path: '/'});
        cookies.set('email', answer.email, {path: '/'});
        cookies.set('loginname', answer.loginname, {path: '/'});
        cookies.set('password', answer.password, {path: '/'});
        cookies.set('dob', answer.dob, {path: '/'});
        cookies.set('photo', answer.photo, {path: '/'});
        cookies.set('sex', answer.sex, {path: '/'});
        alert("Welcome: "+answer.userName);
        props.history.push('/menu');
      }else{
        alert('Tên đăng nhập hoặc mật khẩu sai');
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
if(cookies.get('id')){
  props.history.push('/menu');
}
  },[]);

    return (
        <div className="containerPrincipal">
        <div className="containerLogin">
          <h1>Đăng nhập vào hệ thống</h1>
          <div className="form-group">
            <label>User name: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
            <br />
            <label>Pass: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=>submit()}>Login</button>
          </div>
        </div>
      </div>
    );
}

export default Login;