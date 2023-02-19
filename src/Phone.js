import React, { useState, useEffect } from "react";
// import { Device } from "twilio-client";
import Dialler from "./Dialler";
import KeypadButton from "./KeypadButton";
import Incoming from "./Incoming";
import OnCall from "./OnCall";
import "./Phone.css";
import states from "./states";
import Africastalking from 'africastalking-client'
import FakeState from "./FakeState";

const Phone =  async () => {
  var appURL = window.location.origin;
  const [state, setState] = useState(states.CONNECTING);
  const [conn, setConn] = useState(null);
  var response = await fetch('/capability-token', {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
    body: JSON.stringify({
        clientname: 'browser1',
    }),
});
var data = await response.json();
var token = data.token;

return new Africastalking.Client(token, {
    sounds: {
        dialing: `${appURL}/sounds/dial.mp3`,
        ringing: `${appURL}/sounds/ring.mp3`,
    },
});

  useEffect(() => {
    
  }, [token]);

  const handleCall = () => {
   
  };

  const handleHangup = () => {
    
  };

  let render;
  if (conn) {
    if (state === states.INCOMING) {
      render = <Incoming ></Incoming>;
    } else if (state === states.ON_CALL) {
      render = <OnCall handleHangup={handleHangup} connection={conn}></OnCall>;
    }
  } else {
    render = (
      <>
        <Dialler></Dialler>
        <div className="call">
          <KeypadButton handleClick={handleCall} color="green">
            Call
          </KeypadButton>
        </div>
      </>
    );
  }
  return (
    <>
      <FakeState
        currentState={state}
        setState={setState}
        setConn={setConn}
      ></FakeState>
      {render}
      <p className="status">{state}</p>
    </>
  );
};

export default Phone;
