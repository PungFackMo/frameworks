//components/EditCar.js

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Stack, TextField } from "@mui/material"
import { useState } from "react";
import { SERVER_URL } from './constants';
import SettingsIcon from '@mui/icons-material/Settings';
import Transition from "./DownSlide";

function EditCar({fetchCars,data}){
    const[open,setOpen]=useState(false)
    const [car, setCar] = useState({
        brand:"",
        model:"",
        color:"",
        year:"",
        price:""
    })
    const handleClickOpen=()=>{
        // console.log(data)
        setCar({
            brand:data.row.brand,
            model:data.row.model,
            color:data.row.color,
            year:data.row.year,
            price:data.row.price,
        })
        setOpen(true)
    }
    //업데이트 창 닫기
    const handleClose=()=>{
        setOpen(false)
    }

    //업데이트
    const handleChange=(event)=>{
        setCar({...car,[event.target.name]:event.target.value})
    }

    //자동차를 업데이트하고 모달 폼을 닫음
    const handleSave=()=>{
        // console.log(car)
        updateCar(data.id)
        handleClose()
    }

    //자동차 업데이트
    const updateCar=(link)=>{
        fetch(link,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(car)
            }
        )
        .then(response=>{
            if(response.ok){
                fetchCars();
            }else{
                alert("Something went wrong!")
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <IconButton onClick={handleClickOpen} variant="contained">
                <SettingsIcon 
                    color="primary" 
                    fontSize="large"
                />
            </IconButton>
            {/* <Button onClick={handleClickOpen} variant="contained">Edit</Button> */}
            <Dialog 
                open={open} 
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1} pl={5} pr={5}>
                            <TextField
                                label="Brand"
                                name="brand"
                                variant="standard"
                                value={car.brand}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Model"
                                name="model"
                                variant="standard"
                                value={car.model}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Color"
                                name="color"
                                variant="standard"
                                value={car.color}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Year"
                                name="year"
                                variant="standard"
                                value={car.year}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Price"
                                name="price"
                                variant="standard"
                                value={car.price}
                                onChange={handleChange}
                            />
                        </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave} variant="contained">Edit</Button>
                    <Button onClick={handleClose} variant="contained">Cancle</Button>
                </DialogActions>
            </Dialog>   
        </div>
    )
}

export default EditCar