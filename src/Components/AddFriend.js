import React from "react";

const AddFriend = () => {
    return (
    <div>
        <h1>AddFriend</h1>
            <form>
            <div>
                <label htmlFor="name">FRIEND NAME:</label>
                <input id="name"/>
            </div>
            <div>
                <label htmlFor="age">FRIEND AGE:</label>
                <input id="age"/>
            </div>
            <div>
                <label htmlFor="email">FRIEND EMAIL:</label>
                <input id="email"/>
            </div>
            <button>SUBMIT</button>
        </form>
    </div>);
  };

export default AddFriend;