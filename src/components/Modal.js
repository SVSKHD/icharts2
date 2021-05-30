import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {FaInfo} from "react-icons/fa"


const ModalNote = ({color}) => {
  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color={color} 
      onClick={toggle}><FaInfo size={20}/></Button>
      <Modal className="modal-dialog-centered" 
      isOpen={modal} 
      modalTransition={{ timeout: 700 }} 
      backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className="modal-xl">
        <ModalHeader>IVR-IVP Scan</ModalHeader>
        <ModalBody>
        

<p>This scan provides information about the current average IV (implied volatility), IVR (IV rank) and IVP (IV percentile) for futures scrips.</p>

<p><b>IVR (Implied Volatility Rank) :</b> This shows, on a scale of 0 to 100, the level where the current IV is with respect to the IV range for the last one year. 
    Eg. If current IVR is 55.0 then it means the current IV 
    is slightly above the half mark of the last one year's IV range.</p>

<p><b>IVP (Implied Volatility Percentile) :</b> This tells you how much % of the time in the last one year IV has been below the current IV level. 
Eg. If IVP is 40.0 it means 40% of the time IV was below the current IV level in the last one year.</p>

<p><b>How to use this data :</b> If one is buying options (mainly when holding the trade for the next few days), it is considered to be better if IVR/IVP are at lower levels. This is because options are priced cheaper (they are inexpensive due to lower IV) and after you buy any increase in volatility (even without an increase in underlying price) could increase price of options thus taking you into profit. So one is at an advantage when one buys inexpensive options (when IVs are low relatively). Similarly, if one is an option seller then one would want the IVs to be relatively higher so one would look to sell when IVR/IVP are high so one would profit when IVs go down. Consistently initiating positions using these ideas tends to provide a slight trading edge.</p>

<p><b>IVR / IVP Levels :</b> It is best to look at the past history to decide how high or low are current IVR / IVP levels. Generally speaking IVR levels of below 15-20 are considered low but at the same time it is important to make sure IVP is also low (because IVR can be biased by any recent major spikes in the last one year Eg. during Mar 2020 decline). IVP levels below 50 are considered low and above 50 relatively high. Combining IVR and IVP is probably a good idea. Eg. IVR below 20 and
     IVP below 50 at the same time might indicate low recent volatility where option buying or vega positive trades (that would benefit with volatility increase) like calendars might be better. 
     IVR above 60-70 and IVP above 50 at the same time might indicate high recent volatility and it would be prudent to avoid option buying and go for short vega trades like short straddles/strangles 
     or iron condors BUT only when IV starts to cool down after high IVR/IVP readings. Initiating short volatility trades when volatility is still going up can be dangerous as volatility can keep going up destroying the trades.</p>


        </ModalBody>
        <ModalFooter>
        <p className="text-danger">*** Above information is for educational purpose only. We request you to study this data along with 
            charts and follow prudent position sizing & risk management to keep your risk of ruin low.</p>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalNote;