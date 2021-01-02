import './App.scss';
import './nullstyle.scss';
import {Helmet} from 'react-helmet';
import Favicon from './favicon.ico';


const App = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8"/>
                <title> React helmet SEO </title>
                <meta name="description" content="this is an react-helmet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="short icon" href={Favicon}/>
            </Helmet>
        </div>
    );
}

export default App;
