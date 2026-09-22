type Props = { title: string; tag: string };

export function OgCard({ title, tag }: Props) {
  const pixels = Array.from({ length: 48 }, (_, i) => ({
    orange: (i * 37 + 11) % 10 < 4,
  }));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101010",
        padding: 72,
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 11,
            background: "#ff5c0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 30,
            fontWeight: 800,
          }}
        >
          t
        </div>
        <div
          style={{
            color: "#f2f2ef",
            fontSize: 30,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          techwarq...
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#8b8b89", fontSize: 26, marginBottom: 16 }}>
          {tag}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {title.length > 90 ? title.slice(0, 90) + "…" : title}
        </div>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {pixels.map((p, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              background: p.orange ? "#ff5c0a" : "#2b2b2b",
            }}
          />
        ))}
      </div>
    </div>
  );
}
