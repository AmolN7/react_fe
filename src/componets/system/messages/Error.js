const Error = ({ error }) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="text-danger">Error</h1>
                    <p className="text-muted">{error.message}</p>
                    <p>Please try again later.</p>
                </div>
            </div>
        </div>
    );
}
export default Error;