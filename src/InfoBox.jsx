import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    // More reliable image URLs
    const HOT_URL = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";
    const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";
    const RAIN_URL = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";
    
    // Determine weather condition
    const getWeatherCondition = () => {
        if (info.humidity > 80) {
            return 'rain';
        } else if (info.temp > 15) {
            return 'hot';
        } else {
            return 'cold';
        }
    };
    
    // Get appropriate image URL
    const getWeatherImage = () => {
        const condition = getWeatherCondition();
        switch(condition) {
            case 'rain': return RAIN_URL;
            case 'hot': return HOT_URL;
            case 'cold': return COLD_URL;
            default: return HOT_URL;
        }
    };
    
    // Get weather icon
    const getWeatherIcon = () => {
        const condition = getWeatherCondition();
        switch(condition) {
            case 'rain': return <ThunderstormIcon/>;
            case 'hot': return <SunnyIcon/>;
            case 'cold': return <AcUnitIcon/>;
            default: return <SunnyIcon/>;
        }
    };
    
    const weatherCondition = getWeatherCondition();
    
    return (
        <div className={`InfoBox weather-${weatherCondition}`}>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getWeatherImage()}
                        title={`${info.city} weather`}
                        onError={(e) => {
                            // If image fails to load, remove the image and rely on CSS gradient
                            e.target.style.backgroundImage = 'none';
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}%</p>
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