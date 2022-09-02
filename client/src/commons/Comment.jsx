import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Box,
  CssBaseline,
  Paper,
  Divider,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { getOne } from "../state/products";
import CommentIcon from "@mui/icons-material/Comment";
import { set } from "react-hook-form";

const Comment = () => {
  const [open, setOpen] = useState();
  const [commentReview, setCommentReview] = useState("");

  const user = useSelector((state) => state.user);
  const { _id } = useSelector((state) => state.oneProduct);
  const dispatch = useDispatch();
  const [review, setReview] = useState([]);

  const onChange = (e) => {
    setCommentReview(e.target.value);

  
  };

  const onSubmit = (data) => {
    axios
      .post(`/api/products/review/${user._id}`, {
        _id: _id,
        commentReview: commentReview,
      })
      .then((res) => dispatch(getOne(res.data)))
      .then(() => setCommentReview(""));
  };

  const handleComments = () => {
    setOpen(!open);

    axios
      .get(`/api/products/showReviews/${_id}`)
      .then((res) => setReview(res.data.reviews));
  };

  return (
    <CssBaseline>
      <Box sx={{}}>
        <Paper>
          <Box
            sx={{
              // background:"linear-gradient(220.55deg, #565656 0%, #181818 100%)",
              backgroundColor: "#fcfcfc",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              marginTop: "15px",
              marginLeft: 40,
              marginRight: 40,
              boxShadow: "10px 10px 5px 0px rgba(255,255,255, 0.45)",
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              id="message"
              label="Contale a otras personas sobre tu producto"
              name="review"
              sx={{ color: "white" }}
              
              onChange={(e) => onChange(setCommentReview(e.target.value))}
            />

            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              xs={{
                marginTop: "100px",
              }}
            >
              Enviar
            </Button>
            <Divider />
            <List
              sx={{
                p: 5,

                position: "relative",
                margin: "0 auto",
                width: "100%",
                maxWidth: 500,
                fontSize: "150px",
                bgcolor: "background.paper",
              }}
            >
              <ListItemButton onClick={handleComments}>
                <ListItemIcon>
                  <CommentIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  sx={{ margin: "0 auto" }}
                  primary="Comentarios:"
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {review.map((e) => {
                    return (
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemIcon>
                          <AccountCircleIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ fontSize: 14 }}
                          primary={e.userId}
                          secondary={e.commentReview}
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Box>
        </Paper>
      </Box>
    </CssBaseline>
  );
};

export default Comment;

/*   {review.map((e) => {
                    return (
                      <>
                        <Box
                          sx={{
                            borderRadius: "15px",
                            backgroundColor: "grey",
                            mr: 3,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <CommentOutlinedIcon fontSize="large" />
                          <Typography variant="body2" color="initial">
                            {e.userId}
                          </Typography>
                          <Box sx={{ backgroundColor: "#f5f5f5", p: 1 }}>
                            {" "}
                            <Typography variant="body" color="initial">
                              {" "}
                              {e.commentReview}
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    );
                    <Divider />
                  })}*/
