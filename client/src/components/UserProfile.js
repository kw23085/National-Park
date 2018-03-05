import React , { Component } from 'react';
import clientAuth from '../clientAuth.js';
import { Redirect } from 'react-router-dom'

class UserProfile extends Component{
    state = {
        beingEdited: null
    }

    editUser(evt){
        evt.preventDefault()
        console.log("edited user", this.props.currentUser._id)
        const fields = {
            name: this.refs.editName.value,
            email: this.refs.editEmail.value
        }
        clientAuth.updatedUser(this.props.currentUser._id, fields).then(res => {
            console.log('save btn clicked', res.data)
            return <Redirect to="/browseparks" />
        
    })

    }

    deleteUser(evt){
        evt.preventDefault()
        console.log('user deleted!')
        const fields = {
            name: this.refs.editName.value,
            email: this.refs.editEmail.value
        }
        clientAuth.deleteUser(this.props.currentUser._id, fields). then(res => {
            
        })
    
    }

   render(){
       console.log('userprofile: ' ,this.props)
       const { currentUser } = this.props
       return(
           <div>
               <legend>{currentUser.name} / Profile</legend>
               <form onSubmit={this.editUser.bind(this)}>
                    <div >
                        <label>Name: </label>
                        <input ref="editName" type="text" name="name" defaultValue={currentUser.name}/>
                    </div>

                    <div>
                        <label>Email: </label>
                        <input ref="editEmail" type="text"  name="email" defaultValue={currentUser.email}/> 
                    </div>

                    <button>Save</button>
                </form>
                <h5> -or- </h5>
                <button onClick={this.deleteUser.bind(this)}>Delete My Account</button>
           </div>
       )
   }
   }

export default UserProfile