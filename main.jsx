import React from 'react';
import ReactDOM from 'react-dom';
import { UserCard } from './UserCard';
// import { RegFrm } from './formSamples/RegFrm';
// import { UserDetails } from './formSamples/UserDetails';
import "./index.css";
import { AdviceApp } from './formSamples/AdviceApp';
// import "./QrCode.css";
// import { QrCode } from './QrCode';
// import App from './component/App';

ReactDOM.createRoot(document.getElementById("root")).render (
<React.StrictMode>
    {/* <UserCard/> */}
    {/* <QrCode/> */}
    {/* <UserDetails/> */}
    {/* <RegFrm/> */}
    <AdviceApp/>
</React.StrictMode>)