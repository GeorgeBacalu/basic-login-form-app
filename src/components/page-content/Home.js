import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../ui/Button";
import Card from "../ui/Card";
import classes from "./Home.module.css";

const Home = props => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
