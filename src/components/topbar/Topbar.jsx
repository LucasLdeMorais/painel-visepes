import React from "react";
import "./topbar.css";
import { Menu } from "@mui/icons-material";
import { 
  AppBar,
  IconButton, 
  Toolbar,
  Typography
} from "@mui/material";

const Topbar = (props) => {
  return (
    <AppBar position="fixed" open={props.aberto}>
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton onClick={(e) => props.abreGaveta(e)}>
          <Menu style={{ color: 'white' }}/>
        </IconButton>
        <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              style={{ marginLeft: '10px' }}
            >
              Painel VisEPES
            </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Topbar;