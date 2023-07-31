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
}

const WeatherInsuranceCarousalCard: React.FC<WeatherInsuranceCardProps> = ({
  question,
  betValueYes,
  betValueNo,
}) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {question}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "green" }}>
          Yes ${betValueYes}
        </Button>
        <Button size="small" sx={{ color: "red" }}>
          No ${betValueNo}
        </Button>
      </CardActions>
    </Card>
  );
};

export default WeatherInsuranceCarousalCard;
