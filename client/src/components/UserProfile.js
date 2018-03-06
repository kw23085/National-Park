import React , { Component } from 'react';
import clientAuth from '../clientAuth.js';
import { Redirect } from 'react-router-dom'

class UserProfile extends Component{

    editUser(evt){
        evt.preventDefault()
        console.log("edited user", this.props.currentUser._id)
        const fields = {
            name: this.refs.editName.value,
            email: this.refs.editEmail.value
        }
        clientAuth.updatedUser(this.props.currentUser._id, fields)
            .then(user => {
                this.props.updateCurrentUser(user)
                this.props.history.push('/browseparks')
            })
    }

    deleteUser(evt){
        evt.preventDefault()
        console.log('user deleted!')
        const fields = {
            name: this.refs.editName.value,
            email: this.refs.editEmail.value
        }
        clientAuth.deleteUser(this.props.currentUser._id, fields)
            .then(res => {
                this.props.history.push('/')
                this.props.onsignOut()
        })   
    }

   render(){
       console.log('userprofile: ' ,this.props)
       const { currentUser } = this.props
       return(
           <div className="panel-userProfile">
               <legend>{currentUser.name} / Profile</legend>
               <form onSubmit={this.editUser.bind(this)}>
                    <div className="input-field">
                        <label>Name: </label>
                        <input ref="editName" type="text" name="name" defaultValue={currentUser.name}/>
                    </div>

                    <div className="input-field">
                        <label>Email: </label>
                        <input ref="editEmail" type="text"  name="email" defaultValue={currentUser.email}/> 
                    </div>

                    <button className="btn-signin-signup-save">Save</button>
                </form>
                    <div className="line">
                        <div className="line-label">or</div>
                    </div>

                <button className="btn-delete" onClick={this.deleteUser.bind(this)}>Delete My Account</button>
           </div>
       )
   }
   }

export default UserProfile