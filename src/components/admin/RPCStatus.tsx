import React from 'react'
import { Card, Spin } from 'antd';
import { rpcStatus } from '../../common/Actions';
import { useInterval } from '../../utils/useInterval';

export default function RPCStatus() {
  const [checkInterval, setCheckInterval] = React.useState(3000);
  const [rpcIsUp, setRpcIsUp] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(false);
  const divStyleUp = {color: 'green'};
  const divStyleDown = { color: 'red'};


  useInterval(() => {
    const checkStatus = async() => {
      console.log("checking status...");
      let status: boolean = await rpcStatus();
      setRpcIsUp(status);

      
    }

    setShowSpinner(true);
    setTimeout(function() { setShowSpinner(false); }, 750);

    checkStatus();
  }, checkInterval);


  return (
    <div className="antDDefault">
      <Card title="RPC Status" bordered={false} >
        <div>Checking every: {checkInterval} ms {showSpinner ? <Spin size="small" /> : ''}
        </div>
        <div>Status: {rpcIsUp ?
            <span style={divStyleUp}>UP</span> :
            <span style={divStyleDown}>DOWN!</span>
          }
        </div>
      </Card>
    </div>
  );
}
