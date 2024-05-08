import React from "react";
import { Box } from '@mui/material';
import Sidebar from '@/components/Sidebar'; // Import Sidebar component

const Budget = () => {
    return (
        <Box display="flex" width="100%" height="100%">
            {/* Render the Sidebar component */}
            <Sidebar />
            {/* Main content of the Budget page */}
            <Box flexGrow={1}>
                {/* Add your Budget page content here */}
            </Box>
        </Box>
    );
}

export default Budget;
