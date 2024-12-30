// import React, { useEffect, useState } from "react";
// // import List from "./List";

// const Greet = ({ name, course }) => {
// let [count,setCount] =   useState(0)
// let [userName,setUserName] = useState(name)

// // console.log(count);
// // console.log(setCount);

// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
  
// },[userName])

 
//   function increment() {
//    setCount(count+1)
//   }

//   return (
//     <div>
//       <p>{userName}</p>
//       <button onClick={()=>{setUserName("Laiba")}}>change name</button>
//       <p> count: {count}</p>
//       <button onClick={increment}>increase</button>
//     </div>
//   );
// };

// export default Greet;







// Mera code-----------------------------------------------------------------------------

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import { useState ,useEffect} from "react";
//  let login = false
// function Cards() {
//     const [data, setData] = useState([]);

//     useEffect(() =>{
//                fetch('https://api.escuelajs.co/api/v1/users')
//                .then(response => response.json())
//                .then(json => setData(json))
             
//     },[])


//   return (
//     <div>
//         {
//             data.map((user) => {
//                 return(
 

//        <Card key={user.id} sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={user.avatar}
//             alt="green iguana"
//           />

//           {(login==true?"logged in":"logged out")}
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {user.email}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//          {user.name}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//         </CardActions>
//       </Card>


                   

                    
//                 )
//             })
//         }
  
  
// </div>

//   )
// }

// export default Cards


//------------------------------------------------------------------------------------------------------------

// // import Button from "react-bootstrap/Button";
// // import Card from "react-bootstrap/Card";
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import { useState ,useEffect} from "react";
// let login = false

// function Post() {
//   let [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/users")
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   });

//   return <>{data.map((user) => {


//     return(

        

//         <Card key={user.id} sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image={user.avatar}
//             alt="green iguana"
//           />

//           {(login==true?"logged in":"logged out")}
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {user.email}
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//          {user.name}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//         </CardActions>
//       </Card>
//     //     <Card key={user.id} style={{ width: '18rem' }}>
//     //     <Card.Img variant="top" src={user.avatar} />
//     //     <Card.Body>
//     //       <Card.Title>{user.email}</Card.Title>
//     //       <Card.Text>
//     //         Some quick example text to build on the card title and make up the
//     //         bulk of the card's content.
//     //       </Card.Text>
       
//     //       <Button variant="primary">Go somewhere</Button>
//     //     </Card.Body>
//     //   </Card>


    
//     )
//   })}</>;
// }

// export default Post;





// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';

// function Cards() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.escuelajs.co/api/v1/users')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   let login = true; // Define your login logic

//   return (
//     <div>
//       {data.map((user) => (
//         <Card key={user.id} sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
//               image={user.avatar || "https://via.placeholder.com/150"}
//               alt="user avatar"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {user.email}
//               </Typography>
//               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 {user.name}
//               </Typography>
//               <Typography variant="body2">
//                 {login ? "Logged In" : "Logged Out"}
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Share
//             </Button>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default Cards;




// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import CardActions from "@mui/material/CardActions";

// const EcommerceApp = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch Products from API
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <Typography variant="h4" gutterBottom align="center">
//         E-Commerce Store
//       </Typography>
//       <Grid container spacing={3}>
//         {products.map((product) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//             <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={product.image}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Typography
//                   gutterBottom
//                   variant="h6"
//                   component="div"
//                   noWrap
//                   title={product.title}
//                 >
//                   {product.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{ color: "text.secondary", height: "40px", overflow: "hidden" }}
//                 >
//                   {product.description}
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                   ${product.price}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" variant="contained" color="primary">
//                   Buy Now
//                 </Button>
//                 <Button size="small" variant="outlined" color="secondary">
//                   Add to Cart
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default EcommerceApp;

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";

function Cards() {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(() => console.error("error in fetching product", err))
  },[])



  
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom align="center">
        E-Commerce Store
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  noWrap
                  title={product.title}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", height: "40px", overflow: "hidden" }}
                >
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Buy Now
                </Button>
                <Button size="small" variant="outlined" color="secondary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );



  

  
      }
  
  


export default Cards
