import './App.css';
import { getBrowserDetails, getIP } from './services/service';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // Get Resolution
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  let device_type;
  let browser;
  let ip;

  //Get Device Type
  // @param device_type is 1 then Desktop or Laptop, 2 then Mobile or Tablet
  vw > 1224 ? device_type = 1 : device_type = 2;

  // Get Browser
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) browser = 'Opera';
  else if(navigator.userAgent.indexOf("Edg") !== -1 ) browser = 'Edge';
  else if(navigator.userAgent.indexOf("Chrome") !== -1 ) browser = 'Chrome';
  else if(navigator.userAgent.indexOf("Safari") !== -1) browser = 'Safari';
  else if(navigator.userAgent.indexOf("Firefox") !== -1 ) browser = 'Firefox';
  else if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) browser = 'IE'; 
  else browser = 'unknown';

  
  getIP().then(response => {
    ip = response.IPv4
  })
  let user_data = {
    vw,
    vh,
    is_cookie_enabled: navigator.cookieEnabled, // Get Cookie Enabled
    language: navigator.language || navigator.userLanguage, // Get Language
    device_type,
    browser, ip
  }
  
  getBrowserDetails({user_data}).then(response => {
    var result = response.data
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <div class="card  p-3">
          <div class="card-body">
            <div>
              Language: {user_data.language}
            </div>
            <div>
              Device Type: {user_data.device_type}
            </div>
            <div>
              Browser: {user_data.browser}
            </div>
            <div>
              Cookie Enabled: {user_data.is_cookie_enabled ? 'True' : 'False'}
            </div>
            <div>
              Device: {user_data.device_type === 1 ? 'Desktop or Laptop' : 'Mobile or Tablet'}
            </div>
            <div>
              <div>Resolution {vw}&nbsp;x&nbsp;{vh}</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
