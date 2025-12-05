import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { logout } from "@/store/auth/authSlice";
import { client } from "@/supabase/client";


const stats = [
  { label: "Open shipments", value: "24", delta: "+3 this week" },
  { label: "On‑time delivery", value: "96%", delta: "2% above SLA" },
  { label: "Pending approvals", value: "4", delta: "Review today" },
];

const upcomingStops = [
  { route: "MTY → CDMX", eta: "Today, 4:10 PM", status: "On track" },
  { route: "GDL → QRO", eta: "Tomorrow, 9:30 AM", status: "Delay risk: weather" },
  { route: "TIJ → SJD", eta: "Fri, 11:15 AM", status: "Scheduled" },
];

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Shipping tracker", path: "/shipping-tracker" },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await client.auth.signOut();
      if (error) {
        console.error("Supabase signOut error:", error.message);
        alert("No se pudo cerrar sesión. Intenta de nuevo.");
        return;
      }
    } catch (err) {
      console.error("Unexpected logout error:", err);
      alert("No se pudo cerrar sesión. Intenta de nuevo.");
      return;
    }

    dispatch(logout());
    navigate("/auth/login");
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-secondary via-background to-white/70 text-foreground">
      <nav className="border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold shadow-sm">
              M
            </div>
            <div>

              <p className="text-lg font-semibold leading-tight">MucaApp</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);
              return (
                <Button
                  key={item.path}
                  variant={active ? "secondary" : "ghost"}
                  className="px-3"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className="h-0.5 w-full rounded bg-foreground" />
              <span className="h-0.5 w-full rounded bg-foreground" />
              <span className="h-0.5 w-full rounded bg-foreground" />
            </div>
          </Button>
        </div>

        {mobileOpen && (
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4 md:hidden">
            {navItems.map((item) => {
              const active =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);
              return (
                <Button
                  key={item.path}
                  variant={active ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    navigate(item.path);
                    setMobileOpen(false);
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button
              variant="outline"
              className="justify-start"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        )}
      </nav>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Operations
            </p>
            <h1 className="text-3xl font-semibold leading-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor today&apos;s shipments, unblock approvals, and jump to tracking.
            </p>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <Card key={item.label} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">
                  {item.label}
                </CardTitle>
                <CardAction>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.delta}
                  </span>
                </CardAction>
                <CardTitle className="text-3xl">{item.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Card className="border-0 bg-card shadow-md shadow-primary/10">
            <CardHeader className="border-b">
              <CardTitle>Upcoming stops</CardTitle>
              <CardDescription>Priority legs and their latest ETAs.</CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {upcomingStops.map((stop) => (
                <div
                  key={stop.route}
                  className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{stop.route}</p>
                    <p className="text-sm text-muted-foreground">{stop.eta}</p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {stop.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Quick actions</CardTitle>
              <CardDescription>Keep work flowing without switching screens.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button onClick={() => navigate("/shipping-tracker")} className="justify-start">
                Track shipments
              </Button>
              <Button onClick={() => navigate("/auth/login")} variant="secondary" className="justify-start">
                Create booking
              </Button>
              <Button variant="ghost" className="justify-start">
                Export daily report
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
