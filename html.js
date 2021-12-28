
const htmlTep = (data, num) =>{

let hml = data.map(item => {

    return `

 
    <tr>
    <td style=${ "font-size:18px;font-weight:600;margin-bottom:9px; margin-left:5px;" } >${item.title} </td>
    <td style=${ "font-size:18px;font-weight:600;margin-bottom:9px; margin-left:5px;" } >${item.description} </td>
    <td style=${ "font-size:18px;font-weight:600;margin-bottom:9px; margin-left:5px;" }  > &#x20A6;  ${item.price} </td>
    <td style=${ "font-size:18px;font-weight:600; margin-bottom:9px; margin-left:5px; " }  > ${item.color} </td>
    <td style=${ "font-size:18px;font-weight:600; margin-bottom:9px; margin-left:5px;" }  > <img src=${item.image} style=${"width:70px; height:70px; padding:10px; border-radius:19px;" } /> </td>
    <td style=${ "font-size:18px;font-weight:600;margin-bottom:9px; margin-left:5px;" }  >  ${item.total} </td>

    </tr>
    `
})

return `
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="assets/img/favi.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#fff" />
 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
  </head>

  <body style=${"background:#fff; padding:5px; " } >
        <h3 style=${"color:#211198; " } > New Order </h3>
        <h3 > Reference: ${num} </h3>
   
    <table style="width:100%; border:1px solid #848484;">
    <thead >
    <tr>
     
      <th>Product Name</th>
      <th>Description </th>
      <th>Price  </th>
      <th>Color </th>
      <th>Image </th>
      <th>Total </th>
    </tr>
  </thead  >
      <tbody>
      ${hml}
      </tbody>  
    </table>

  </body>
</html>
`

}



const contactTep = (data) =>{

    
    
    return `
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="assets/img/favi.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
     
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        
      </head>
    
      <body style=${"background:#fff; padding:5px; " } >
            <h3 style=${"color:#211198; " } > New Client Feedback </h3>
            
            <div style=${"background:#f5f5f5; border:1px solid #f3f4f4; border-radius:8px; padding:10px; " } >
            <div style=${"margin-top:10px; " }  >
            <h5 >First Name : ${data?.firstname} </h5>
            <h5 style=${"margin-left:2px;" } >Last Name : ${data?.lastname} </h5>
            </div>
            <div style=${"margin-top:10px; " }  >
            <h5>Email : ${data?.email} </h5>
            <h5 style=${"margin-left:2px; " } >Phone Number : ${data?.phone} </h5>
            </div>
            <div style=${"margin-top:2px; " }    >
            <h5> Message </h5>
            <p style=${"font-weight:600; font-size:17px; "}> ${data?.message} </p>
            </div>
            </div>
    
      </body>
    </html>
    `
    
    }



module.exports = { htmlTep , contactTep }