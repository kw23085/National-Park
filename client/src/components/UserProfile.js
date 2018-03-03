import React , { Component } from 'react';

class UserProfile extends Component{
    state = {
        beingEdited: null
    }

    onEdit(evt){
        evt.preventDefault()
        console.log('changed!')
        this.setState({
            beingEdited: this.refs.editBody.value
        })
    }

   render(){
       console.log('userprofile: ' ,this.props)
       const { currentUser } = this.props
       return(
           <div>
               <legend>{currentUser.name} / Profile</legend>
               <form onSubmit={this.onEdit.bind(this)}>
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
                <button>Delete My Account</button>
           </div>
       )
   }
   }

export default UserProfile