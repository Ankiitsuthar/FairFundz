import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye } from "lucide-react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-8 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-hover mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Typography variant="h3" className="font-bold text-foreground mb-4">
            About FairFundz
          </Typography>
          <Typography variant="body1" className="text-lg text-muted-foreground">
            Revolutionizing wage transparency and worker protection in India
          </Typography>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8 md:p-12">
              <Typography variant="h4" className="font-bold mb-4">
                Our Mission: Ensuring Fair Wages for Every Worker
              </Typography>
              <Typography variant="body1" className="text-white/90 mb-6">
                FairFundz was born from a simple belief: every worker deserves to receive their full,
                fair wage without exploitation or delays. We're building technology that makes wage
                transparency the norm, not the exception.
              </Typography>
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Typography variant="h5" className="font-bold">10,000+</Typography>
                  <Typography variant="body2" className="text-white/80">Workers Protected</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h5" className="font-bold">₹50Cr+</Typography>
                  <Typography variant="body2" className="text-white/80">Wages Processed</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h5" className="font-bold">500+</Typography>
                  <Typography variant="body2" className="text-white/80">Companies Onboard</Typography>
                </div>
              </div> */}
            </CardContent>
          </Card>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader
              title={
                <div className="flex items-center">
                  <Target className="h-6 w-6 mr-2 text-primary" />
                  <Typography variant="h6">Our Mission</Typography>
                </div>
              }
            />
            <CardContent>
              <Typography variant="body2" className="text-muted-foreground">
                To eliminate wage exploitation by creating a transparent, secure, and efficient
                platform that ensures every worker receives their rightful compensation. We believe
                technology can bridge the gap between workers and fair wages.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title={
                <div className="flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-primary" />
                  <Typography variant="h6">Our Vision</Typography>
                </div>
              }
            />
            <CardContent>
              <Typography variant="body2" className="text-muted-foreground">
                A future where wage transparency is universal, workers have complete visibility
                into their compensation, and exploitation is impossible due to technological
                safeguards and regulatory compliance.
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* The Problem We Solve */}
        <Card className="mb-12">
          <CardHeader
            title={<Typography variant="h6">The Problem We Solve</Typography>}
            subheader="Understanding the challenges in India's workforce"
          />
          <Divider />
          <CardContent>
            <Typography variant="body2" className="text-muted-foreground mb-4">
              In India's vast workforce, millions of workers face wage exploitation daily. Contractors
              often act as intermediaries, sometimes deducting portions of wages without transparency.
              Workers have little recourse and limited visibility into where their money goes.
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                <Typography variant="subtitle1" className="font-semibold text-destructive mb-2">
                  Before FairFundz
                </Typography>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Opaque wage deductions</li>
                  <li>• Delayed or missing payments</li>
                  <li>• No dispute resolution mechanism</li>
                  <li>• Limited government oversight</li>
                </ul>
              </div>
              <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                <Typography variant="subtitle1" className="font-semibold text-success mb-2">
                  With FairFundz
                </Typography>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Complete wage transparency</li>
                  <li>• Real-time payment tracking</li>
                  <li>• Built-in dispute resolution</li>
                  <li>• Automated compliance reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-accent text-accent-foreground">
          <CardContent className="p-8 text-center">
            <Typography variant="h4" className="font-bold mb-4">
              Join Us in Creating a Fair Future
            </Typography>
            <Typography variant="body1" className="mb-6 text-accent-foreground/90">
              Whether you're a worker seeking fair wages, a company wanting transparency,
              or someone who believes in our mission - we'd love to have you join us.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                component={Link}
                to="/worker-register"
                variant="contained"
                size="large"
                color="primary"
              >
                Join as Worker
              </Button>
              <Button
                component={Link}
                to="/company-register"
                variant="outlined"
                size="large"
                color="inherit"
              >
                Partner with Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
