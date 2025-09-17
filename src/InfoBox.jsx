import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const IMG_URl="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
     
    const HOT_URL="https://images.unsplash.com/photo-1707396171816-fb12f0ecdec3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://plus.unsplash.com/premium_photo-1731830999573-d75ae9668b3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGRheSUyMGVtb2ppfGVufDB8fDB8fHww"
    const RAIN_URL="https://images.unsplash.com/photo-1705077564892-4d0560b1f4a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMGRheSUyMGVtb2ppfGVufDB8fDB8fHww"
    
    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/>  : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The Weather can be described as <i><b>{info.weather}</b></i> and Feels Like = {info.feelsLike}&deg;C</p>
           
            
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}