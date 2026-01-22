import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  parentName: string;
  childCount: number;
}

export const WelcomeParentEmail = ({ parentName, childCount }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the Dreambox Academy Family!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to Dreambox, {parentName}!</Heading>
        <Text style={text}>
          Thank you for enrolling {childCount > 1 ? `${childCount} children` : "your child"} in our Academy. 
          We are thrilled to have you join our global community of future tech leaders.
        </Text>
        <Section style={card}>
          <Text style={cardText}>
            **What happens next?**
            <br />
            1. Our academic team will review your enrollment details.
            <br />
            2. You will receive a separate email to schedule your orientation call.
            <br />
            3. Access to the student dashboard will be granted within 24 hours.
          </Text>
        </Section>
        <Link href="https://dreambox-academy.com/dashboard" style={button}>
          Go to Dashboard
        </Link>
        <Text style={footer}>
          Dreambox Academy • Lagos • Toronto • London
        </Text>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = { backgroundColor: "#f6f9fc", fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif' };
const container = { backgroundColor: "#ffffff", margin: "0 auto", padding: "40px 20px" };
const h1 = { color: "#6347D1", fontSize: "24px", fontWeight: "bold", textAlign: "center" as const };
const text = { color: "#525f7f", fontSize: "16px", lineHeight: "24px", textAlign: "left" as const };
const card = { background: "#f4f4f4", borderRadius: "12px", padding: "20px", margin: "20px 0" };
const cardText = { color: "#333", fontSize: "14px", lineHeight: "22px" };
const button = { backgroundColor: "#6347D1", borderRadius: "8px", color: "#fff", fontSize: "16px", fontWeight: "bold", textDecoration: "none", textAlign: "center" as const, display: "block", padding: "12px" };
const footer = { color: "#8898aa", fontSize: "12px", marginTop: "40px", textAlign: "center" as const };