
// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import {
//   TextField,
//   Button,
//   Grid,
//   Container,
//   Card,
//   Typography,
// } from "@mui/material";

// const Login = () => {
//   const { handleSubmit, control } = useForm();

//   const onSubmit = () => {
//     console.log(); // Handle form submission here
//   };

//   return (
//     <Container
//       sx={{
//         width: "60vw",

//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",

//         maxWidth: "100%",
//        // Set the maximum height to 60vh
//         mt: 4,

//         minHeight: "100vh",
//       }}
//     >
//       <Grid container spacing={1}>

//         <Grid item xs={12} md={6} sx={{ position: "relative" }}>
//           <Card
//             sx={{ display: "flex", flexDirection: "column", height: "100%" }}
//           >
//             {/* {/ Video Component /} */}
//             <video autoPlay loop muted width="100%" style={{ flex: 1 }}>
//               <source src="150904 (540p).mp4" type="video/mp4" />
//             </video>
//           </Card>
//           <Grid
//             container
//             sx={{
//               position: "absolute",
//               bottom: "20px",
//               justifyContent: "space-around",
//               background: "rgba(255, 255, 255, 0.248)",
//               backdropFilter: "blur(2px)",
//               padding: 2,
//               width: "94%",
//               margin: "10px",
//               borderRadius: "10px",
//               alignItems: "center",
//               fontSize: "1.2rem",
//               color: "white",
//               fontWeight: "700",
//             }}
//           >
//             <Grid xs={8}>Have an account ?</Grid>
//             <Grid xs={4}>
//               <Button variant="contained" fullWidth>
//                 Registration
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Card
//             elevation={3}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               padding: "0 70px ",
//               height: "100%",
//             }}
//           >
//             {/* {/ Registration Form /} */}
//             <Typography variant="h5">Registration</Typography>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Controller
//                 name="firstName"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     label="First Name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                   />
//                 )}
//               />
//               <Controller
//                 name="lastName"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     label="Last Name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                   />
//                 )}
//               />
//               <Controller
//                 name="email"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <TextField
//                     {...field}
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                   />
//                 )}
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//               >
//                 Register
//               </Button>
//             </form>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Login;
