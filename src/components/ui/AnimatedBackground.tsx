// components/AnimatedBackground.tsx
import React, { useEffect, useRef } from "react";

const socketCode = `
int sockfd = socket(AF_INET, SOCK_STREAM, 0);
struct sockaddr_in serv_addr;
memset(&serv_addr, 0, sizeof(serv_addr));
serv_addr.sin_family = AF_INET;
serv_addr.sin_port = htons(8080);
inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr);
connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
send(sockfd, buffer, strlen(buffer), 0);
recv(sockfd, buffer, sizeof(buffer), 0);
close(sockfd);
`.trim().split("\n");

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array.from({ length: columns }, () => Math.random() * height);

    const codeLines = [...socketCode];
    
    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)"; // dark slate transparent
      ctx.fillRect(0, 0, width, height);
      
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "rgba(0, 255, 255, 0.4)"; // cyan
      
      for (let i = 0; i < columns; i++) {
        const line = codeLines[Math.floor(Math.random() * codeLines.length)];
        ctx.fillText(line, i * fontSize, drops[i] * fontSize);

        // slower fall
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5; // adjust this for speed
      }
    };

    const interval = setInterval(draw, 75); // slower frame rate

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-25"
    />
  );
};

export default AnimatedBackground;
