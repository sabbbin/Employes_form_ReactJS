import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Actionbtn from "../control/actionbtn";
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

function Popup(props) {
  const classes = useStyle();

  const { title, children, OpenPopup, setOpenPopup } = props;
  return (
    <Dialog open={OpenPopup} classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Actionbtn
            color="primary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Actionbtn>
        </div>
      </DialogTitle>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
