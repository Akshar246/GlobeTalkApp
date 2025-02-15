import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Avatar, IconButton, Stack } from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useStrongPassword } from '6pp';
import {useInputValidation} from "6pp"
import { userNameValidator } from "../utils/Validators";
import { useFileHandler } from "6pp";
import {VisuallyHiddenInput} from "../components/styles/StyledComponent"


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation ("");
    const username = useInputValidation("", userNameValidator);
    const password = useStrongPassword();

    const avatar = useFileHandler("single");

    const handleLogin = (e) => {
        e.preventDefault();
    };

    const handleSignUp = (e) => {
        e.preventDefault();
    };

    return (
        <div
        style={{
            backgroundColor:"linear-gradient(rgba(200,200,200,200,0.5), rgba(120,110,220,0.5))",
        }}
        >
        <Container component="main" maxWidth="xs" sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Paper elevation={6} sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                padding: 3
            }}>
                {isLogin ? (
                    <>
                        <Typography component="h1" variant="h5">Login</Typography>
                        <form 
                  style={{
                    width: '100%',
                    marginTop: 1,
                  }}
                  onSubmit={handleLogin}
                  >
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant="outlined"
                                autoFocus
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                margin="normal"
                                variant="outlined"
                                type="password"
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color="primary"
                            >
                                Login
                            </Button>
                            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>Or</Typography>
                            <Button
                                fullWidth
                                variant="text"
                                sx={{ mt: 2 }}
                                onClick={toggleLogin}
                            >
                                Sign Up Instead
                            </Button>
                        </form>
                    </>
                ) : (
                  <>
                  <Typography component="h1" variant="h5">Sign Up</Typography>
                  <form 
                  style={{
                    width: '100%',
                    marginTop: 1,
                  }}
                  onSubmit={handleSignUp}
                  >

                    <Stack position={"relative"} width = {"10rem"} margin = {"auto"} >
                      <Avatar sx = {{
                        width: "10rem",
                        height: "10rem",
                        objectFit: "contain"
                      }}
                      src={avatar.preview}
                      />

                        {
                        avatar.error && (
                          <Typography
                           m={"1rem auto"}
                           width={"fit-content"}
                           display={"block"}
                            color="error" 
                            variant="caption">{avatar.error}</Typography>
                        )
                      }

                  <IconButton sx={{
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      bgcolor: "rgba(255, 255, 255, 0.5)",
                      ":hover": {
                        bgcolor: "rgba(255, 255, 255, 0.8)"
                      }
                    }}
                    component="label">
                      <>
                      <CameraAltIcon/>
                        <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                      </>
                      </IconButton>
                    </Stack>

                  <TextField
                          required
                          fullWidth
                          autoFocus
                          label="Name"
                          margin="normal"
                          variant="outlined"
                          value={name.value}
                          onChange={name.changeHandler}
                      />

                  <TextField
                          required
                          fullWidth
                          label="Bio"
                          margin="normal"
                          variant="outlined"
                          value={bio.value}
                          onChange={bio.changeHandler}
                      />

                      <TextField
                          required
                          fullWidth
                          label="Username"
                          margin="normal"
                          variant="outlined"
                          value={username.value}
                          onChange={username.changeHandler}
                      />

                      {
                        username.error && (
                          <Typography color="error" variant="caption">{username.error}</Typography>
                        )
                      }
                      <TextField
                          required
                          fullWidth
                          label="Password"
                          margin="normal"
                          variant="outlined"
                          type="password"
                          value={password.value}
                          onChange={password.changeHandler}
                          
                      />
                      {
                        password.error && (
                          <Typography color="error" variant="caption">{password.error}</Typography>
                        )
                      }
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          color="primary"
                      >
                          Sign Up
                      </Button>
                      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>Or</Typography>
                      <Button
                          fullWidth
                          variant="text"
                          sx={{ mt: 2 }}
                          onClick={toggleLogin}
                      >
                          Login Instead
                      </Button>
                  </form>
              </>

                )}
            </Paper>
        </Container>
        </div>
    );
};

export default Login;
