import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui/components/ui/button";
import NavigBar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <NavigBar></NavigBar>
      <Button variant="destructive">Click Me</Button>
    </div>
  );
}
