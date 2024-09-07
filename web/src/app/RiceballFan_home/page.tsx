
import {GetUserFromApp,GotUserInfo , GotUserLaunchMap ,GotUserLoc} from "./bridge";


const Page =() => {
    GetUserFromApp();
    return (
        <div>
            <h1>Test Page</h1>
            {/* print GotUserInfo... on page */}
            <p>{GotUserInfo}</p>
            {/* print GotUserLaunchMap... on page */}
            <p>{GotUserLaunchMap}</p>
            {/* print GotUserLoc... on page */}
            <p>{GotUserLoc}</p>


        </div>
    );
}

export default Page;


