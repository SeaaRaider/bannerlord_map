import {useState} from 'react';

import Popup from './Popup';

function Flag(props){
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    function PopupHandler(){
        setPopupIsOpen(true);
    }
    return (
        <div>
            <div className={props.location + ' flag'} onClick={PopupHandler}></div>
            <div>
                    {popupIsOpen ? <Popup location={props.location + ' popup'}/> : null}
            </div>
        </div>
    );
}
export default Flag;