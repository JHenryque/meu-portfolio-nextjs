"use client";
import { useEffect, useRef } from "react";

export default function MoveX() {
  const textRef = useRef(null);
  let pos = 0;
  let direction = 1; // 1 → vai para 60, -1 → volta

  useEffect(() => {
    const el = textRef.current;

    function animate() {
      pos += direction * 1; // velocidade

      // aplica o movimento
      //el.style.transform = `translateX(${pos}px)`;

      // inverte ao chegar nos limites
      if (pos >= 300) direction = -1;
      if (pos <= 0) direction = 1;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <p
      ref={textRef}
      style={{
        fontSize: "20px",
        fontWeight: "600",
        display: "inline-block",
        position: "relative",
      }}
    >
      Engenheiro de Software | Desenvolvedor Web
    </p>
  );
}
