import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column aling-items-center hero-card bg-light w-75"></Card>
      </Container>
    </div>
  );
};

export default Hero;
