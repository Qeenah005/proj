import Qeenah from "./qeenah";
import {Outlet} from 'react-router-dom';
function Root(){
    return(
        <div>
            <Qeenah/>
            <main>
            <Outlet/>
            </main>
        </div>
    )
}

export default Root