import React from 'react';

function SingleUser(props)
{
    return(
        <div>
           
            <div class="row">
                <div class="col s4"></div>
                <div class="col s4 m4">
                <div class="card">
                      <div class="card-image">
                        <img src={props.user.firstPhoto}/>
                        <img src={props.user.secondPhoto}/>
                        <img src={props.user.thirdPhoto}/>
                            <span class="card-title">{props.user.name}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                      </div>
                    <div class="card-content">
                        <p><h6>Name : {props.user.name}</h6></p>
                        <p><h6>DOB : {props.user.dob}</h6></p>
                        <p><h6>Email : {props.user.email}</h6></p>
                    </div>
                </div>
                </div>
                <div class="col s4"></div>

               
            </div>
        </div>
    );
}
export default SingleUser;