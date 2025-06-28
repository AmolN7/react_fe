const Loading = () => {
    return (
        //add class to keep loading at the center of the page
        <div className="container my-5">
            <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading, please wait...</p>
            </div>
        </div>
    );
}
export default Loading;