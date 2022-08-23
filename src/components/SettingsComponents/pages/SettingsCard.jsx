import React from 'react';
import Boxs from './Boxs';



const SettingsCard = () => {
    return (
        <div className='settings_card'>
            <Boxs name="Appereance" about="Dark and Light mode, Font size"> <i class="bi bi-heart-fill"></i> </Boxs>
            <Boxs name="Your Restaurant" about="Dark and Light mode, Font size"> <i class="bi bi-house-door-fill"></i> </Boxs>
            <Boxs name="Products Management" about="Dark and Light mode, Font size"> <i class="bi bi-gear"></i> </Boxs>
            <Boxs name="Notifications" about="Dark and Light mode, Font size"> <i class="bi bi-bell"></i> </Boxs>
            <Boxs name="Security" about="Dark and Light mode, Font size"> <i class="bi bi-lock"></i> </Boxs>
            <Boxs name="Security" about="Dark and Light mode, Font size"> <i class="bi bi-lock"></i> </Boxs>
            <Boxs name="About Us" about="Dark and Light mode, Font size"> <i class="bi bi-info-circle"></i> </Boxs>



        </div>
    );
};

export default SettingsCard;
