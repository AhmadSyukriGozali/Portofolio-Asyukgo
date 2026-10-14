import { ImageResponse } from "next/og";

export const alt = "Ahmad Syukri Gozali — Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "#000005",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: "#7a5af5",
            opacity: 0.08,
            filter: "blur(100px)",
            right: "-100px",
            top: "-100px",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "9999px",
            background: "#5b3bd6",
            opacity: 0.06,
            filter: "blur(100px)",
            left: "-100px",
            bottom: "-100px",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
            color: "#b3a0f5",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "4px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#8e75f0",
            }}
          />

          PORTFOLIO PRIBADI
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-3px",
          }}
        >
          <span>Ahmad Syukri</span>

          <span
            style={{
              color: "#8e75f0",
            }}
          >
            Gozali.
          </span>
        </div>

        {/* Role */}
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "32px",
            color: "#e8e8ed",
            fontWeight: 500,
          }}
        >
          Informatics Student & Software Developer
        </div>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "42px",
            fontSize: "22px",
            color: "#8a8a9b",
          }}
        >
          <span>Teknik Informatika</span>
          <span>•</span>
          <span>Indonesia</span>
          <span>•</span>
          <span>Next.js</span>
        </div>

        {/* Decorative number */}
        <div
          style={{
            position: "absolute",
            right: "70px",
            bottom: "55px",
            fontSize: "120px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-8px",
          }}
        >
          01
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}