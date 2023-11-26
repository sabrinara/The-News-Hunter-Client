import { Helmet } from "react-helmet-async";


const HelmetKiller = ( { pagename } ) => {
    return (
        <div>
            <Helmet>
                <title>The-News-Hunter | {pagename}</title>
            </Helmet>
        </div>
    );
};

export default HelmetKiller;