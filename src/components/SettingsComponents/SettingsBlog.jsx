import React from 'react';

import '../SettingsComponents/style/settings.css'
import SettingsLeft from './SettingsLeft';
import SettingsRight from './SettingsRight';


const SettingsBlog = () => {
    return (
        <div className='settings_blog d-xl-flex'>
            <SettingsLeft />
            <SettingsRight/>
        </div>
    );
};

export default SettingsBlog;