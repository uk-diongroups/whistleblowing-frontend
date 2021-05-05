// import logo from './logo.svg';
import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2'
import Logo from '../assets/uk-dion.svg';

function Form() {
  const url = "https://ukdiononline.com/api/whistleblowing"
  const [data, setData] = useState({
    name:'',
    email:'',
    phone:'',
    offender:'',
    report:'',
    extra:'',
  })

  function submit(e){ 
    const emptyData = {
      name:'',
      email:'',
      phone:'',
      offender:'',
      report:'',
      extra:'',
    }
    e.preventDefault();
    const header = {
        "Application-type" : "application/json",
        "Content-type" : "application/json"
    }
    axios.post(url,{
      name: data.name,
      email: data.email,
      phone: data.phone,
      offender: data.offender,
      report: data.report,
      extra: data.extra
    }, header )
    .then(res=>{
      //console.log("nice");
       console.log(res.data);
       Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      setData(emptyData);
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message,
        footer: '<a href>Why do I have this issue?</a>'
      })
    })
  }

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    // console.log(newdata);
  }
  return (
    <div className="App">
      <header>
        <form className="col-lg-5 mx-auto p-0 shadow mt-4" onSubmit={(e)=> submit(e)}>
            <div className="text-center feedback py-4 d-flex">
                <img src = { Logo } style={{width: '15%',marginRight: '15%',marginLeft: '2%'}}/>
                <h3 className="mt-4">WhistleBlowing</h3>
            </div>
            <div className="p-3">
              <div className="form-group">
                <label htmlFor="name">Your Name: <i class="text-muted">optional</i></label>
                <input type="text" onChange={(e)=>handle(e)} className="form-control" id="name" value={ data.name } placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email Address: <i class="text-muted">optional</i></label>
                <input type="email" onChange={(e)=>handle(e)} className="form-control" id="email" value={ data.email }  placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone: <i class="text-muted">optional</i> </label>
                <input type="tel" onChange={(e)=>handle(e)} className="form-control" id="phone" value={ data.phone }  placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="offender">Name of Offender:</label>
                <input type="text" onChange={(e)=>handle(e)} className="form-control" id="offender" value={ data.offender } placeholder="" required/>
              </div>
              <div className="form-group">
                <label htmlfor="report">Nature of Conduct:</label>
                <textarea onChange={(e)=>handle(e)} className="form-control" id="report" value={ data.report }  rows="3" required></textarea>
              </div>
              <div className="form-group">
                <label htmlfor="extra">What can we do differently:</label>
                <textarea onChange={(e)=>handle(e)} className="form-control" id="extra" value={ data.extra }  rows="3" required></textarea>
              </div>
            </div>
            <div className="text-center py-3">
              <button className="btn btn-success">Submit</button>
            </div>
        </form>
      </header>
    </div>
  );
}

export default Form;
