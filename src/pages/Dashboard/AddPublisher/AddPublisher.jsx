import HelmetKiller from "../../Shared/HelmetKiller/HelmetKIller";


const AddPublisher = () => {
    return (
        <div>
             <HelmetKiller pagename= "Dashboard | Add Publisher"></HelmetKiller>
            <h1>Add Publisher</h1>
            <div className="" >
                <form className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Publisher Name</span>
                        </label>
                        <input type="text" placeholder="Publisher Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Publisher Image</span>
                        </label>
                        <input type="text" placeholder="Publisher Image" className="input input-bordered" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPublisher;