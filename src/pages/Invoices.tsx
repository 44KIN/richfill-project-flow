import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const invoices = [
  {
    id: "INV-001",
    project: "E-commerce Website Redesign",
    amount: "₦250,400",
    date: "Nov 1, 2025",
    dueDate: "Nov 15, 2025",
    status: "paid",
  },
  {
    id: "INV-002",
    project: "Mobile App Development",
    amount: "₦185,200",
    date: "Nov 15, 2025",
    dueDate: "Nov 30, 2025",
    status: "paid",
  },
  {
    id: "INV-003",
    project: "E-commerce Website Redesign",
    amount: "₦123,600",
    date: "Dec 1, 2025",
    dueDate: "Dec 15, 2025",
    status: "pending",
  },
  {
    id: "INV-004",
    project: "SEO Optimization",
    amount: "₦91,800",
    date: "Nov 30, 2025",
    dueDate: "Dec 14, 2025",
    status: "paid",
  },
];

const Invoices = () => {
  const totalPaid = "₦615,400";
  const totalPending = "123,600";
  const nextPayment = "Dec 15, 2025";

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Invoices & Payments</h1>
          <p className="text-muted-foreground mt-2">View and manage your project invoices.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-base font-medium">Total Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-success">{totalPaid}</p>
              <p className="text-sm text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-base font-medium">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-warning">{totalPending}</p>
              <p className="text-sm text-muted-foreground mt-1">Due soon</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-base font-medium">Next Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-card-foreground">{nextPayment}</p>
              <p className="text-sm text-muted-foreground mt-1">Invoice #003</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Invoice History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-card-foreground">{invoice.id}</p>
                      <span
                        className={`status-badge ${
                          invoice.status === "paid" ? "status-completed" : "status-pending"
                        }`}
                      >
                        {invoice.status === "paid" ? "Paid" : "Pending"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{invoice.project}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Issued: {invoice.date} · Due: {invoice.dueDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-xl font-bold text-card-foreground">{invoice.amount}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-gradient-primary">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Payment Integration Coming Soon
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              We're working on integrating secure payment gateways for seamless transactions.
            </p>
            <Button className="bg-accent text-accent-foreground hover:bg-accent-muted">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
