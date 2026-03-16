export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: "48px", color: "#0B1D3A", marginBottom: "12px" }}>
        Tar Heel Lax Network
      </h1>
      <p style={{ fontSize: "18px", color: "#7BAFD4", letterSpacing: "4px", textTransform: "uppercase" as const }}>
        Coming Soon
      </p>
      <p style={{ fontSize: "14px", color: "#999", marginTop: "24px" }}>
        NC High School Boys Lacrosse
      </p>
    </div>
  );
}
```

Save the file (**Command + S**), then push:
```
git add .
git commit -m "Add coming soon page"
git push