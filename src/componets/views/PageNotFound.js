const PageNotFound = () => {
    return (
        <div className="text-center">
            <h1 className="display-4">404 - Page Not Found</h1>
            <p className="lead">The page you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary">Go to Home</a>
        </div>
    );
}
export default PageNotFound;
// This component is used to display a 404 error message when a user navigates to a route that does not exist.