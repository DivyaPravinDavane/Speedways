"use client";

import React from "react";
import { InfoCard } from "@/components/ui/info-card";

const containerStyle: React.CSSProperties = {
  display: "flex",
  gap: 24,
  padding: 24,
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  background: "none",
  fontFamily: "var(--font-family)",
  margin: 0,
};

const fileContainerStyle: React.CSSProperties = {
  width: 388,
  height: 378,
  borderRadius: "1em",
  position: "relative",
  overflow: "hidden",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "none",
  boxSizing: "border-box",
};

export const Demo: React.FC = () => (
  <div className="container" style={containerStyle}>
    <div
      className="file-container"
      id="container1"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#242424", // Unique for card 1
      }}
    >
      <InfoCard
        image="https://cdn.21st.dev/assets/mirror/ab/aba248acfc608a253770a5f00baf5e16854b402f023cf1e55e844dee2fe3e8f1.jpg"
        title="American English"
        description="Master American English efficiently with personalized lessons, cultural insights, and practical exercises."
        borderColor="var(--border-color-1)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-1)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-1)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
        contentPadding="14.3px 16px"
      />
    </div>
    <div
      className="file-container"
      id="container2"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#fff", // Unique for card 2
      }}
    >
      <InfoCard
        image="https://cdn.21st.dev/assets/mirror/24/2467811be26dc56bdc8daffaa10cf96166ed67d9728015a8e55c0a3c7bd71893.jpg"
        title="British English"
        description="Explore British English nuances, from pronunciation to idiomas and dialect-specific words."
        borderColor="var(--border-color-2)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-2)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-2)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
        contentPadding="14.3px 16px"
      />
    </div>
    <div
      className="file-container"
      id="container3"
      style={{
        ...fileContainerStyle,
        ["--hover-text-color" as any]: "#2196F3", // Unique for card 3
      }}
    >
      <InfoCard
        image="https://cdn.21st.dev/assets/mirror/16/167e91e789fd906b9402a773da23ae30b2530411b606a8834d640d7fa23c86d6.jpg"
        title="עברית"
        description="לימוד השפה העברית המודרנית, דקדוק ואוצר מילים. שיפור מיומנויות דיבור וכתיבה, חקירת ספרות עברית. הכרת תרבות ישראלית, מנהגים והיסטוריה."
        borderColor="var(--border-color-3)"
        borderBgColor="var(--border-bg-color)"
        cardBgColor="var(--card-bg-color)"
        shadowColor="var(--shadow-color)"
        textColor="var(--text-color)"
        hoverTextColor="var(--hover-text-color-3)"
        fontFamily="var(--font-family)"
        rtlFontFamily="var(--rtl-font-family)"
        effectBgColor="var(--border-color-3)"
        patternColor1="var(--pattern-color1)"
        patternColor2="var(--pattern-color2)"
      />
    </div>
  </div>
);
