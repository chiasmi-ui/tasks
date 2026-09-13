import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return <div>
        <Button
                disabled={inProgress || attempts === 0}
                onClick={() => {
                    setInProgress(true);
                    setAttempts(attempts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={() => setInProgress(false)}>
                Stop Quiz
            </Button>
            <Button disabled={inProgress} onClick={() => setAttempts(attempts + 1)}>
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </div>;
}
