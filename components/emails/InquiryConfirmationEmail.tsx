import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Link,
} from '@react-email/components';
import * as React from 'react';

interface InquiryConfirmationEmailProps {
    name: string;
    journeyName?: string;
    travelDate: string;
    travelers: string;
    style?: string;
    duration?: string;
    budget?: string;
    interests?: string[];
    accommodation?: string[];
    mustVisit?: string;
}

export default function InquiryConfirmationEmail({
    name,
    journeyName,
    travelDate,
    travelers,
    style,
    duration,
    budget,
    interests,
    accommodation,
    mustVisit,
}: InquiryConfirmationEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>We received your inquiry for Unseen Lanka</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Inquiry Received</Heading>
                    <Text style={text}>Hi {name},</Text>
                    <Text style={text}>
                        Thank you for choosing Unseen Lanka. We have received your request and our Experience Architects are already reviewing your preferences to craft the perfect itinerary for you.
                    </Text>

                    <Section style={detailsContainer}>
                        <Heading style={h2}>Your Request Details</Heading>
                        {journeyName && (
                            <Text style={detailRow}>
                                <strong>Journey:</strong> {journeyName}
                            </Text>
                        )}
                        <Text style={detailRow}>
                            <strong>Travel Month:</strong> {travelDate}
                        </Text>
                        {duration && (
                            <Text style={detailRow}>
                                <strong>Duration:</strong> {duration} Days
                            </Text>
                        )}
                        <Text style={detailRow}>
                            <strong>Travelers:</strong> {travelers}
                        </Text>
                        {budget && (
                            <Text style={detailRow}>
                                <strong>Budget:</strong> {budget}
                            </Text>
                        )}
                        {style && (
                            <Text style={detailRow}>
                                <strong>Travel Style:</strong> {style}
                            </Text>
                        )}
                        {interests && interests.length > 0 && (
                            <Text style={detailRow}>
                                <strong>Interests:</strong> {interests.join(', ')}
                            </Text>
                        )}
                        {accommodation && accommodation.length > 0 && (
                            <Text style={detailRow}>
                                <strong>Accommodation:</strong> {accommodation.join(', ')}
                            </Text>
                        )}
                        {mustVisit && (
                            <Text style={detailRow}>
                                <strong>Must Visit:</strong> {mustVisit}
                            </Text>
                        )}
                    </Section>

                    <Hr style={hr} />

                    <Section style={paymentContainer}>
                        <Heading style={h2}>Advance Payment Information</Heading>
                        <Text style={text}>
                            To secure your booking process and initiate the detailed planning phase, an advance payment is required. Please transfer the advance amount to the following account:
                        </Text>
                        <div style={bankDetails}>
                            <Text style={paymentText}><strong>Bank Name:</strong> [Bank Name]</Text>
                            <Text style={paymentText}><strong>Account Name:</strong> Unseen Lanka Pvt Ltd</Text>
                            <Text style={paymentText}><strong>Account Number:</strong> [Account Number]</Text>
                            <Text style={paymentText}><strong>Branch:</strong> [Branch Name]</Text>
                            <Text style={paymentText}><strong>Swift Code:</strong> [Swift Code]</Text>
                        </div>
                        <Text style={text}>
                            Please send a screenshot of the payment confirmation to our WhatsApp or reply to this email.
                        </Text>
                        <Link href="https://wa.me/94770000000" style={button}>
                            Send Payment Proof via WhatsApp
                        </Link>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        Unseen Lanka - Sri Lanka's Premier Experience Architects
                        <br />
                        <a href="https://unseenlanka.com" style={link}>www.unseenlanka.com</a>
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#f6f3eb',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '40px 20px',
    borderRadius: '8px',
    maxWidth: '600px',
};

const h1 = {
    color: '#1c1917',
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center' as const,
    marginBottom: '30px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
};

const h2 = {
    color: '#44403c',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
};

const text = {
    color: '#57534e',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
};

const detailsContainer = {
    backgroundColor: '#fafaf9',
    padding: '20px',
    borderRadius: '6px',
    marginBottom: '30px',
};

const detailRow = {
    ...text,
    marginBottom: '10px',
    margin: '5px 0',
};

const paymentContainer = {
    marginBottom: '30px',
};

const bankDetails = {
    backgroundColor: '#f0fdf4', // Light green background for money/payment context or just standard grey
    border: '1px solid #dcfce7',
    padding: '20px',
    borderRadius: '6px',
    marginTop: '15px',
    marginBottom: '20px',
};

const paymentText = {
    ...text,
    marginBottom: '5px',
    fontSize: '15px',
};

const hr = {
    borderColor: '#e7e5e4',
    margin: '30px 0',
};

const button = {
    backgroundColor: '#1c1917',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block',
    textAlign: 'center' as const,
};

const footer = {
    color: '#a8a29e',
    fontSize: '12px',
    textAlign: 'center' as const,
    marginTop: '30px',
};

const link = {
    color: '#a8a29e',
    textDecoration: 'underline',
};
