import { Button, Card } from "ui";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-teal-700 underline">Contact</h1>
      <p className="text-gray-700">Welcome to contact!</p>
      <Button />
      <Card
        cta="Click me"
        href="https://www.google.com"
        title="Card title" 
      />
    </div>
  );
}