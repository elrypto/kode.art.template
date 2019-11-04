import React from 'react'
import { Button } from 'antd';
import { notify } from '../common/Actions';



export default function Test() {

 
  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">==--* test  +___=-`</h3>
            <div className="heading-underline"></div>
           

            <div className="row seeMe">
              <div className="col-md-6 seeMe">
                <div className="row seeMe">
                 <div className="col-md-4 seeMe">
                    p
                 </div>
                 <div className="col-md-8">
                    t
                </div>
                </div>
              </div>
            </div>

              <p> Test something here </p>
              <Button 
                type="dashed"
                onClick={ ()=> {
                  notify('ok');
                }}
              >
                Heres a button
              </Button>

          </div>
        </div>
      </div>
    </div>
  )
}
