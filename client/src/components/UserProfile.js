import React , { Component } from 'react';

class UserProfile extends Component{
    state = {
        beingEdited: null
    }

   render(){
       console.log('userprofile: ' ,this.props)
       const { currentUser } = this.props
       return(
           <div className="panel-userProfile">
               <legend><h2>{currentUser.name} / Profile </h2></legend>
               <form>
                    <div className="input-field">
                        <label>Name: </label>
                        <input ref="editBody" type="text" defaultValue={currentUser.name}/>
                    </div>

                    <div className="input-field">
                        <label>Email: </label>
                        <input ref="editBody" type="text" defaultValue={currentUser.email}/> 
                    </div>

                    <button className="btn-signin-signup-save">Save</button>
                </form>
                <div className="line">
                        <div className="line-label">or</div>
                    </div>
                <button className="btn-delete">Delete My Account</button>
           </div>
       )
   }
   }

export default UserProfile