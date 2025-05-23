import Header from "@/Component/Shared/Header";
import "./globals.css";
import Container from "@/Component/UI/Container";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "SURVEY",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Container>
            <Header />
            {children}
          </Container>
        </AntdRegistry>
      </body>
    </html>
  );
}
