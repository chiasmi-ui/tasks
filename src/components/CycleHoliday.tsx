import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year's Day"
    | "Easter"
    | "Independence Day"
    | "Halloween"
    | "Christmas";

const HOLIDAY_EMOJI: Record<Holiday, string> = {
    "New Year's Day": "🎆",
    Easter: "🐰",
    "Independence Day": "🎇",
    Halloween: "🎃",
    Christmas: "🎄"
};

const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Independence Day",
    "Independence Day": "New Year's Day",
    "New Year's Day": "Christmas"
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    "New Year's Day": "Easter",
    Easter: "Independence Day",
    "Independence Day": "Halloween",
    Halloween: "Christmas",
    Christmas: "New Year's Day"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    return (
        <div>
            <div>Holiday: {HOLIDAY_EMOJI[holiday]}</div>
            <Button onClick={() => {setHoliday(ALPHABET_ORDER[holiday])}}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => {setHoliday(YEAR_ORDER[holiday])}}>
                Advance by Year
            </Button>
        </div>
    );
}
