import {
  Monitor,
  Shield,
  Cloud,
  Settings,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  Wifi,
} from "lucide-react";

import slLogo from "../assets/logo (1).png";

// Re-creating shadcn/ui components for a self-contained example within HomePage.jsx
// In a real project with a proper build setup, these would be imported from your components/ui directory.

// Button component
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card components
const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children, ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ className = "", children, ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Input component
const Input = ({ className = "", type = "text", ...props }) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Textarea component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Link component (simple anchor tag for internal navigation)
const Link = ({ href, children, className = "", ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

// HomePage component
export default function HomePage() {
  // Export HomePage directly
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2 ">
            <div className="bg-muted border rounded-full px-4 py-2">
              <img src={slLogo} alt="logo" className="w-[30px]" />
            </div>
            <span className="text-md font-medium hover:text-primary transition-colors">
              Soft Link Myanmar
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter  md:text-4xl lg:text-6xl/none mb-5">
                  Complete IT Solutions for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Empowering businesses with cutting-edge technology solutions.
                  From cloud infrastructure to cybersecurity, we provide
                  comprehensive IT services that drive growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter  md:text-4xl lg:text-6xl/none mb-5">
                  Our IT Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive range of IT services designed to meet
                  your business needs and drive digital transformation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 md:grid-cols-2 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader className="items-center text-center">
                  <Cloud className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Cloud Solutions</CardTitle>
                  <CardDescription>
                    Scalable cloud infrastructure and migration services to
                    modernize your business operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cloud Migration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      AWS/Azure Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Backup Solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="items-center text-center">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Cybersecurity</CardTitle>
                  <CardDescription>
                    Comprehensive security solutions to protect your business
                    from cyber threats and data breaches.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Security Audits
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Firewall Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Data Protection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="items-center text-center">
                  <Server className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Infrastructure</CardTitle>
                  <CardDescription>
                    Robust IT infrastructure setup and management to ensure
                    optimal performance and reliability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Server Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Network Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      24/7 Monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="items-center text-center">
                  <Database className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>
                    Efficient data storage, backup, and recovery solutions to
                    keep your business data secure and accessible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Database Design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Data Recovery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Analytics Setup
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="items-center text-center">
                  <Settings className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Software Solutions</CardTitle>
                  <CardDescription>
                    Developing  software and mobile applications tailored
                    to your business needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Web Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Mobile App Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Backend Systems
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader className="items-center text-center">
                  <Wifi className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Network Solutions</CardTitle>
                  <CardDescription>
                    Reliable network infrastructure and connectivity solutions
                    for seamless business operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      WiFi Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      VPN Configuration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Network Security
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 mb-5">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl mb-5">
                    About Soft Link Myanmar
                  </h2>
                  <p className=" text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over a decade of experience in the IT industry, Soft
                    Link Myanmar has been at the forefront of digital
                    transformation, helping businesses leverage technology to
                    achieve their goals.
                  </p>
                </div>
                <div className="grid gap-4 grid-cols-2 text-center place-items-center ">
                  <div className="flex items-center space-x-2 ">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">
                      500+ Happy Clients
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">
                      Certified Experts
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">
                      Support Available
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter  md:text-4xl lg:text-6xl/none mb-5">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your business with our IT solutions?
                  Contact us today for a free consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        info@softlink.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-muted-foreground">
                        123 Tech Street, Digital City, DC 12345
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency Support Only</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium text-left block"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium text-left block"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-left block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-left block"
                    >
                      Company
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-left block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your IT needs..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <div className="mt-2 border-t  h-[45px] flex items-center justify-center text-center  bg-muted">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Soft Link Myanmar. All rights reserved.
        </p>
      </div>

      {/* Footer */}
      {/* <footer className="w-full py-6 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Monitor className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Soft Link Myanmar</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for comprehensive IT solutions and digital transformation.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cloud Solutions</li>
                <li>Cybersecurity</li>
                <li>IT Infrastructure</li>
                <li>Data Management</li>
                <li>Custom Software Solutions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Case Studies</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+1 (555) 123-4567</li>
                <li>info@softlink.com</li>
                <li>123 Tech Street</li>
                <li>Digital City, DC 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Soft Link Myanmar. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
