// frontend/src/components/Avatar.js

import React, { useState } from 'react';

const Avatar = ({ emotion }) => {
    const avatarImages = {
        happy: 'path-to-happy-avatar.png',
        sad: 'path-to-sad-avatar.png',
        confused: 'path-to-confused-avatar.png',
        cringe: 'path-to-cringe-avatar.png'
    };

    return (
        <div className="w-32 h-32">
            <img src={avatarImages[emotion] || avatarImages.happy} alt="AI Avatar" className="w-full h-full" />
        </div>
    );
};

export default Avatar;
