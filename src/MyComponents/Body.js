
import React from 'react';
import hand from './Group 2308.png';
import line from './Line 2.png';
import line1 from './Line 1.png';
import frame1 from './Frame 1.png';
import frame2 from './Frame 2.png';
import frame3 from './Frame 3.png';
import frame4 from './Frame 4.png';
import group from './Group 2.png';
import group1 from './Group 3.png';
import group2 from './Group 4.png';
import gift from './Gift.png';
import money from './save money 1.png';
export default function Body() {
    return (
       <> 

          <img src={hand} className ="hand"  alt="pic"/>
          <img src={line1} className ="line1"  alt="pic"/>
          <img src={money} className ="money"  alt="pic"/>

          <div><div className="card1" >
                
                    <h1 className="card-title">Total Forms Filled<img src={line} className ="line"  alt="line"/></h1><h1 className="title1">238</h1>
    </div></div>

       

        <input className="form-control1 me-2" type="search" placeholder="Search by Name/Phone No./PAN No." aria-label="Search" />
        <div><div className="card" ><view style={{position: 'absolute',width: 270,height: 230,left: 20,top: 220,}}><text>Indian Donation Form </text> </view><img src={group} className ="group"  alt="group"/><img src={group1} className ="group1"  alt="group1"/>
        </div></div>
        <div><div className="card2" > <view style={{position: 'absolute',width: 270,height: 230,left: 20,top: 220,}}><text>Foreign Donation Form </text> </view> <img src={group} className ="group"  alt="group"/><img src={group2} className ="group2"  alt="group2"/>
        </div></div>
        <div><div className="card3" > <view style={{position: 'absolute',width: 270,height: 230,left: 29,top: 220,}}><text>Kind Donation Form </text> </view> <img src={group} className ="group"  alt="group"/><img src={gift} className ="gift"  alt="gift"/>
        </div></div>


        <div><div className="card4" ><view style={{position: 'absolute',width: 270,height: 230,left: 20,top: 30,}}><text>User Management </text> </view><img src={frame1} className ="frame1"  alt="frame1"/>
        </div></div>
        <div><div className="card5" ><view style={{position: 'absolute',width: 270,height: 230,left: 20,top: 30,}}><text>Action required for PAN card </text> </view><img src={frame2} className ="frame2"  alt="frame2"/>
        </div></div>
        <div><div className="card6" ><view style={{position: 'absolute',width: 270,height: 230,left: 20,top: 30,}}><text>Action required for Cheque/DD </text> </view><img src={frame3} className ="frame3"  alt="frame3"/>
        </div></div>
        <div><div className="card7" ><view style={{position: 'absolute',width: 270,height: 230,left: 20,top: 30,}}><text>Action required for Others </text> </view><img src={frame4} className ="frame4"  alt="frame4"/>
        </div></div>

        
</>

      
     
           
    )
}
