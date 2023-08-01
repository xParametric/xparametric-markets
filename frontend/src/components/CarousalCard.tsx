import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

interface WeatherInsuranceCardProps {
  question: string;
  betValueYes: number;
  betValueNo: number;
  imageUrl: string;
}

const WeatherInsuranceCarousalCard: React.FC<WeatherInsuranceCardProps> = ({
  question,
  betValueYes,
  betValueNo,
  imageUrl,
}) => {
  return (
    <Card sx={{ height: 330, width: 450, my: 2 }}>
      <CardMedia sx={{ height: 170 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {question}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          sx={{ border: 1, borderColor: "green" }}
        >
          Yes ${betValueYes}
        </Button>
        <Button
          size="small"
          variant="outlined"
          sx={{ border: 1, borderColor: "red" }}
        >
          No ${betValueNo}
        </Button>
      </CardActions>
    </Card>
  );
};

export default WeatherInsuranceCarousalCard;
