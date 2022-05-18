import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Category = () => {
    return ( 
        <Card sx={{ maxWidth: 100, maxHeight:400 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    
                    image="https://cdnprod.mafretailproxy.com/sys-master-root/h60/h9e/10066911100958/362476_main.jpg_1700Wx1700H"
                    alt="Lamar Milk"
                />
                <CardContent>
                    <Typography  style={{fontFamily:'Poppins'}} gutterBottom variant="h5" component="div">
                        Lamar Milk
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
     );
}
 
export default Category;