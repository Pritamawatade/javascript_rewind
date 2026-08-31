import { useEffect, useState } from "react";

const styles = {
    page: {
        display: "grid",
        minHeight: "100vh",
        placeItems: "center",
        margin: 0,
        background: "#f2f7f3",
        color: "#183022",
        fontFamily: "Arial, sans-serif",
    },
    form: {
        width: "min(90%, 360px)",
        padding: "2rem",
        background: "white",
        border: "1px solid #d6e3d8",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgb(24 48 34 / 10%)",
    },
    label: {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: 600,
    },
    input: {
        boxSizing: "border-box",
        width: "100%",
        marginBottom: "1rem",
        padding: "0.7rem",
        border: "1px solid #aebdb2",
        borderRadius: "4px",
        font: "inherit",
    },
    button: {
        width: "100%",
        padding: "0.75rem",
        border: 0,
        borderRadius: "4px",
        color: "white",
        font: "inherit",
        fontWeight: 700,
        cursor: "pointer",
    },
    status: {
        minHeight: "1.5em",
        margin: "1rem 0 0",
        textAlign: "center",
    },
};

function isGreenTime() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
}

export default function App() {
    const [canSubmit, setCanSubmit] = useState(isGreenTime);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const updateButtonState = () => setCanSubmit(isGreenTime());

        updateButtonState();
        const intervalId = setInterval(updateButtonState, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function handleSubmit(event) {
        event.preventDefault();

        if (!isGreenTime()) {
            setCanSubmit(false);
            setMessage("Submissions are closed. They open at 6:00 AM.");
            return;
        }

        setMessage("Form submitted successfully.");
        setName("");
    }

    return (
        <main style={styles.page}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h1>Submit Form</h1>
                <label style={styles.label} htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    style={styles.input}
                />
                <button
                    type="submit"
                    disabled={!canSubmit}
                    style={{
                        ...styles.button,
                        backgroundColor: canSubmit ? "#218739" : "#c62828",
                        opacity: canSubmit ? 1 : 0.8,
                        cursor: canSubmit ? "pointer" : "not-allowed",
                    }}
                >
                    Submit
                </button>
                <p style={styles.status} aria-live="polite">
                    {message || (canSubmit
                        ? "Submissions are open until 6:00 PM."
                        : "Submissions are closed. They open at 6:00 AM.")}
                </p>
            </form>
        </main>
    );
}
