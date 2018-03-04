import React , { Component } from 'react';
import clientAuth from '../clientAuth.js'

class UserProfile extends Component{
    state = {
        beingEdited: null
    }

    editUser(evt){
        evt.preventDefault()
        console.log("edited user", this.props.currentUser._id)
        const fields = {
            body: this.refs.editBody.value
        }
    clientAuth.updatedUser(this.state.beingEdited, fields).then(res => {
        console.log(res.data)
    })

    }

    // deleteUser(evt){
    //     evt.preventDefault()
    //     console.log('user deleted!')
    // }

   render(){
       console.log('userprofile: ' ,this.props)
       const { currentUser } = this.props
       return(
           <div>
               <legend>{currentUser.name} / Profile</legend>
               <form onSubmit={this.editUser.bind(this)}>
                    <div >
                        <label>Name: </label>
                        <input ref="editBody" type="text" defaultValue={currentUser.name}/>
                    </div>

                    <div>
                        <label>Email: </label>
                        <input ref="editBody" type="text" defaultValue={currentUser.email}/> 
                    </div>

                    <button>Save</button>
                </form>
                <h5> -or- </h5>
                <button >Delete My Account</button>
           </div>
       )
   }
   }

export default UserProfile