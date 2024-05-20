import { Title } from "@mantine/core";

export default function settingsPage() {
    return (
        <>
        <Title order={1} mb={4}>Settings</Title>
        <p>
            This is the settings page. This page is only accessible to logged in users.
        </p>
        </>
    );
    }