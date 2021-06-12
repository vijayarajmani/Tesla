import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-s.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
          backgroundImage="model-s.jpg"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-3.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
          backgroundImage="model-3.jpg"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-x.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-y.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
        />
        <Section
          title="Solar Roof"
          description="Order Online for Touchless Delivery"
          backgroundImage="solar-roof.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
        />
        <Section
          title="Solar Panels"
          description="Order Online for Touchless Delivery"
          backgroundImage="solar-panel.jpg"
          leftButtonText="Custom order"
          rightButtonText="Existing inventory"
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
