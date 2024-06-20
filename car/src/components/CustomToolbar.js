//components/CustomToolbar.js

import { useState, useEffect } from "react"
import { SERVER_URL } from "./constants"
import { GridToolbarContainer, GridToolbarExport, gridClasses } from "@mui/x-data-grid"
import { Snackbar } from "@mui/material"
import AddCar from "./AddCar"
import EditCar from "./EditCar"

function CustomToolbar(){
    return(
        <GridToolbarContainer className={gridClasses.toolbarContainer} >
            <GridToolbarExport />
        </GridToolbarContainer>
    )
}

export default CustomToolbar