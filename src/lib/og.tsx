import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "iPSCC — Senior remote planning & scheduling for heavy industry";

/**
 * Fetch a static TTF from Google Fonts (a desktop UA forces truetype, which
 * Satori can render). Returns null on failure so the image still builds with
 * the default font.
 */
async function loadFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          },
        },
      )
    ).text();
    const url = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    )?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

const bars = [
  { left: 0, width: 58, tone: "#1473c6" },
  { left: 22, width: 46, tone: "#4c98e6" },
  { left: 40, width: 38, tone: "#1ed39b" },
];

export async function renderOgImage() {
  const [bold, regular] = await Promise.all([
    loadFont("Archivo", 800),
    loadFont("Archivo", 500),
  ]);

  const fonts = [
    bold && { name: "Archivo", data: bold, weight: 800 as const, style: "normal" as const },
    regular && { name: "Archivo", data: regular, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 500 | 800;
    style: "normal";
  }[];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06141f",
          padding: "72px",
          position: "relative",
          fontFamily: "Archivo, sans-serif",
        }}
      >
        {/* atmosphere */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(900px circle at 8% -15%, rgba(20,115,198,0.45), transparent 45%), radial-gradient(760px circle at 112% 125%, rgba(18,184,134,0.28), transparent 45%)",
          }}
        />

        {/* eyebrow */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "999px",
              padding: "12px 26px",
            }}
          >
            <div
              style={{
                width: "13px",
                height: "13px",
                borderRadius: "999px",
                backgroundColor: "#1ed39b",
                marginRight: "16px",
                display: "flex",
              }}
            />
            <div
              style={{
                display: "flex",
                color: "#1ed39b",
                fontSize: "26px",
                fontWeight: 500,
                letterSpacing: "5px",
              }}
            >
              REMOTE PLANNING &amp; SCHEDULING
            </div>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-2px",
            }}
          >
            Enterprise-grade planning.
          </div>
          <div
            style={{
              display: "flex",
              color: "#34c79b",
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-2px",
            }}
          >
            A fraction of the cost.
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(226,236,247,0.78)",
              fontSize: "30px",
              fontWeight: 500,
              marginTop: "28px",
              maxWidth: "920px",
            }}
          >
            Senior offshore planning &amp; scheduling for oil &amp; gas,
            petrochemical &amp; heavy industry.
          </div>

          {/* gantt motif */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
              width: "560px",
            }}
          >
            {bars.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  height: "12px",
                  width: "100%",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  marginBottom: i < bars.length - 1 ? "14px" : "0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: `${b.left}%`,
                    width: `${b.width}%`,
                    borderRadius: "999px",
                    backgroundColor: b.tone,
                    display: "flex",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#4c98e6",
              fontSize: "48px",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            iPSCC
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(226,236,247,0.65)",
              fontSize: "30px",
              fontWeight: 500,
            }}
          >
            ipscc.net
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
