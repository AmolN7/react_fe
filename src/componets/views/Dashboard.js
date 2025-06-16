import { react, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className="container py-5" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)" }}>
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: "#3b82f6" }}>Welcome to Your Dashboard</h1>
                <p className="lead text-muted">Quick access to your profile, settings, and reports</p>
            </div>
            <Row className="g-4 justify-content-center">
                <Col md={4}>
                    <Card className="shadow-sm border-0 h-100">
                        <Card.Body className="text-center">
                            <div className="mb-3">
                                <i className="bi bi-person-circle" style={{ fontSize: "2.5rem", color: "#6366f1" }}></i>
                            </div>
                            <Card.Title className="fw-semibold">Profile</Card.Title>
                            <Card.Text className="text-muted">
                                View and edit your profile information.
                            </Card.Text>
                            <Button variant="primary" className="w-100">Go to Profile</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm border-0 h-100">
                        <Card.Body className="text-center">
                            <div className="mb-3">
                                <i className="bi bi-gear-fill" style={{ fontSize: "2.5rem", color: "#10b981" }}></i>
                            </div>
                            <Card.Title className="fw-semibold">Settings</Card.Title>
                            <Card.Text className="text-muted">
                                Manage account settings and preferences.
                            </Card.Text>
                            <Button variant="success" className="w-100">Go to Settings</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm border-0 h-100">
                        <Card.Body className="text-center">
                            <div className="mb-3">
                                <i className="bi bi-bar-chart-fill" style={{ fontSize: "2.5rem", color: "#f59e42" }}></i>
                            </div>
                            <Card.Title className="fw-semibold">Reports</Card.Title>
                            <Card.Text className="text-muted">
                                View your activity and reports.
                            </Card.Text>
                            <Button variant="warning" className="w-100 text-white">View Reports</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default Dashboard;