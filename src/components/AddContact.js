import React from 'react';

class AddContact extends React.Component{
    render(){
        return(
        <div className="ui main">
            <h2>AddContact</h2>
            <from className="ui from">
                <div className="field" ></div>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name"/>

            </from>
            <from className="ui from">
                <div className="field"></div>
                <label>Email</label>
                <input type="text" name="email" placeholder="Email"/>
                
            </from>
          <button className='ui button blue'>Add</button>
        </div>
        )
    }
}

export default AddContact;