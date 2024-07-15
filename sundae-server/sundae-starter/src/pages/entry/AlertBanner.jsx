import Alert from "react-bootstrap/Alert";

export default function AlertBanner({ message, variant }) {
    const alertMessage =
        message || "Error.";
    const alertVariant = variant || "danger";

    return (
        <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
            {alertMessage}
        </Alert>
    );
}