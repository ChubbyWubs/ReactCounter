import React, { useState } from 'react';

function Screen({num}) {

    return (
        <div>
            <h1 className="count-display">{num}</h1>
        </div>
    );
}
export default Screen;