import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography, Box, CssBaseline, Avatar, styled } from "@mui/material";
import ModeCommentTwoToneIcon from '@mui/icons-material/ModeCommentTwoTone';

const Comments = () => {

    const[comment, setComment]=useState('');

    const handlerComment= (e)=>{
        e.preventDefault();
        setComment(e.target.value)
        console.log(comment)
    }

    return (
        <CssBaseline>
            <Box
                sx={{
                    paddingTop: "50px",
                    minHeight: "100vh",
                    backgroundColor: "#212223",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        // background:"linear-gradient(220.55deg, #565656 0%, #181818 100%)",
                        backgroundColor: "#fcfcfc",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 4,
                        m: 10,
                        p: 5,
                        boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
                    }}
                >
                    <Box sx={{ display: "flex" }}>
                        {" "}
                        <Typography component="h1" variant="h5">
                            <ModeCommentTwoToneIcon
                                sx={{ m: 1,  color: "#633fA4" }}
                            ></ModeCommentTwoToneIcon>{" "}
                            Comentarios
                        </Typography>
                    </Box>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        id="message"
                        label="Cuentanos tu opinión"
                        name="message"
                        //   onChange={handlerInputs}
                        sx={{ color: "white" }}
                    />

                    <Button
                        onChange={handlerComment}
                        variant="contained"
                        color="primary"
                        xs={{
                            marginTop: "100px",
                        }}
                    >
                        Enviar
                    </Button>

                </Box>
            </Box>
        </CssBaseline>
    )
}

export default Comments