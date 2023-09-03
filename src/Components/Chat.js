import React, { useState, useEffect } from "react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import "./chat.css";
import FriendRequest from "./FriendRequest";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PersonIcon from "@mui/icons-material/Person";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ChatTile from "./Chat_component/ChatTile";
import ArchiveIcon from "@mui/icons-material/Archive";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FaceIcon from "@mui/icons-material/Face";

import ChatDescription from "./Chat_component/ChatDescription";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../userauth/FireAuth";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Userinfo from "./Chat_component/Userinfo";
import Myprofile from "./Chat_component/Myprofile";
import FriendsList from "./Chat_component/FriendsList";
import Myavatar from "./Myavatar";
import { useMediaQuery } from "@material-ui/core";
import SearchList from "./Chat_component/SearchList";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "./Navbar";

function Chat({
  uid,
  setshowmyaccount,
  showmyaccount,
  id,
  setid,
  username,
  setusername,
  showfriendrequest,
  setshowfriendrequest,
  showsearchlist,
  setshowsearchlist,
  showavatar,
  setshowavatar,
  showfriends,
  setshowfriends,
  showmyprofile,
  setshowmyprofile,
  archieveview,
  setarchieveview,
  searchopen,
  setsearchopen,
  searchinput,
  setsearchinput,
  chatid,
  setchatid,
  sendrecid,
  setsendrecid,
  showchatdesc,
  setshowchatdesc,
  arraynames,
  setarraynames,
  status,
  setstatus,
  descname,
  setdescname,
  bio,
  setbio,
  isloading,
  setisloading,
  loggeduser,
  setavtrurl,
}) {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  let { hey } = useParams();
  let { det } = useParams();
  const [shownavi, setshownavi] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (isSmallScreen) {
      if (location.pathname === "/chat/userprofile") {
        setshowsearchlist(false);
        setshowavatar(false);
        setshowmyprofile(true);
        setshowfriendrequest(false);
        setarchieveview(false);
        setshowfriends(false);
        setshownavi(true);
      }
      if (location.pathname === "/chat/myfriends") {
        setshowsearchlist(false);
        setshowavatar(false);
        setshowmyprofile(false);
        setshowfriendrequest(false);
        setarchieveview(false);
        setshowfriends(true);
        setshownavi(true);
      }
      if (location.pathname === "/chat/setavatar") {
        setshowsearchlist(false);
        setshowavatar(true);
        setshowmyprofile(false);
        setshowfriendrequest(false);
        setarchieveview(false);
        setshowfriends(false);
        setshownavi(true);
      }
      if (location.pathname === "/chat/search") {
        setshowsearchlist(true);
        setshowavatar(false);
        setshowmyprofile(false);
        setshowfriendrequest(false);
        setarchieveview(false);
        setshowfriends(false);
        setshownavi(true);
      }
      if (location.pathname === "/chat") {
        setshowsearchlist(false);
        setshowavatar(false);
        setshowmyprofile(false);
        setshowfriendrequest(false);
        setarchieveview(false);
        setshowfriends(false);
        setshownavi(false);
      }
    }
  }, [location, isSmallScreen]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openarchieve = () => {
    setarchieveview(!archieveview);
    setshowmyprofile(false);
    setshowfriendrequest(false);
  };
  const handlesearchopen = () => {
    if (searchopen === null) {
      setsearchopen(true);
    } else if (searchopen === true) {
      setsearchopen(false);
    } else if (searchopen === false) {
      setsearchopen(true);
    }
  };

  const [small, setsmall] = useState(false);
  useEffect(() => {
    if (isSmallScreen) {
      if (hey !== undefined) {
        setsmall(true);
      } else {
        setshowchatdesc(false);
        setsmall(false);
      }
    } else {
      if (showchatdesc === true) setsmall(false);
    }
  }, [isSmallScreen, showchatdesc, hey]);

  // const userdatafetch =async()=>{

  // }

  const handlesearch = (e) => {
    e.preventDefault();
    setsearchinput(document.getElementById("searchinput").value);
    setshowsearchlist(true);
    setshowavatar(false);
    setshowmyprofile(false);
    setshowfriendrequest(false);
    setarchieveview(false);
    setshowfriends(false);
  };
  const handlesearchclose = () => {
    setsearchopen(false);
    setshowsearchlist(false);
    setshowavatar(false);
    setshowmyprofile(false);
    setshowfriendrequest(false);
    setarchieveview(false);
    setshowfriends(false);
  };

  const handleshowfriendlist = () => {
    setshowsearchlist(false);
    setshowavatar(false);
    setshowmyprofile(false);
    setshowfriendrequest(true);
    setarchieveview(false);
    setshowfriends(false);
  };

  const shwmyprofile = () => {
    setshowfriends(false);
    setshowsearchlist(false);

    setshowavatar(false);
    setshowmyprofile(true);
    setshowfriendrequest(false);
    setarchieveview(false);
  };
  const shwmyavatar = () => {
    setshowsearchlist(false);

    setshowfriends(false);
    setshowavatar(true);
    setshowmyprofile(false);
    setshowfriendrequest(false);
    setarchieveview(false);
  };

  const shwfriens = () => {
    setshowsearchlist(false);

    setshowavatar(false);
    setshowmyprofile(false);
    setshowfriendrequest(false);
    setarchieveview(false);
    setshowfriends(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const descriptionheader = async (id, names) => {
    let onetooneid;

    if (uid > id) {
      onetooneid = `${uid}${id}`;
    } else {
      onetooneid = `${id}${uid}`;
    }

    const docRef = doc(db, "userchats", onetooneid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    } else {
      setDoc(docRef, { messages: [] });
    }

    setshowchatdesc(true);
    setdescname(names.name);
    setbio(names.bio);
    setsendrecid(onetooneid);
    setchatid(id);
    setavtrurl(names.avatar);
  };
  useEffect(() => {
    if (hey !== undefined) {
      console.log(arraynames);
      let names = {};
      for (let i = 0; i < arraynames.length; i++) {
        if (arraynames[i].uid === hey) {
          names = arraynames[i];
          console.log(names);
          descriptionheader(hey, names);
          break;
        }
      }
    }
  }, [arraynames, descriptionheader, hey]);

  return (
    <div
      className="d-flex flex-column"
      style={{
        backgroundColor: "#1F2029",
        overflow: "",
        width: "100%",
        height: "100%",
      }}
    >
      {isSmallScreen && showchatdesc === true && (
        <div
          className="d-md-none d-flex flex-column top-sticky"
          style={{
            height: "100%",
            position: "",
            backgroundColor: "black",
            flex: 1,
            overflow: "",
          }}
        >
          <Outlet />
        </div>
      )}
      <div
        className="d-flex flex-row"
        style={{
          backgroundColor: "",
          height: showchatdesc === true && isSmallScreen ? "0" : "100%",
          overflow: "hidden",
          overflowX: "hidden",
        }}
      >
        <div
          className="d-flex flex-row"
          style={{ backgroundColor: "#1F2029", width: "100vw", height: "" }}
        >
          {/* header */}

          {small === false && (
            <div
              className="d-flex flex-column  bd-highlight"
              style={{
                height: "",
                borderWidth: "3px",
                borderColor: "#292A33",
                borderStyle: "solid",
                flex: isSmallScreen && 1,
                maxWidth: !isSmallScreen && "30vw",
                minWidth: !isSmallScreen && "25rem",
                // height: "90vh",
                // overflow: "hidden",
              }}
            >
              {/* header */}

              <div
                className="d-flex flex-column mx- position-sticky"
                style={{
                  position: "relative",
                  backgroundColor: "#1F2029",
                  borderBottom: "3px",
                  borderBottomColor: "#292A33",
                  borderBottomStyle: "solid",
                }}
              >
                <div
                  className="d-flex flex-row mt-3 mb-3"
                  style={{ backgroundColor: "#1F2029" }}
                >
                  <Box>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Avatar
                          sx={{ width: 50, height: 50 }}
                          src={loggeduser.Avatar}
                          alt="google"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          backgroundColor: "black",
                          color: "white",
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            backgroundColor: "black",
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 32,
                            width: 10,
                            height: 10,

                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          shwmyprofile();
                        }}
                      >
                        <ListItemIcon style={{ color: "whitesmoke" }}>
                          <PersonIcon fontSize="small" color="whitesmoke" />
                        </ListItemIcon>
                        {isSmallScreen && (
                          <Link
                            to="userprofile"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            My Account{" "}
                          </Link>
                        )}
                        {!isSmallScreen && "My Account"}
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          shwfriens();
                        }}
                      >
                        <ListItemIcon style={{ color: "whitesmoke" }}>
                          <HttpsOutlinedIcon
                            fontSize="small"
                            color="whitesmoke"
                          />
                        </ListItemIcon>
                        {isSmallScreen && (
                          <Link
                            to="myfriends"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            Friends{" "}
                          </Link>
                        )}
                        {!isSmallScreen && "Friends"}
                      </MenuItem>

                      <MenuItem
                        onClick={() => {
                          handleClose();
                          shwmyavatar();
                        }}
                      >
                        <ListItemIcon style={{ color: "whitesmoke" }}>
                          <FaceIcon fontSize="small" color="whitesmoke" />
                        </ListItemIcon>
                        {isSmallScreen && (
                          <Link
                            to="setavatar"
                            style={{ textDecoration: "none" }}
                          >
                            Avatar{" "}
                          </Link>
                        )}
                        {!isSmallScreen && "Avatar"}
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon style={{ color: "whitesmoke" }}>
                          <NotificationsIcon
                            fontSize="small"
                            color="whitesmoke"
                          />
                        </ListItemIcon>
                        Notification
                      </MenuItem>

                      <MenuItem
                        onClick={() => {
                          handleClose();
                          handleshowfriendlist();
                        }}
                      >
                        <ListItemIcon style={{ color: "whitesmoke" }}>
                          <Badge badgeContent={4} color="primary">
                            <Diversity1Icon
                              fontSize="small"
                              color="whitesmoke"
                            />
                          </Badge>
                        </ListItemIcon>
                        {isSmallScreen && (
                          <Link
                            to="friendrequests"
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            Friend Requests{" "}
                          </Link>
                        )}
                        {!isSmallScreen && "Friend Requests"}
                      </MenuItem>
                    </Menu>
                  </Box>

                  <div
                    class="d-flex align-items-center pl-3"
                    style={{ flex: 1, fontSize: "2rem", color: "#FFFFFF" }}
                  >
                    {searchopen !== true && <span>{username}</span>}
                  </div>

                  {searchopen === true && (
                    <div className="d-flex flex-row">
                      <div
                        classs="d-flex align-items-center"
                        style={{ fontSize: "1.3rem", color: "#FFFFFF" }}
                      >
                        <form
                          onSubmit={(e) => {
                            handlesearch(e);
                          }}
                        >
                          <input
                            id="searchinput"
                            className="animateee my-2 pb-1 pl-3"
                            type="text"
                            placeholder="search contacts"
                            style={{}}
                          />
                        </form>
                      </div>

                      <div
                        className="d-flex justify-content-center align-items-center animato"
                        style={{}}
                      >
                        {isSmallScreen && (
                          <Tooltip title="Cancel  ">
                            <Link
                              to="search"
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              <IconButton
                                onClick={() => {
                                  handlesearchclose();
                                }}
                              >
                                <MdOutlineCancel
                                  style={{ color: "#ABABAE", fontSize: "2rem" }}
                                />
                              </IconButton>{" "}
                            </Link>
                          </Tooltip>
                        )}
                        {!isSmallScreen && (
                          <Tooltip title="cancel">
                            <IconButton
                              onClick={() => {
                                handlesearchclose();
                              }}
                            >
                              <MdOutlineCancel
                                style={{ color: "#ABABAE", fontSize: "2rem" }}
                              />
                            </IconButton>
                          </Tooltip>
                        )}

                        {/* {isloading===true &&<CircularProgress color="primary" size={22}  />} */}
                      </div>
                    </div>
                  )}

                  {searchopen !== true && (
                    <div className="d-flex flex-row">
                      {/* <div classs="d-flex align-items-center" style={{  fontSize: "1.3rem", color: "#FFFFFF" }}>
                  <input className="animateee my-2 pb-1 pl-3" type="text" placeholder ="search contacts" style={{
               }}/>

                </div> */}

                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: "#1F2029" }}
                      >
                        <Tooltip title="Search Chats">
                          <IconButton
                            onClick={() => {
                              handlesearchopen();
                            }}
                          >
                            <FiSearch
                              style={{ color: "#ABABAE", fontSize: "2rem" }}
                            />
                          </IconButton>
                        </Tooltip>
                        {/* {isloading===true &&<CircularProgress color="primary" size={22}  />} */}
                      </div>
                    </div>
                  )}
                </div>

                {/* <div
                  className=""
                  style={{
                    backgroundColor: "#212121",
                    justifyItems: "center",
                    color: "#aaaaaa",
                    alignItems: "center",
                    // padding: "10px",
                    fontSize: "10px",
                  }}
                >
            
                </div> */}
              </div>

              {/* <div
                className="d-flex flex-row justify-content-around py-1 mt-1"
                style={{
                  backgroundColor: "#212121",

                  color: "black",
                }}
              >
              
               
              </div> */}
              {showsearchlist === true && (
                <div
                  className="d-flex flex-column"
                  style={{ flex: 1, backgroundColor: "", height: "100%" }}
                >
                  {isSmallScreen && <Outlet />}
                  {!isSmallScreen && (
                    <SearchList
                      searchinput={searchinput}
                      uid={uid}
                      loggeduser={loggeduser}
                    />
                  )}
                </div>
              )}

              {showmyprofile === true && (
                <div
                  className="d-flex flex-column"
                  style={{ flex: 1, backgroundColor: "", height: "100%" }}
                >
                  {isSmallScreen && <Outlet />}
                  {!isSmallScreen && (
                    <Myprofile
                      setshowmyprofile={setshowmyprofile}
                      loggeduser={loggeduser}
                    />
                  )}
                </div>
              )}
              {showavatar === true && (
                <div
                  className="d-flex flex-column"
                  style={{ flex: 1, backgroundColor: "", height: "100%" }}
                >
                  {isSmallScreen && <Outlet />}
                  {!isSmallScreen && (
                    <Myavatar
                      setshowavatar={setshowavatar}
                      loggeduser={loggeduser}
                    />
                  )}
                </div>
              )}
              {showfriends === true && (
                <div
                  className="d-flex flex-column"
                  style={{ flex: 1, backgroundColor: "", height: "100%" }}
                >
                  {isSmallScreen && <Outlet />}{" "}
                  {!isSmallScreen && (
                    <FriendsList
                      setshowfriends={setshowfriends}
                      loggeduser={loggeduser}
                    />
                  )}
                </div>
              )}

              {showfriendrequest === true && (
                <div
                  className="d-flex flex-column"
                  style={{ flex: 1, backgroundColor: "", height: "100%" }}
                >
                  {isSmallScreen && <Outlet />}{" "}
                  {!isSmallScreen && (
                    <FriendRequest
                      setshowfriendrequest={setshowfriendrequest}
                    />
                  )}
                </div>
              )}
              {showfriendrequest === false &&
                showmyprofile === false &&
                showavatar === false &&
                showfriends === false &&
                showsearchlist === false && (
                  <div className="d-flex flex-row px-4 mb-4">
                    <div className="d-flex flex-row mt-2" style={{ flex: 1 }}>
                      <div className="d-flex flex-column">
                        <div
                          className="d-flex"
                          style={{ flex: 1, color: "white", fontSize: "2rem" }}
                        >
                          <div className="d-flex">
                            Message{" "}
                            {isloading && (
                              <div className="pt-4 ">
                                <div
                                  className="bouncing-loader mt-3 pl-1"
                                  style={{ bottom: 0 }}
                                >
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {archieveview === true ? (
                          <div
                            className="d-flex mt-3 px-1 tracking-in-expand"
                            style={{
                              flex: 1,
                              color: "#595A61",
                              fontSize: "1rem",
                            }}
                          >
                            {`ARCHEVE CHAT`}
                          </div>
                        ) : (
                          <div
                            className="d-flex mt-3 px-1 tracking-in-expand"
                            style={{
                              flex: 1,
                              color: "#595A61",
                              fontSize: "1rem",
                            }}
                          >
                            {`RECENT CHAT`}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex" style={{ width: "" }}>
                      <div
                        className="d-flex flex-row hello tracking-in-expand"
                        style={{
                          transition: "width 0.7s",
                          width: "9rem",
                          justifyContent: "flex-end",
                        }}
                      >
                        <div
                          className="d-flex flex-row px-2 py-2 mt-3  hello tracking-in-expand handy"
                          onClick={() => {
                            openarchieve();
                          }}
                          style={{
                            backgroundColor: "#E3F3FF",
                            height: "max-content",
                            width: "max-content",
                            transition: "width 0.7s",
                            borderRadius: "19px",
                          }}
                        >
                          <div className="d-flex hello mr-1">
                            {archieveview === true ? (
                              <ChatOutlinedIcon size={1} />
                            ) : (
                              <ArchiveIcon size={1} />
                            )}
                          </div>

                          <div
                            className="d-flex hello tracking-in-expand"
                            style={{
                              flex: 1,
                              fontSize: "1rem",
                              width: "max-content",
                            }}
                          >
                            {archieveview === true ? `Chats` : `Archive Chats`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {archieveview === true ? (
                <div
                  className="d-flex flex-column openarchieve mostly-customized-scrollbar "
                  style={{
                    backgroundColor: "#1f2029",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "100%",
                  }}
                >
                  {arraynames.map((names, i) => (
                    <div
                      className=""
                      tabIndex={i}
                      id={names.uid}
                      onFocus={(e) => {
                        descriptionheader(e.target.id, names);
                      }}
                      style={{
                        backgroundColor: "#1F2029",
                        paddingTop: isSmallScreen && "1px",
                        marginBottom: isSmallScreen && "5px",
                      }}
                      key={i}
                    >
                      <ChatTile
                        name={names.name}
                        key={i}
                        Avatar={names.avatar}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="d-flex closearchieve"
                  id=""
                  style={{ backgroundColor: "#1f2029" }}
                ></div>
              )}

              {showfriendrequest === false &&
                showmyprofile === false &&
                showavatar === false &&
                showfriends === false &&
                showsearchlist === false && (
                  <div
                    className={
                      archieveview === true
                        ? "d-flex flex-column pt-2 px-2 mostly-customized-scrollbar closechat"
                        : "d-flex flex-column pt-2 px-2 mostly-customized-scrollbar openchat"
                    }
                    style={{
                      backgroundColor: "",
                      position: "relative",

                      overflowY: "scroll",
                    }}
                  >
                    {arraynames.map((names, i) => (
                      <div
                        className=""
                        tabIndex={i * 19732}
                        id={names.uid}
                        onClick={(e) => {
                          descriptionheader(names.uid, names);
                        }}
                        style={{
                          backgroundColor: "#1F2029",
                          paddingTop: isSmallScreen && "1px",
                          marginBottom: isSmallScreen && "5px",
                        }}
                        key={i * 107}
                      >
                        <Link
                          to={`${names.uid}`}
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <ChatTile
                            name={names.name}
                            key={i}
                            avatar={names.avatar}
                          />{" "}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}
          <div
            className="d-none d-md-flex flex-column mostly-customized-scrollbar"
            style={{
              backgroundColor: "black",
              flex: 1,

              contain: "strict",
            }}
          >
            {/* large screen chat desc */}
            {showchatdesc === true && <Outlet />}
            {/* header */}
          </div>
          {showmyaccount === true ? (
            <div
              className="d-none d-lg-block userprofile scale"
              style={{
                borderWidth: "1px",
                borderColor: "#292A33",
                borderStyle: "solid",
              }}
            >
              <div
                className="d-flex flex-column scale"
                style={{ backgroundColor: "#1F2029", overflow: "hidden" }}
              >
                <Userinfo setshowmyaccount={setshowmyaccount} />
              </div>
            </div>
          ) : (
            showmyaccount === false && (
              <div
                className="d-none d-lg-block userprofile closscale"
                style={{ contain: "strict" }}
              >
                <div
                  className="d-flex flex-column closscale"
                  style={{ backgroundColor: "#1F2029", contain: "strict" }}
                >
                  <Userinfo setshowmyaccount={setshowmyaccount} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
