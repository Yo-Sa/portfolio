import React from 'react'
import { AppBar, Toolbar, Typography, Button , makeStyles} from "@material-ui/core";
import topimg from '../images/b.jpg'
import { Link as Scroll } from 'react-scroll'


const useStyle = makeStyles((theme) => ({
    header: {
        display: "flex",
        position: 'fixed',
        zIndex:1000,
        top: 0,
        left: 0,
        width: "100%",
        "@media screen and (max-width:768px)": {
        display: "none",
        },
    },
    appBar: {
        padding: theme.spacing(1),
        background: "#39284f",
        backgroundColor:"rgba(56, 40, 79, 0.8)",
        // color: "inherit",
        // backgroundColor:"transparent",
        // marginBottom: theme.spacing(13),
    },
    headerTitle: {
        fontSize: "34px",
        flexGrow: 1,
        marginLeft: 0
    },
}));      
export const Header = () => {
    const classes = useStyle(); 
    return (
        <div>
            <div className={classes.header}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>

                        <Typography variant="h1" className={classes.headerTitle}>
                        Yoichi's Portfolio
                        </Typography>
                        <Button color="inherit">
                            <Scroll to="profile" offset={-80}>Profile</Scroll>
                        </Button>

                        <Button color="inherit">
                            <Scroll to="skill" offset={-80}>Skills</Scroll>
                        </Button>

                        <Button color="inherit">
                            <Scroll to="work" offset={-80}>Works</Scroll>
                        </Button>

                        <Button color="inherit">
                            <Scroll to="info">Information</Scroll>
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>
            <div className="title-header">
                <div className='title-img'>
                    <img src={topimg} alt="トップ"/>
                    <p>Yoichi's Portfolio</p>
                </div>
            </div>
        </div>
    )
}